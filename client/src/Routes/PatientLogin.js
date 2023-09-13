import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAuthHook } from "../Services/hooks";
import { USER_TYPE } from "../Services/authSlice";
import HomePageNav from "../Components/Pieces/HomePageNav";

import loginImage from '../Components/Pieces/Assets/login.png';
import { MDBCardBody, MDBCardText, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";


export default function PatientLogin() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const auth = useAuthHook()


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

            dispatch(auth.actions.setAuth({ ...data, userType: USER_TYPE.PATIENT }))
            localStorage.setItem("jwt-token", data.access_token);

            // Redirect to a protected route or therapist dashboard
            navigate("/patient/portal");
        } catch {
            // Handle login errors here
            setLoginFailed(true);
        }
    };

    return (
        <div>
            <HomePageNav />
            <MDBContainer>
                <MDBCardBody>
                    <div className="page-content">
                        <MDBContainer className="mt-5">
                            <MDBRow className="row justify-content-center">
                                <MDBCol className="col-md-10 col-lg-8">
                                    <MDBCardText className="text-center mb-4">
                                        <h2 class="h5 mt-3 mb-4">Welcome back!</h2>
                                    </MDBCardText>
                                    <div class="flash error alert alert-warning">You need to sign in or sign up before continuing.</div>
                                    <form className="login-form">
                                        <div className="form-group">
                                            <label htmlFor="email">Enter email:</label>
                                            <input
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                value={formData.email}
                                                className="form-control"
                                                id="email"
                                                placeholder="Enter email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Enter password:</label>
                                            <input
                                                type="password"
                                                name="password"
                                                onChange={handleChange}
                                                value={formData.password}
                                                className="form-control"
                                                id="password"
                                                placeholder="Enter password"
                                            />
                                        </div>
                                        <div className="form-options">
                                            <div className="form-group form-check">
                                                <input
                                                    type="checkbox"
                                                    className="form-check-input"
                                                    id="rememberMe"
                                                    name="rememberMe"
                                                />
                                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                                            </div>
                                            {loginFailed && <p>Username or password incorrect.</p>}
                                        </div>
                                        <button
                                            type="button"
                                            onClick={login}
                                            className="btn btn-primary"
                                        >
                                            Login
                                        </button>
                                    </form>
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p>Sign Up</p>
                                            <p>Forget password?</p>
                                        </div>
                                        <p>Resend confirmation</p>
                                    </div>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </div>
                </MDBCardBody>
            </MDBContainer >
        </div>

    );
}
