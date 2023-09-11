import React, { useState, useEffect, useCallback } from "react";
import { Button, Container, Row, Col, Table } from "react-bootstrap";
import PatientSessionsModal from "./PatientSessionsModal";
import SessionUploadModal from "./SessionUploadModal";
import CreatePatientModal from "./CreatePatientModal";
import { useAuthHook } from "../../Services/hooks";
import UserProfile from "./UserProfile";
import '../Styles/TherapistPortal.css'

export default function TherapistDashboard() {
  const auth = useAuthHook();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showPatientModal, setShowPatientModal] = useState(false);
  const [showSessionUploadModal, setShowSessionUploadModal] = useState(false);
  const [showCreatePatientModal, setShowCreatePatientModal] = useState(false);

  const loadPatients = useCallback(
    () =>
      fetch(`/therapist/patients`, {
        headers: { Authorization: `Bearer ${auth.access_token}` },
      })
        .then((response) => response.json())
        .then((data) => setPatients(data))
        .catch((error) => console.error("Error:", error)),
    [auth.access_token]
  );

  useEffect(() => {
    loadPatients();
  }, [loadPatients]);

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


  return (
    <Container fluid>
      <h3>My Profile</h3>

      <Button variant="info" onClick={handleCreatePatientClick}>Create New Patient</Button>
      <Table striped bordered hover className="patient-table" >
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
                <Button variant="info" onClick={() => handleUploadSessionClick(patient)}>Upload New Session</Button>
                <Button variant="info" onClick={() => handleMoreInfoClick(patient)}>More Info</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
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
    </Container>
  );
}
