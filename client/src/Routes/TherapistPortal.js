import React from "react";
import TherapistHeader from "../Components/Pieces/TherapistHeader"
import TherapistDashboard from "../Components/Pieces/TherapistDashboard"
// import "./Styles/TherapistPortal.css"

export default function TherapistPortal() {
    return (
        <div className="therapist-portal">
            <TherapistHeader />
            <TherapistDashboard />
        </div>
    )
}