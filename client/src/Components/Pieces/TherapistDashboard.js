import React, { useState, useEffect, useCallback } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import PatientSessionsModal from "./PatientSessionsModal";
import SessionUploadModal from "./SessionUploadModal";
import CreatePatientModal from "./CreatePatientModal";
import { useAuthHook } from "../../Services/hooks";

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
      <Row>
        <Col>
          <Button onClick={handleCreatePatientClick}>Create New Patient</Button>
          <div>
            <h2>Therapist Dashboard</h2>
            {patients.map((patient) => (
              <div key={patient.id}>
                <p>Patient Name: {patient.first_name} {patient.last_name}</p>
                <div>
                  <Button onClick={() => handleMoreInfoClick(patient)}>More Info</Button>
                  <Button onClick={() => handleUploadSessionClick(patient)}>Upload New Session</Button>
                </div>
              </div>
            ))}
          </div>
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
        </Col>
      </Row>
    </Container>
  );
}
