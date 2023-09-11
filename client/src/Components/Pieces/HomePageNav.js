import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
// import "./Styles/HomePageNav.css";

export default function HomePageNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Item>
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/services" className="nav-link">
                                Services
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/payment" className="nav-link">
                                Payment
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/get-started" className="nav-link">
                                Get Started
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <div className="portal-button">
                <Link to="/therapist/login">
                    <Button variant="primary" className="therapist-button">
                        Therapist
                    </Button>
                </Link>
                <Link to="/patient/login">
                    <Button variant="primary" className="patient-button">
                        Patient
                    </Button>
                </Link>
            </div>
        </Navbar>
    );
}
