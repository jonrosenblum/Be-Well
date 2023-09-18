import React, { useState, useCallback, useEffect } from "react";
import { Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import { useAuthHook } from "../../Services/hooks";
import { api } from "../../Services/api";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function CreateAppointments({ therapist, onClose }) {
    const [patients, setPatients] = useState([])
    const [appointments, setAppointments] = useState([]); // New state to store appointments


    const auth = useAuthHook();

    const loadPatients = useEffect(
        () => {
            api.getPatients()
                .then((data) => { setPatients(data) })
                .catch((error) => console.error("Error:", error))
        },
        []
    );


    useEffect(() => {
        if (patients) {
            return;
        }
        loadPatients();
    }, [patients, loadPatients]);

    useEffect(() => {
        try {
            fetch(`/therapist/${auth.user.id}/appointments`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.access_token}`,
                },
            })
                .then(res => res.json())
                .then(data => setAppointments(data))


        } catch (error) {
            console.error("Error:", error);
        }

    }, [])



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
            const response = await fetch(`/therapist/${auth.user.id}/appointments`, {
                method: "POST",
                body: JSON.stringify(appointment),
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${auth.access_token}`,
                },
            })
                .then(data => {
                    return data
                })

            //console.log(response)
            if (response?.ok) {
                setAppointment({
                    appointment_date: "",
                    appointment_time: "",
                    patient_id: "",
                });
                console.log("Appointment created successfully");
                alert("Appointment created successfully");
                onClose(true);
            } else {
                console.error("Error creating appointment");
                onClose();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };






    return (
        <div>
            <MDBRow>
                <MDBCol>
                    <table class="table caption-top">
                        <caption>
                            Scheduled Appointments
                        </caption>
                        <thead className="table-dark">
                            <tr>
                                <th>Patient ID</th>
                                <th>Appointment Date</th>
                                <th>Appointment Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.patient_id}</td>
                                    <td>{appointment.appointment_date}</td>
                                    <td>{appointment.appointment_time}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {/* <h2>My Appointments</h2>
                    <ul>
                        {appointments.map((appointment) => (
                            <li key={appointment.id}>{appointment.appointment_date} - {appointment.appointment_time}</li>
                        ))}
                    </ul> */}
                </MDBCol>
                <MDBCol>
                    <h2>Schedule Appointment</h2>
                    <Form onSubmit={handleSubmit}>
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

                </MDBCol>
            </MDBRow>

        </div >

    );
}
