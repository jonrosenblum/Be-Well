// TherapistDashboard.js
import React, { useState, useEffect } from "react";
import PatientSessionsModal from "../Components/Pieces/PatientSessionModal";

export default function TherapistDashboard() {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Fetch the list of patients from the backend when the component mounts
        fetch("/therapist/patients") // Replace with your API endpoint
            .then((response) => response.json())
            .then((data) => setPatients(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    const handlePatientClick = (patient) => {
        setSelectedPatient(patient);
        setShowModal(true);
    };

    return (
        <div>
            <h2>Therapist Dashboard</h2>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id} onClick={() => handlePatientClick(patient)}>
                        {patient.first_name} {patient.last_name}
                    </li>
                ))}
            </ul>
            {showModal && (
                <PatientSessionsModal
                    patient={selectedPatient}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}