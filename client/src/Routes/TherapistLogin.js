import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/LogIn.css";
import HomePageNav from "../Components/Pieces/HomePageNav";
import loginImage from '../Components/Pieces/Assets/login.png';

export default function TherapistLogin() {
    const navigate = useNavigate();

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

            localStorage.setItem("jwt-token", data.token);

            // Redirect to a protected route or therapist dashboard
            navigate("/therapist/portal");
        } catch (error) {
            // Handle login errors here
            console.error(error.message);
        }
    };

    return (
        <div className="login-div">
            <div className="image-column">
                {/* Your image element goes here */}
                <img src={loginImage} alt="" />
            </div>
            <div className="form-column">
                <form className="login-form">
                    <h2>Sign In</h2>
                    <label>
                        Enter email:
                        <input
                            type="email"
                            name="email"
                            onChange={handleChange}
                            value={formData.email}
                            placeholder="Enter email"
                        />
                    </label>
                    <label>
                        Enter password:
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={formData.password}
                            placeholder="Enter password"
                        />
                    </label>
                    <div className="form-options">
                        <label className="remember-me">
                            <input type="checkbox" name="rememberMe" /> Remember me
                        </label>
                        <span className="forgot-password">Forgot Password</span>
                    </div>
                    <button type="button" onClick={login}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )

};
