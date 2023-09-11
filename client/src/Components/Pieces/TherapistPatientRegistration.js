import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
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
        <Container fluid>
            <HomePageNav />
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1 className="text-center">Getting Started</h1>
                    <div className="content">
                        <Row>
                            <Col className="div-1">
                                <p>Getting started is as easy as 1, 2, 3</p>
                            </Col>
                            <Col>
                                <Form onSubmit={handleSubmit} className="registration-form">
                                    <h2 className="getting-started-h2">Therapist Registration</h2>
                                    <Form.Group>
                                        <Form.Label>First Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="first_name"
                                            onChange={handleChange}
                                            value={formData.first_name}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Last Name:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="last_name"
                                            onChange={handleChange}
                                            value={formData.last_name}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={formData.password}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>City:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="city"
                                            onChange={handleChange}
                                            value={formData.city}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>State:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="state"
                                            onChange={handleChange}
                                            value={formData.state}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone Number:</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone_number"
                                            onChange={handleChange}
                                            value={formData.phone_number}
                                        />
                                    </Form.Group>
                                    <Button type="submit" className="registration-button">
                                        Register as Therapist
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="div-2">
                                <p>Register here and start your journey on BeWell</p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    You can now{" "}
                    <Link to="/therapist/login">
                        <Button variant="primary">Login</Button>
                    </Link>
                </Modal.Body>
                <Modal.Footer>
                    <Link to="/">
                        <Button variant="secondary">Back Home</Button>
                    </Link>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
