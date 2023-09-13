import React from "react";
import { Row, Col } from 'react-bootstrap';
import PatientHeader from "../Components/Pieces/PatientHeader";
import PatientDashboard from "../Components/Pieces/PatientDashboard";



export default function TherapistPortal() {
    return (
        <div>
            <Row>
                <Col xs={1}>
                    <PatientHeader />
                </Col>
                <Col xs={1}>
                    <h2>Hello, "Patient First Name"</h2>
                </Col>
                <Col xs={9
                }>
                    <PatientDashboard />
                </Col>
            </Row>
        </div >
    )
}
