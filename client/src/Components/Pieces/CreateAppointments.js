import React, { useState, useCallback, useEffect } from "react";
import { Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import { useAuthHook } from "../../Services/hooks";
import { api } from "../../Services/api";
import { MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBContainer, MDBTable } from "mdb-react-ui-kit";

export default function CreateAppointments({ therapist, onClose }) {
    const [patients, setPatients] = useState(null)
    const [appointments, setAppointments] = useState(null); // New state to store appointments


    const auth = useAuthHook();

    const loadPatients = useCallback(
        () => {
            api.getPatients()
                .then((data) => { setPatients(data) })
                .catch((error) => console.error("Error:", error))
        }, [])
    const loadAppointments = useCallback(() => fetch(`/therapist/${auth.user.id}/appointments`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.access_token}`,
        },
    })
        .then(res => res.json())
        .then(data => setAppointments(data)), [auth]);

    useEffect(() => {
        if (!patients) {
            loadPatients();
        }
        if (!appointments) {
            loadAppointments()
        }
    }, [patients, loadPatients, appointments, loadAppointments]);






    const [appointment, setAppointment] = useState({
        therapist_id: auth.user.id,
        appointment_date: "",
        appointment_time: "",
        patient_id: "",
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointment({ ...appointment, [name]: value });
    };


    const handlePatientSelect = (patientId) => {
        setAppointment({ ...appointment, patient_id: patientId });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            fetch(`/therapist/${auth.user.id}/appointments`, {
                method: "POST",
                body: JSON.stringify(appointment),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.access_token}`,
                },
            })
                .then(data => {
                    setAppointment({
                        appointment_date: "",
                        appointment_time: "",
                        patient_id: "",
                    });
                    console.log("Appointment created successfully");
                    alert("Appointment created successfully");
                    // onClose(true);
                    loadAppointments()
                }).catch((error) => {

                    console.error("Error creating appointment");
                    // onClose();
                })


        } catch (error) {
            console.error("Error:", error);
        }
    };


    if (!patients || !appointments) {
        return <>loadding</>
    }

    return (
        <div>
            <MDBContainer className="">
                <MDBRow className="appointments align-items-center">
                    <MDBCol>
                        <MDBCard>
                            <MDBTable striped hover className="table caption-top">
                                <caption>
                                    Scheduled Appointments
                                </caption>
                                <thead className="table-info">
                                    <tr>
                                        <th>Patient ID</th>
                                        <th>Appointment Date</th>
                                        <th>Appointment Time</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                    {appointments.map((appointment) => (
                                        <tr key={appointment.id}>
                                            <td>{appointment.patient_id}</td>
                                            <td>{appointment.appointment_date}</td>
                                            <td>{appointment.appointment_time}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </MDBTable>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className="">
                        <MDBCard>
                            <MDBCardHeader className="text-align-center">Schedule New Appointment</MDBCardHeader>
                            <MDBCardBody>
                                <Form className="schedule-form" onSubmit={handleSubmit}>
                                    <Form.Group controlId="patient_id">
                                        <Form.Label>Patient Name:</Form.Label>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="secondary" id="patient-dropdown">
                                                {appointment.patient_id ? `Selected Patient ID: ${appointment.patient_id}` : "Select Patient"}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {/* Replace this with patient data */}
                                                {patients.map(patient => <Dropdown.Item key={patient.id} onClick={() => handlePatientSelect(patient.id)}>{patient.first_name}</Dropdown.Item>)}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Form.Group>
                                    <Form.Group controlId="appointment_date">
                                        <Form.Label>Date:</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="appointment_date"
                                            value={appointment.appointment_date}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="appointment_time">
                                        <Form.Label>Time:</Form.Label>
                                        <Form.Control
                                            type="time"
                                            name="appointment_time"
                                            value={appointment.appointment_time}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Schedule Appointment
                                    </Button>
                                </Form>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div >

    );
}
