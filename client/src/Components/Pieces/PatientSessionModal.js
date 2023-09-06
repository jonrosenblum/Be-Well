// PatientSessionsModal.js
import React, { useState, useEffect } from "react";

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
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h3>Sessions for {patient.first_name} {patient.last_name}</h3>
                <ul>
                    {sessions.map((session) => (
                        <li key={session.id}>
                            {/* Display session information here */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
