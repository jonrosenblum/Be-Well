import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Footer() {
    return (
        <Navbar bg="dark" variant="dark" fixed="bottom">
            <Container>
                <Nav className="mx-auto">
                    <Nav.Item>
                        <NavLink to="/about" className="nav-link">
                            About
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/contact" className="nav-link">
                            Contact
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/account" className="nav-link">
                            Account
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to="/develop" className="nav-link">
                            Develop
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}
