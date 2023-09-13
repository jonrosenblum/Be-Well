import React, { useState, useEffect, useCallback } from "react";
import PatientSessionsModal from "./PatientSessionsModal";
import SessionUploadModal from "./SessionUploadModal";
import CreatePatientModal from "./CreatePatientModal";
import { useAuthHook } from "../../Services/hooks";
import '../Styles/TherapistPortal.css'
import { api } from "../../Services/api";

export default function TherapistDashboard() {
  const auth = useAuthHook();
  const [patients, setPatients] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showSessionUploadModal, setShowSessionUploadModal] = useState(false);
  const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);

  const loadPatients = useCallback(
    () => {
      api.getPatients()
        .then((data) => setPatients(data))
        .catch((error) => console.error("Error:", error))
    },
    []
  );

  useEffect(() => {
    if (patients) {
      return;
    }
    loadPatients();
  }, [patients, loadPatients]);

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

  const doClosePatientModal = (reload = false) => {
    if (reload) {
      loadPatients();
    }
    setShowCreatePatientModal(false);
  };

  if (!patients?.length) {
    return <button className="btn btn-primary">Loading</button>
  }

  return (
    <div className="container-fluid">
      <h3>My Profile</h3>

      <button className="btn btn-info" onClick={handleCreatePatientClick}>Create New Patient</button>
      <table className="table patient-table">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Appointment Date</th>
            <th>Appointment Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.first_name} {patient.last_name}</td>
              <td>Appointment Date</td>
              <td>Appointment Time</td>
              <td>Confirmed</td>
              <td>
                <button className="btn btn-info" onClick={() => handleUploadSessionClick(patient)}>Upload New Session</button>
                <button className="btn btn-info" onClick={() => handleMoreInfoClick(patient)}>More Info</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showCreatePatientModal && (
        <CreatePatientModal therapist={{ id: 1 }} onClose={doClosePatientModal} />
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
  );
}
