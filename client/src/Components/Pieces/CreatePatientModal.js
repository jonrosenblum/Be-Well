import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useAuthHook } from "../../Services/hooks";
import { MDBContainer } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import '../Styles/CreatePatientModal.css';


export default function CreatePatientModal({ therapist, onClose }) {
    const auth = useAuthHook();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        therapist_id: auth.user.id,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        state: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`/therapist/${therapist.id}/create-patient`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });

            if (response.ok) {
                console.log("Patient created successfully");
                alert("Patient created successfully");
                onClose(true);
            } else {
                console.error("Error creating patient");
                onClose();
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error:", error);
        }
    };

    console.log(auth.user)

    return (
        <MDBContainer>
            <Modal show={true} onHide={onClose}>
                <div className="new-patient-header">
                    <Modal.Header closeButton>
                        <Modal.Title  >Create New Patient</Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="firstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter patient first name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter patient last name"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter patient email address"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter patient password"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="Enter patient city"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="Enter patient state"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                placeholder="Enter patient phone number"
                                required
                            />
                        </Form.Group>
                        <div className="form-buttons">
                            <Button className="mb-3" type="submit">Create Patient</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </MDBContainer >

    );
}
