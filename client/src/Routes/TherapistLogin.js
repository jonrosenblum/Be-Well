import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/LogIn.css";
import HomePageNav from "../Components/Pieces/HomePageNav";

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
            <HomePageNav />
            <h2>Therapist Login</h2>
            <form className="login-form">
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange} value={formData.email} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange} value={formData.password} />
                </label>
                <button type="button" onClick={login}>
                    Login
                </button>
            </form>
        </div>
    );
}
