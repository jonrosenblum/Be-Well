import React, { useState, useEffect } from "react";
import PatientSessionsModal from "../Components/Pieces/PatientSessionModal";
import SessionUploadModal from "../Components/Pieces/SessionUploadModal"; // Import the new modal component

export default function TherapistDashboard() {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [showPatientModal, setShowPatientModal] = useState(false);
    const [showSessionUploadModal, setShowSessionUploadModal] = useState(false);

    useEffect(() => {
        // Fetch the list of patients from the backend when the component mounts
        fetch("/therapist/patients") // Replace with your API endpoint
            .then((response) => response.json())
            .then((data) => setPatients(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    const handleMoreInfoClick = (patient) => {
        setSelectedPatient(patient);
        setShowPatientModal(true);
    };

    const handleUploadSessionClick = (patient) => {
        setShowSessionUploadModal(true);
        setSelectedPatient(patient);
    };
    console.log(selectedPatient)
    return (
        <div className="therapist-dashboard">
            <h2>Therapist Dashboard</h2>
            {patients.map((patient) => (
                <div key={patient.id} className="patient-map">
                    <li className="patient-name">
                        Patient Name: {patient.first_name} {patient.last_name}
                    </li>
                    <button onClick={() => handleMoreInfoClick(patient)}>More Info</button>
                    <button onClick={() => handleUploadSessionClick(patient)}>Upload New Session</button>
                </div>
            ))}
            {showPatientModal && (
                <PatientSessionsModal
                    patient={selectedPatient}
                    onClose={() => setShowPatientModal(false)}
                />
            )}
            {showSessionUploadModal && (
                <SessionUploadModal
                    patient={selectedPatient}
                    show={showSessionUploadModal}
                    onClose={() => setShowSessionUploadModal(false)}
                />
            )}
        </div>
    );
}
