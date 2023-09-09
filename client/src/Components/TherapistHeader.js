import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "../Components/Styles/TherapistHeader.css"; // Import the CSS file
import LogoutSuccessAlert from "../Components/Pieces/LogoutSuccessAlert"; // Import the LogoutSuccessAlert component


export default function TherapistHeader() {
    const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate for routing

    const handleLogout = async () => {
        try {
            const response = await fetch("/therapist/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("jwt-token")}`, // Include the JWT token
                },
            });

            if (!response.ok) {
                throw new Error("Logout failed");
            }

            // Clear the JWT token from local storage
            localStorage.removeItem("jwt-token");

            // Show the logout success alert
            setShowLogoutSuccess(true);

            // Redirect the user to the login page or another desired destination
            navigate("/login"); // Replace with your desired URL
        } catch (error) {
            // Handle logout errors here
            console.error(error.message);
        }
    };


    return (
        <nav>
            <ul className="navbar">
                <li>
                    <a href="/therapist/portal">Dashboard</a>
                </li>
                <li>
                    <a href="/therapist/profile">Profile</a>
                </li>
                <li>
                    <a href="/therapist/settings">Settings</a>
                </li>
                <li>
                    <button onClick={handleLogout}>Logout</button>
                </li>
            </ul>
            {showLogoutSuccess && (
                <LogoutSuccessAlert
                    onClose={() => setShowLogoutSuccess(false)}
                />
            )}
        </nav>
    );
}