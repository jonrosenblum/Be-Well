import React from "react";
import SideNav from "../Components/Pieces/SideNav";
import TherapistDashboard from "../Components/Pieces/TherapistDashboard";
import {
    MDBContainer,
    MDBCol,
} from 'mdb-react-ui-kit';



export default function TherapistPortal() {
    return (
        <div>
            <SideNav />
            <MDBContainer>
                <MDBCol>
                    <TherapistDashboard />
                </MDBCol>
            </MDBContainer>
        </div >
    )
}
