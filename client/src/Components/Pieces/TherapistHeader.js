import React, { useState } from "react";
import { Nav, Button, Container, Row, Col } from "react-bootstrap";
import LogoutSuccessAlert from "./LogoutSuccessAlert";
import { useAppDispatch, useAuthHook } from "../../Services/hooks";

export default function TherapistHeader() {
  const dispatch = useAppDispatch();
  const auth = useAuthHook();
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("/therapist/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Logout failed");
      }

      dispatch(auth.actions.logout());
      setShowLogoutSuccess(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Nav className="justify-content-end">
            <Nav.Item>
              <Nav.Link href="/therapist/portal">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/therapist/profile">Profile</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/therapist/settings">Settings</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button onClick={handleLogout}>Logout</Button>
            </Nav.Item>
          </Nav>
          <div>{auth.user?.email}</div>
          {showLogoutSuccess && (
            <LogoutSuccessAlert onClose={() => setShowLogoutSuccess(false)} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
