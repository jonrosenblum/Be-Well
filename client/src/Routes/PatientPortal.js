import React from "react";
import { Row, Col } from 'react-bootstrap';
import PatientDashboard from "../Components/Pieces/PatientDashboard";
import { useAuthHook } from "../Services/hooks";



export default function TherapistPortal() {
    return (
        <div>
            <Row>
                <Col xs={1}>
                </Col>
                <Col xs={1}>
                    <h2>Hello, "Patient First Name"</h2>
                </Col>
                <Col xs={9
                }>
                    <PatientDashboard />
                </Col>
            </Row>
        </div >
    )
}


// function Portal() {
//     const auth = useAuthHook()

//     if (auth.userType === 'patient'){
//         return <PatientPoral/>
//     }

//     return <TherapistPortal />
// }