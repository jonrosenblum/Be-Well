import React, { useState } from "react";
import { Nav, Button } from "react-bootstrap";
import LogoutSuccessAlert from "./LogoutSuccessAlert";
import { useAppDispatch, useAuthHook } from "../../Services/hooks";
import { useNavigate } from 'react-router-dom'

export default function TherapistHeader() {
  const dispatch = useAppDispatch();
  const auth = useAuthHook();
  const [showLogoutSuccess, setShowLogoutSuccess] = useState(false);
  const navigate = useNavigate();

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
      navigate('/')
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className=" vh-100 d-flex flex-column align-items-center bg-light">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="/therapist/portal">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/therapist/medical-records">Medical Records</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/therapist/questionnaires">Questionnaires</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/therapist/appointments">Appointments</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Item>
            <Nav.Link href="/therapist/billing">Billing</Nav.Link>
          </Nav.Item>
          <Nav.Link href="/therapist/settings">Settings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Button onClick={handleLogout}>Logout</Button>
        </Nav.Item>
      </Nav>
      {showLogoutSuccess && (
        <LogoutSuccessAlert onClose={() => setShowLogoutSuccess(false)} />
      )}
    </div>
  );
}
