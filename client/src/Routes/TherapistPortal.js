import React from "react";
import SideNav from "../Components/Pieces/SideNav";
import TherapistDashboard from "../Components/Pieces/TherapistDashboard";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
import PatientCardFlip from "../Components/Pieces/PatientCardFlip"


export default function TherapistPortal() {
    return (
        <div>
            <SideNav />
            <MDBContainer>
                <MDBRow>
                    <PatientCardFlip />
                </MDBRow>
                <MDBCol>
                    <TherapistDashboard />
                </MDBCol>
            </MDBContainer>
        </div >
    )
}
