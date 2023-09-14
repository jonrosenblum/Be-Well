import React, { useState, useEffect, useCallback } from "react";
import PatientSessionsModal from "./PatientSessionsModal";
import SessionUploadModal from "./SessionUploadModal";
import CreatePatientModal from "./CreatePatientModal";
import { useAuthHook } from "../../Services/hooks";
import '../Styles/TherapistPortal.css'
import { api } from "../../Services/api";
import { MDBContainer, MDBCol, MDBCard, MDBRow, MDBCardText, MDBCardTitle, MDBBtn, MDBCardBody } from "mdb-react-ui-kit";

export default function TherapistDashboard({ therapist }) {
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
  console.log(auth.id);

  if (!patients?.length) {
    return <button className="btn btn-primary">Loading</button>
  }

  return (
    <>
      <MDBContainer>
        <MDBRow >
          <MDBRow className="d-flex align-items-center">
            <MDBCol size="4" className="mb-2">
              <MDBCard>
                <MDBCardTitle>Welcome,</MDBCardTitle>
                <MDBCardText>Dr. {auth.user?.last_name}</MDBCardText>
              </MDBCard>
            </MDBCol>
            <MDBCol className="ms-auto text-end">
              <button className=" btn btn-info" onClick={handleCreatePatientClick}>Create New Patient</button>
            </MDBCol>
          </MDBRow>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="4" className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Upcoming Sessions</MDBCardTitle>
                    <MDBCardText>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4" className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Dashboard</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol size="4" className="mb-4">
                <MDBCard>
                  <MDBCardBody>
                    <MDBCardTitle>Send Invoice</MDBCardTitle>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>

        </MDBRow>
        <MDBRow>
          <MDBContainer fluid>

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
          </MDBContainer>
        </MDBRow>
      </MDBContainer >
    </>
  );
}
