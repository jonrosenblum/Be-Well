import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";

export default function PatientMedicalHistory({ patient }) {
    return (
        <MDBContainer className="">
            <h2>Medical Records for {patient.first_name} {patient.last_name}</h2>
        </MDBContainer>
    );
}
