import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Styles/TherapistRegistration.css'
import HomePageNav from './HomePageNav'

export default function TherapistRegistration() {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        city: "",
        state: "",
        phone_number: "",
        user_type: "therapist",
    });

    const handleClose = () => {
        setShowModal(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                if (data.message === "Therapist registered successfully") {
                    setShowModal(true);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <div className="form-div">
            <HomePageNav />
            <h1>Getting Started</h1>
            <div className="content">
                <div className="div-1">
                    <p>Getting started is as easy as 1,2,3</p>
                </div>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <h2 className="getting-started-h2">Therapist Registration</h2>
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
                    <button type="submit" className="registration-button">Register as Therapist</button>
                </form>
                <div className="div-2">
                    <p>Register here and start your Journey on BeWell</p>
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You can now{" "}
                    <Link to="/therapist/login">
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
