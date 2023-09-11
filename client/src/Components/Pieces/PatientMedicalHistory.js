import React from "react";
import { Container } from "react-bootstrap";

export default function PatientMedicalHistory({ patient }) {
    return (
        <Container>
            {/* Render the medical history information here */}
            <h2>Medical History for {patient.first_name} {patient.last_name}</h2>
            {/* Add placeholders or components to display the medical history */}
        </Container>
    );
}
