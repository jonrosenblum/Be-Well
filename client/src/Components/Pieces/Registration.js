import React, { useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBInput } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import placeholderImage from "./Assets/placeholder.png"
import { useNavigate } from "react-router-dom";
import "../Styles/Registration.css"

export default function Registration() {

    const navigate = useNavigate()
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
                    alert("Successfully registered, redirecting you to the login page")
                    setTimeout(() => {
                        navigate("/login");

                    }, 3000);

                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <MDBContainer className="">
            <MDBRow className="d-flex align-items-center">
                <MDBCol>
                    <form onSubmit={handleSubmit} className="">
                        <h2 className="getting-started-h2">Therapist Registration</h2>
                        <div className="form-group">
                            <label htmlFor="first_name">First Name</label>
                            <MDBInput
                                type="text"
                                id="first_name"
                                name="first_name"
                                placeholder="Enter first name"
                                onChange={handleChange}
                                value={formData.first_name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name</label>
                            <MDBInput
                                type="text"
                                id="last_name"
                                name="last_name"
                                placeholder="Enter last name"
                                onChange={handleChange}
                                value={formData.last_name}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <MDBInput
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <MDBInput
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter password"
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <MDBInput
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Enter city"
                                onChange={handleChange}
                                value={formData.city}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <MDBInput
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Enter state"
                                onChange={handleChange}
                                value={formData.state}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone_number">Phone Number</label>
                            <MDBInput
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                placeholder="Enter phone number"
                                onChange={handleChange}
                                value={formData.phone_number}
                            />
                        </div>
                        <div className="submit-button">
                            <Button className="btn-info" type="submit">Register</Button>
                        </div>
                    </form>
                    <></>
                </MDBCol>

                <MDBCol><img src={placeholderImage} width="700" height="500" alt="" /></MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
