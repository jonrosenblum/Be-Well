import React, { useState, useCallback, useEffect } from "react";
import { MDBRow, MDBCol, MDBBadge, MDBTable, MDBCard, MDBCardText, MDBCardBody, MDBCardTitle, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { api } from "../../Services/api";
export default function PatientDashboard() {
    const [sessions, setSessions] = useState(null);






    return (
        <>
            <MDBRow className="justify-content-center">
                <MDBCol size="6">
                    <Link to='/patient/appointments'>
                        <MDBCard background='info' className='text-body mb-3'>
                            <MDBCardBody className="text-center">
                                <MDBCardTitle>Appointments</MDBCardTitle>
                                <MDBCardText>
                                    Schedule a new appointment or view past/future appointments
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </Link>
                </MDBCol>
            </MDBRow >
            <MDBRow>
                <MDBTable striped hover className="table session-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {patients.map((patient) => (
                            <tr key={patient.id}>
                                <td>{patient.id}</td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                                            alt=""
                                            style={{ width: "45px", height: "45px" }}
                                            className="rounded-circle"
                                        />
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{patient.first_name} {patient.last_name}</p>
                                            <p className="text-muted mb-0">{patient.email}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>Appointment Date</td>
                                <td>Appointment Time</td>
                                <td>
                                    <MDBBadge color="success" pill>
                                        Confirmed
                                    </MDBBadge>
                                </td>
                                <td>
                                </td>
                            </tr>
                        ))} */}
                    </tbody>
                </MDBTable>
            </MDBRow>

        </>
    )
}