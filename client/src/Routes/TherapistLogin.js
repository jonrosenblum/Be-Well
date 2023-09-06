import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for redirection

export default function TherapistLogin() {
    const navigate = useNavigate(); // Initialize history

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLoginClick = () => {
        // Simulate a login request here (replace with your actual login logic)
        // For example, you can send a POST request to your backend API for authentication
        // If login is successful, redirect to the therapist portal
        // If login fails, show an error message or handle it accordingly

        // For demonstration, let's assume login is successful
        // You can replace this with your actual logic
        const fakeLoginSuccess = true;

        if (fakeLoginSuccess) {
            // Redirect to the therapist portal
            navigate("/therapist/portal");
        } else {
            // Handle login failure (show an error message, etc.)
            console.error("Login failed");
        }
    };

    return (
        <div>
            <h2>Therapist Login</h2>
            <form>
                <label>
                    Email:
                    <input type="email" name="email" onChange={handleChange} value={formData.email} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={handleChange} value={formData.password} />
                </label>
                <button type="button" onClick={handleLoginClick}>
                    Login
                </button>
            </form>
        </div>
    );
}
