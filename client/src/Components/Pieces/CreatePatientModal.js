import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useAuthHook } from "../../Services/hooks";

export default function CreatePatientModal({ therapist, onClose }) {
    const auth = useAuthHook();
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

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create New Patient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="firstName">
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
                    <Form.Group controlId="lastName">
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
                    <Form.Group controlId="email">
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
                    <Form.Group controlId="password">
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
                    <Form.Group controlId="city">
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
                    <Form.Group controlId="state">
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
                    <Form.Group controlId="phoneNumber">
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
                    <Button type="submit">Create Patient</Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
