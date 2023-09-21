import { MDBCard, MDBCol, MDBRow, MDBTable } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import { api } from "../../Services/api";

export default function PatientSessionsModal({ patient, onClose }) {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        if (patient) {
            // fetch(`/patient/${patient.id}/sessions`)
            //     .then((response) => response.json())
            api.getPatientSessions(patient.id)
                .then((data) => setSessions(data))
                .catch((error) => console.error("Error:", error));
        }
    }, [patient]);




    // useEffect(() => {
    //     if (patient) {
    //         fetch()

    //     }
    // }, []);

    return (
        <Modal size="lg" show={true} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sessions for {patient.first_name} {patient.last_name}</Modal.Title>
            </Modal.Header>
            <div>
                <MDBRow className="appointments align-items-center">
                    <MDBCol>
                        <MDBCard>
                            <MDBTable striped hover className="table caption-top">
                                <caption>
                                    Patient Session Information
                                </caption>
                                <thead className="table-info">
                                    <tr>
                                        <th>Session Date</th>
                                        <th>Transcript</th>
                                        <th>Session Metrics</th>
                                    </tr>
                                </thead>
                                <tbody className="">

                                    {sessions.map((session) => (
                                        <tr key={session.id}>
                                            <td>{session.session_date}</td>
                                            <td>{session.transcript}</td>
                                            <td>Session Metrics</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </MDBTable>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

            </div>
        </Modal>
    );
}
