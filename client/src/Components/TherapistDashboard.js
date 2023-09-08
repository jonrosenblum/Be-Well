import React, { useState, useEffect } from "react";
import PatientSessionsModal from "../Components/Pieces/PatientSessionModal";
import SessionUploadModal from "../Components/Pieces/SessionUploadModal"; // Import the new modal component
import CreatePatientModal from "../Components/Pieces/CreatePatientModal";

export default function TherapistDashboard() {
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(null);
    const [showPatientModal, setShowPatientModal] = useState(false);
    const [showSessionUploadModal, setShowSessionUploadModal] = useState(false);
    const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);

    useEffect(() => {
        fetch("/therapist/patients")
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

    const handleCreatePatientClick = () => {
        setShowCreatePatientModal(true);
    };

    console.log(patients)

    return (
        <div className="therapist-dashboard-full">
            <button onClick={handleCreatePatientClick}>Create New Patient</button>
            <div className="therapist-dashboard">
                <h2>Therapist Dashboard</h2>
                {patients.map((patient) => (
                    <div key={patient.id} className="patient-map">
                        <li className="patient-name">
                            Patient Name: {patient.first_name} {patient.last_name}
                        </li>
                        <div className="buttons-flex">
                            <button onClick={() => handleMoreInfoClick(patient)}>More Info</button>
                            <button onClick={() => handleUploadSessionClick(patient)}>Upload New Session</button>
                        </div>
                    </div>
                ))}
                {showCreatePatientModal && (
                    <CreatePatientModal
                        therapist={{ "id": 1 }}
                        onClose={() => setShowCreatePatientModal(false)}
                    />
                )}
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
        </div>
    );
}
