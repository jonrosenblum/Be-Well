import React from "react";
import "./Styles//LogoutSuccessAlert.css"; // Import CSS for styling

export default function LogoutSuccessAlert({ onClose }) {
    return (
        <div className="logout-success-overlay">
            <div className="logout-success-modal">
                <p>Logout Successful</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
