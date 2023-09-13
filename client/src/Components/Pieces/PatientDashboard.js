import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import "../Styles/PatientDashboard.css"; // Create a CSS file for styling (e.g., PatientDashboard.css)

export default function PatientDashboard() {
    const [showModal, setShowModal] = useState(null);

    const handleModalOpen = (modalId) => {
        setShowModal(modalId);
    };

    const handleModalClose = () => {
        setShowModal(null);
    };



    return (
        <Container className="dashboard-container">
            <Row>
                {[1, 2, 3, 4].map((item) => (
                    <Col key={item} xs={12} md={3} className="dashboard-item">
                        <div
                            className="dashboard-item-content"
                            onClick={() => handleModalOpen(item)}
                        >
                            {getItemText(item)}
                        </div>
                    </Col>
                ))}
            </Row>

            {[1, 2, 3, 4].map((item) => (
                <Modal
                    key={item}
                    show={showModal === item}
                    onHide={handleModalClose}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{getItemText(item)}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{getModalContent(item)}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>
                            Close
                        </Button>
                        <Button variant="primary">Save Changes</Button>
                    </Modal.Footer>
                </Modal>
            ))}
        </Container>
    );
}

function getItemText(item) {
    switch (item) {
        case 1:
            return "Medical Records";
        case 2:
            return "Schedule an Appointment";
        case 3:
            return "Contact Therapist";
        case 4:
            return "Settings and Billing";
        default:
            return "";
    }
}

function getModalContent(item) {
    switch (item) {
        case 1:
            return "This is the content for Medical Records.";
        case 2:
            return "This is the content for Scheduling an Appointment.";
        case 3:
            return "This is the content for Contacting Therapist.";
        case 4:
            return "This is the content for Settings and Billing.";
        default:
            return "";
    }
}
