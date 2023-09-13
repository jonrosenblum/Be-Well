import React from "react";
import { Row, Col } from 'react-bootstrap';
import PatientHeader from "../Components/Pieces/PatientHeader";
import PatientDashboard from "../Components/Pieces/PatientDashboard";



export default function TherapistPortal() {
    return (
        <div>
            <Row>
                <Col xs={2}>
                    <PatientHeader />
                </Col>
                <Col xs={10}>
                    <PatientDashboard />
                </Col>
            </Row>
        </div >
    )
}
