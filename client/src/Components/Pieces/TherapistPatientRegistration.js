import React, { useState } from "react";

export default function TherapistPatientRegistration() {
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

    const handleTypeChange = (type) => {
        setRegistrationType(type);
        setFormData({ ...formData, user_type: type });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Send the form data as a JSON object to the backend
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            // .then((response) => response.json())
            // .then(response => console.log(response))
            .then((data) => {
                // Handle the response from the server (e.g., show a success message or an error message)
                console.log(data);
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
        </div>
    );
}
