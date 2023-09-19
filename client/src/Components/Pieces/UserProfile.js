import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import PatientMedicalHistory from "./PatientMedicalHistory"; // Import the new component
import { api } from "../../Services/api";
import { MDBCard, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export default function UserProfile() {
    /** @typedef {import("../../Services/authSlice").User} Patient */

    // State to store the list of patients and the currently selected patient
    const [patients, setPatients] = useState( /** @type {Patient[]|null} */(null));
    const [selectedPatient, setSelectedPatient] = useState(/** @type {Patient} */(null));

    // Function to handle the selection of a patient
    const handlePatientSelect = (patient_id) => {
        // Find the selected patient based on their ID
        const patient = patients.find(p => p.id + '' === patient_id + '')
        setSelectedPatient(patient);
    };

    // Function to load the list of patients from an API
    const loadPatients = () => {
        api.getPatients().then(setPatients);
    }

    // UseEffect to load patients when the component mounts or when 'patients' is null
    useEffect(() => {
        if (patients) return;
        loadPatients();
    }, [patients])

    // Render a loading button if 'patients' is null
    if (!patients) {
        return <Button>Loading</Button>
    }

    return (
        <Container fluid>
            <>
                <MDBRow>
                    <Form.Select aria-label="Default select example" onChange={(e) => handlePatientSelect(e.target.value)}>
                        <option>Open this select menu</option>
                        {patients?.map(patient => <option value={patient.id}>{patient.first_name} {patient.last_name}</option>)}
                    </Form.Select>
                </MDBRow>
            </>
            {selectedPatient &&
                <Card>
                    <Card.Body>
                        <PatientMedicalHistory patient={selectedPatient} /></Card.Body>
                </Card>}
            <MDBContainer>

                {
                    !selectedPatient ? <> Select a patient to view details</> : <>
                        <Row>
                            <Col md={3}>
                                <strong>Name:</strong>
                            </Col>
                            <Col md={3}>
                                <span>{selectedPatient.first_name} {selectedPatient.last_name}</span>
                            </Col>
                            <Col md={3}>
                                <strong>Email:</strong>
                            </Col>
                            <Col md={3}>
                                <span>{selectedPatient.email}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <strong>Phone Number:</strong>
                            </Col>
                            <Col md={3}>
                                <span>{selectedPatient.phone}</span>
                            </Col>
                            <Col md={3}>
                                <strong>ID:</strong>
                            </Col>
                            <Col md={3}>
                                <span>{selectedPatient.id}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <strong>Address:</strong>
                            </Col>
                            <Col md={3}>
                                <span>{selectedPatient.address}</span>
                            </Col>
                            <Col md={3}>
                                <strong>Date of Birth:</strong>
                            </Col>
                            <Col md={3}>
                                <span>{selectedPatient.dob}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={3}>
                                <strong>Age:</strong>
                            </Col>
                            <Col md={3}>
                                <span>{selectedPatient.age}</span>
                            </Col>
                        </Row>


                    </>
                }

            </MDBContainer>



        </Container>
    );
}
