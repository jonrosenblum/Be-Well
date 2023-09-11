import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

export default function PatientSessionsModal({ patient, onClose }) {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (patient) {
            fetch(`/patient/${patient.id}/sessions`)
                .then((response) => response.json())
                .then((data) => setSessions(data))
                .catch((error) => console.error("Error:", error));
        }
    }, [patient]);

    return (
        <Modal show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sessions for {patient.first_name} {patient.last_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        {sessions.map((session) => (
                            <Col key={session.id}>
                                <h4>Session Transcript</h4>
                                <p>{session.transcript}</p>
                                <Button>Detailed Information</Button>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
