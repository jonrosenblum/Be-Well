import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import placeholderImage from "./Assets/placeholder.png";
// import './Styles/ServicePiece.css';

export default function ServicesPiece() {
    return (
        <Container>
            <Row className="parent-container">
                <Col className="welcome-container">
                    <Row className="division-div-1">
                        <Col sm={6} md={3} className="small-container">
                            <Card>
                                <Card.Img variant="top" src={placeholderImage} alt="" />
                                <Card.Body>
                                    <Card.Title>Session Management</Card.Title>
                                    <Card.Text>Session Management Description</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={3} className="small-container">
                            <Card>
                                <Card.Img variant="top" src={placeholderImage} alt="" />
                                <Card.Body>
                                    <Card.Title>Patient Portals</Card.Title>
                                    <Card.Text>Patient Portals Description</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="division-div-2">
                        <Col sm={6} md={3} className="small-container">
                            <Card>
                                <Card.Img variant="top" src={placeholderImage} alt="" />
                                <Card.Body>
                                    <Card.Title>Scheduling</Card.Title>
                                    <Card.Text>Scheduling Description</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={3} className="small-container">
                            <Card>
                                <Card.Img variant="top" src={placeholderImage} alt="" />
                                <Card.Body>
                                    <Card.Title>Sentiment Scores</Card.Title>
                                    <Card.Text>Wellness Tracker Description</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
