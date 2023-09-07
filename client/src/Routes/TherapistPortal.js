import React from "react";
import TherapistHeader from "../Components/TherapistHeader"
import TherapistDashboard from "../Components/TherapistDashboard"
import "./Styles/TherapistPortal.css"

export default function TherapistPortal() {
    return (
        <div className="therapist-portal">
            <TherapistHeader />
            <TherapistDashboard />
        </div>
    )
}