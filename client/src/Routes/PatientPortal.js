import React from "react";
import PatientDashboard from "../Components/Pieces/PatientDashboard";
import { useAuthHook } from "../Services/hooks";
import SideNavPatient from "../Components/Pieces/SideNavPatient"
import { MDBCol, MDBContainer } from "mdb-react-ui-kit";



export default function PatientPortal() {
    return (
        <div>
            <SideNavPatient />
            <MDBContainer>
                <MDBCol>
                    <PatientDashboard />
                </MDBCol>
            </MDBContainer>
        </div >
    )
}
