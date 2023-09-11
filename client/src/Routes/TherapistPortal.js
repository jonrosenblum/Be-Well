import React from "react";
import { Row, Col } from 'react-bootstrap';
import TherapistHeader from "../Components/Pieces/TherapistHeader";
import TherapistDashboard from "../Components/Pieces/TherapistDashboard";



export default function TherapistPortal() {
    return (
        <div>
            <Row className="custom-row">
                <Col xs={2}>
                    <TherapistHeader />
                </Col>
                <Col xs={10}>
                    <TherapistDashboard />
                </Col>
            </Row>
        </div >
    )
}
