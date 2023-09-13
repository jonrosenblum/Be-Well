import React, { useState } from "react";
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
      navigate('/');
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="">
      <ul className="nav flex-column align-items-center">
        <li className="nav-item color-info">
          <a className="nav-link" href="/therapist/portal">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/therapist/medical-records">Medical Records</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/therapist/questionnaires">Questionnaires</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/therapist/appointments">Appointments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/therapist/billing">Billing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/therapist/settings">Settings</a>
        </li>
        <li className="nav-item">
          <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
        </li>
      </ul >
      {showLogoutSuccess && (
        <LogoutSuccessAlert onClose={() => setShowLogoutSuccess(false)} />
      )
      }
    </div >
  );
}
