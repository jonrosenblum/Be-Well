import React, { useState, useEffect } from "react";
import "./Styles/ModalStyles.css"
export default function PatientSessionsModal({ patient, onClose }) {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (patient) {
            // Fetch sessions for the selected patient when the modal opens
            fetch(`/patient/${patient.id}/sessions`) // Replace with your API endpoint
                .then((response) => response.json())
                .then((data) => setSessions(data))
                .catch((error) => console.error("Error:", error));
        }
    }, [patient]);

    return (
        <div className="modal-container">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <h3 className="modal-title">Sessions for {patient.first_name} {patient.last_name}</h3>
                <ul className="modal-body">
                    {sessions.map((session) => (
                        <li className="session-map" key={session.id}>
                            <h4>Session Transcript</h4>
                            <p>{session.transcript}</p>
                            <button>Detailed Information</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}