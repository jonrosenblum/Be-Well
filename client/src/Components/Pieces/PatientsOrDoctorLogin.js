import React from "react";
import { Link } from "react-router-dom";
import "./Styles/PatientsOrDoctorLogin.css"

export default function PatientsOrDoctorLogin() {
    return (
        <div className="portal-button">
            <Link to="/therapist/login">
                <button className="therapist-button">Therapist</button>
            </Link>
            <Link to="/patient/login">
                <button className="patient-button">Patient</button>
            </Link>
        </div>
    )
}