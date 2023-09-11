import React, { useState } from "react";
import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import PatientMedicalHistory from "./PatientMedicalHistory"; // Import the new component

export default function UserProfile() {
    const patients = [
        {
            id: 1,
            first_name: "John",
            last_name: "Doe",
            email: "john.doe@example.com",
            phone: "(123) 456-7890",
            address: "123 Main St, City, Country",
            dob: "January 1, 1990",
            age: "33 years",
            // Add more patient data as needed
        },
        {
            id: 2,
            first_name: "Jon",
            last_name: "Rosenblum",
            email: "john.Rosenblum@example.com",
            phone: "(123) 456-7890",
            address: "123 Main St, City, Country",
            dob: "January 16, 1990",
            age: "59 years",

        },
        // Add more patients
    ];

    const [selectedPatient, setSelectedPatient] = useState(patients[0]);

    const handlePatientSelect = (patient) => {
        setSelectedPatient(patient);
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <DropdownButton
                        id="patient-dropdown"
                        title={'Select a Patient'}
                    >
                        {patients.map((patient) => (
                            <Dropdown.Item
                                key={patient.id}
                                onSelect={() => handlePatientSelect(patient)}
                            >
                                {`${patient.first_name} ${patient.last_name}`}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>
            </Row>
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

            {/* Render the PatientMedicalHistory component */}
            <PatientMedicalHistory patient={selectedPatient} />
        </Container>
    );
}
