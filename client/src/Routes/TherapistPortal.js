import React from "react";
import SideNav from "../Components/Pieces/SideNav";
import TherapistDashboard from "../Components/Pieces/TherapistDashboard";
import {
    MDBContainer,
    MDBCol,
} from 'mdb-react-ui-kit';
import PortalNav from "../Components/Pieces/PortalNav";



export default function TherapistPortal() {
    return (
        <div>
            <PortalNav />
            <SideNav />
            <MDBContainer>
                <MDBCol>
                    <TherapistDashboard />
                </MDBCol>
            </MDBContainer>
        </div >
    )
}
