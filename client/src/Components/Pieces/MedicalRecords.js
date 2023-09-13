import React from "react";
import UserProfile from "./UserProfile";
import { Row, Col } from 'react-bootstrap';
import TherapistHeader from "./SideNav";

export default function MedicalRecords() {
    return (
        <div>
            <Row className="custom-row">
                <Col xs={2}>
                    <TherapistHeader />
                </Col>
                <Col xs={10}>
                    <UserProfile />
                </Col>
            </Row>
        </div >
    )
}