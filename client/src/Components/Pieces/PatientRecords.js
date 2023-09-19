import React from "react";
import UserProfile from "./UserProfile";
import { Row, Col } from 'react-bootstrap';
import TherapistHeader from "./SideNav";
import { MDBContainer } from "mdb-react-ui-kit";

export default function PatientRecords() {
    return (
        <div>
            <TherapistHeader />
            <MDBContainer>
                <UserProfile />
            </MDBContainer>
        </div >
    )
}