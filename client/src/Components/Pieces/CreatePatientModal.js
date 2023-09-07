import React, { useState } from "react";
import './Styles/ModalStyles.css'


export default function CreatePatientModal({ therapist, onClose }) {

    const [formData, setFormData] = useState({
        therapist_id: therapist.id,
        email: ""
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    };
    console.log(formData)


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`/therapist/${therapist.id}/create-patient`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log("Session uploaded successfully");


            } else {
                console.log(response);
                console.error("Error uploading session");
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    };


    const { firstName, lastName, email, password, city, state, phoneNumber } = formData;


    return (
        <div className="modal-container">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <div className="patient-form">
                    <form className="create-patient-form" onSubmit={handleSubmit}>
                        <div className="patient-form-group">
                            <div className="first-last">
                                <label className="patient-form-label">
                                    First Name:
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                    placeholder="Enter patient first name"
                                    required
                                />
                                <label className="patient-form-label">
                                    Last Name:
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                    placeholder="Enter patient last name"
                                    required
                                />
                            </div>
                            <div className="patient-email-pass">
                                <label className="patient-form-label">
                                    Email Address:
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                                <label className="patient-form-label">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handleChange}
                                    placeholder="Enter patient password"
                                    required
                                />
                            </div>
                            <label className="patient-form-label">
                                City:
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={city}
                                onChange={handleChange}
                                placeholder="Enter patient city"
                                required
                            />
                            <label className="patient-form-label">
                                State:
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={state}
                                onChange={handleChange}
                                placeholder="Enter patient state"
                                required
                            />
                            <label className="patient-form-label">
                                Phone Number:
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter patient phone number"
                                required
                            />
                        </div>
                        <button type="submit">Create Patient</button>
                    </form>
                </div>
            </div>
        </div>
    );
}