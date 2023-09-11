import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePageNav from '../Components/Pieces/HomePageNav';

function HomePage() {
    return (
        <Container fluid>
            <HomePageNav />
            <Row className="hero-container">
                <Col>
                    <h1>
                        Experience the future of healthcare management with BeWell EHR System.
                        Empowering healthcare providers to deliver exceptional care,
                        our platform ensures secure, efficient, and accessible data management,
                        enabling better decision-making, improved patient outcomes,
                        and enhanced collaboration among healthcare teams.
                    </h1>
                    <h2>
                        Helping psychotherapists and mental health professionals manage their private
                        practice or clinic and strengthen client relationships.
                    </h2>
                    <Link to="/get-started">
                        <Button variant="primary" className="patient-button">
                            Try For Free
                        </Button>
                    </Link>
                </Col>
                <Col>
                    <div>Hello</div>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
