import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TherapistPatientRegistration() {
    const [showModal, setShowModal] = useState(false);
    const [registrationType, setRegistrationType] = useState("therapist");
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        phone_number: "",
        user_type: "therapist", // Default to therapist registration
    });

    const handleClose = () => {
        setShowModal(false);
    };

    const handleTypeChange = (type) => {
        setRegistrationType(type);
        setFormData({ ...formData, user_type: type });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLoginNowClick = () => {
        setShowModal(false);
        // Redirect to the login page based on the registration type
        if (registrationType === "therapist") {
            window.location.href = "/therapist/login";
        } else {
            window.location.href = "/patient/login";
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.message === "Therapist registered successfully" || data.message === "Patient registered successfully") {
                    setShowModal(true);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <div>
                <button
                    onClick={() => handleTypeChange("therapist")}
                    className={registrationType === "therapist" ? "active" : ""}
                >
                    Therapist
                </button>
                <button
                    onClick={() => handleTypeChange("patient")}
                    className={registrationType === "patient" ? "active" : ""}
                >
                    Patient
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>{registrationType === "therapist" ? "Therapist Registration" : "Patient Registration"}</h3>
                <label>
                    First Name:
                    <input type="text" name="first_name" onChange={handleChange} value={formData.first_name} />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="last_name" onChange={handleChange} value={formData.last_name} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange} value={formData.email} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange} value={formData.password} />
                </label>
                <label>
                    City:
                    <input type="text" name="city" onChange={handleChange} value={formData.city} />
                </label>
                <label>
                    State:
                    <input type="text" name="state" onChange={handleChange} value={formData.state} />
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="phone_number" onChange={handleChange} value={formData.phone_number} />
                </label>
                <button type="submit">
                    Register as {registrationType === "therapist" ? "Therapist" : "Patient"}
                </button>
            </form>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You can now{" "}
                    <Link to={registrationType === "therapist" ? "/therapist/login" : "/patient/login"}>
                        <button>Login</button>
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/">
                        <button>Back Home</button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
