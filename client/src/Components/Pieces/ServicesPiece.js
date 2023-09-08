import React from "react";
import placeholderImage from "./Assets/placeholder.png";
import './Styles/ServicePiece.css'


export default function ServicesPiece() {
    return (
        < div className="parent-container">
            <div className="welcome-container">
                <div className="division-div-1">
                    <div className="small-container">
                        <h1>Session Management</h1>
                        <img src={placeholderImage} alt="" />
                        <p>Session Management Description</p>
                    </div>
                    <div className="small-container">
                        <h1>Patient Portals</h1>
                        <img src={placeholderImage} alt="" />

                        <p>Patient Portals Description</p>
                    </div>
                </div>
                <div className="division-div-2">
                    <div className="small-container">
                        <h1>Scheduling</h1>
                        <img src={placeholderImage} alt="" />

                        <p>Scheduling Description</p>
                    </div>
                    <div className="small-container">
                        <h1>Sentiment Scores</h1>
                        <img src={placeholderImage} alt="" />

                        <p>Wellness Tracker Description</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
