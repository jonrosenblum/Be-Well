import React from "react";
import './Styles/Welcome.css'

export default function Welcomee() {
    return (
        <div className="welcome-container">
            <div className="small-container">
                <h1>Session Management</h1>
                <img src="image1.jpg" alt="" />
                <p>Session Management Description</p>
            </div>
            <div className="small-container">
                <h1>Patient Portals</h1>
                <img src="image2.jpg" alt="Image 2" />
                <p>Patient Portals Description</p>
            </div>
            <div className="small-container">
                <h1>Scheduling</h1>
                <img src="image3.jpg" alt="Image 3" />
                <p>Scheduling Description</p>
            </div>
            <div className="small-container">
                <h1>Sentiment Scores / Overall Wellness </h1>
                <img src="image4.jpg" alt="Image 4" />
                <p>Wellness Tracker Description</p>
            </div>
        </div>
    );
}
