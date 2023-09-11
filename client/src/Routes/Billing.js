import React, { useState } from "react";
import TherapistHeader from "../Components/Pieces/TherapistHeader";
import { Row, Col } from 'react-bootstrap';
import AddPaymentInfo from "../Components/Pieces/AddPaymentInfo";

export default function Billing() {
    return (
        <div>
            <Row>
                <Col xs={2}>
                    <TherapistHeader />
                </Col>
                <Col xs={10}>
                    <AddPaymentInfo />

                </Col>
            </Row>
        </div >
    )
}