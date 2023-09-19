import React, { useState, useEffect, useCallback } from "react";
import PatientSessionsModal from "./PatientSessionsModal";
import SessionUploadModal from "./SessionUploadModal";
import CreatePatientModal from "./CreatePatientModal";
import '../Styles/TherapistPortal.css'
import { api } from "../../Services/api";
import { MDBContainer, MDBCol, MDBCard, MDBRow, MDBCardText, MDBBadge, MDBCardTitle, MDBCardHeader, MDBCardBody, MDBTable } from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function TherapistDashboard({ therapist }) {
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
    <>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol size="6">
            <Link to='/therapist/appointments'>
              <MDBCard background='info' className='text-body mb-3'>
                <MDBCardBody className="text-center">
                  <MDBCardTitle>Appointments</MDBCardTitle>
                  <MDBCardText>
                    Schedule a new appointment or view schedule
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Link>
          </MDBCol>
          <MDBCol size="6">
            <Link to='/therapist/patient-records'>
              <MDBCard background='info' className='text-body mb-3'>
                <MDBCardBody className="text-center">
                  <MDBCardTitle>Patient Records</MDBCardTitle>
                  <MDBCardText>
                    View patient records
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Link>

          </MDBCol>
        </MDBRow>
        <MDBContainer>
          <MDBRow >
            <MDBCol className="ms-auto text-end">
              <button className=" btn btn-info" onClick={handleCreatePatientClick}>+ New Patient</button>
            </MDBCol>
          </MDBRow>

        </MDBContainer>
        <MDBRow>
          <MDBContainer fluid>
            <MDBTable striped hover className="table patient-table">
              <thead>
                <tr>
                  <th>ID</th>
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
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{patient.first_name} {patient.last_name}</p>
                          <p className="text-muted mb-0">{patient.email}</p>
                        </div>
                      </div>
                    </td>
                    <td>Appointment Date</td>
                    <td>Appointment Time</td>
                    <td>
                      <MDBBadge color="success" pill>
                        Confirmed
                      </MDBBadge>
                    </td>
                    <td>
                      <div className="d-flex ">
                        <Button className="btn-info" onClick={() => handleUploadSessionClick(patient)}>
                          Upload New Session
                        </Button>
                        <Button className="btn-info" onClick={() => handleMoreInfoClick(patient)}>
                          More Info
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </MDBTable>
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
