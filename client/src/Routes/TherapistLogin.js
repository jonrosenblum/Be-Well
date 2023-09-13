import React, { useState } from "react";
import { Modal, Button, Form, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAuthHook } from "../Services/hooks";
import { USER_TYPE } from "../Services/authSlice";

import loginImage from '../Components/Pieces/Assets/login.png';

export default function TherapistLogin() {
    const dispatch = useAppDispatch()
    const auth = useAuthHook()
    const navigate = useNavigate();



    const [loginFailed, setLoginFailed] = useState(false);


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const login = async () => {
        try {
            const response = await fetch('/therapist/login', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("There was a problem with the login request");
            }

            const data = await response.json();

            dispatch(auth.actions.setAuth({ ...data, userType: USER_TYPE.THERAPIST }))
            localStorage.setItem("jwt-token", data.access_token);

            // Redirect to a protected route or therapist dashboard
            navigate("/therapist/portal");
        } catch (error) {
            // Handle login errors here
            setLoginFailed(true);
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <div className="login-div">
                        <Row>
                            <Col className="image-column">
                                <Image src={loginImage} alt="" fluid />
                            </Col>
                            <Col>
                                <Form className="login-form">
                                    <h2 className="text-center">Sign In</h2>
                                    <Form.Group>
                                        <Form.Label>Enter email:</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                            placeholder="Enter email"
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Enter password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            value={formData.password}
                                            placeholder="Enter password"
                                        />
                                    </Form.Group>
                                    <div className="form-options">
                                        <Form.Group>
                                            <Form.Check
                                                type="checkbox"
                                                label="Remember me"
                                                name="rememberMe"
                                            />
                                        </Form.Group>
                                        {loginFailed && <p>Username or password incorrect.</p>}
                                        <span className="forgot-password">Forgot Password</span>
                                    </div>
                                    <Button
                                        type="button"
                                        onClick={login}
                                        className="btn btn-primary"
                                    >
                                        Login
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
