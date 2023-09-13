import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePageNav from "./HomePageNav";

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
        <div className="container-fluid">
            <HomePageNav />
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Getting Started</h1>
                    <div className="content">
                        <div className="row">
                            <div className="col">
                                <p>Getting started is as easy as 1, 2, 3</p>
                            </div>
                            <div className="col">
                                <form onSubmit={handleSubmit} className="registration-form">
                                    <h2 className="getting-started-h2">Therapist Registration</h2>
                                    <div className="form-group">
                                        <label htmlFor="first_name">First Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            name="first_name"
                                            onChange={handleChange}
                                            value={formData.first_name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="last_name">Last Name:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last_name"
                                            name="last_name"
                                            onChange={handleChange}
                                            value={formData.last_name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={formData.password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            onChange={handleChange}
                                            value={formData.city}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            onChange={handleChange}
                                            value={formData.state}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone_number">Phone Number:</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone_number"
                                            name="phone_number"
                                            onChange={handleChange}
                                            value={formData.phone_number}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary registration-button">
                                        Register as Therapist
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>Register here and start your journey on BeWell</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Registration Successful</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                You can now{" "}
                                <Link to="/therapist/login" className="btn btn-primary">
                                    Login
                                </Link>
                            </div>
                            <div className="modal-footer">
                                <Link to="/" className="btn btn-secondary">
                                    Back Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
