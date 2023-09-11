import React, { useState } from "react";
import { Form, Button, Dropdown, Row, Col } from "react-bootstrap";
import TherapistHeader from "./TherapistHeader";
import UserProfile from "./UserProfile";
import { useAuthHook } from "../../Services/hooks";

export default function Appointments({ therapist, onClose }) {
    // onClose = getOutletContext()
    console.log(`THERAPIST PROP:`)
    console.log(therapist)
    const auth = useAuthHook();

    const [appointment, setAppointment] = useState({
        therapist_id: auth.user.id,
        appointment_date: "",
        appointment_time: "",
        patient_id: "",
    });
    console.log(`APPOINTMENT DATA STRUCTURE:`)
    console.log(appointment)


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
                // .then(response => response.json())
                .then(data => {
                    console.log("whoooooo")
                    console.log(data)
                })


            console.log(`THIS IS MY RESPONSE FROM THERAPIST POSTING`)
            console.log(response)

            if (response.ok) {
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
            <Row>
                <Col xs={2}>
                    <TherapistHeader />
                </Col>
                <Col xs={10}>
                    <UserProfile />
                    <Row>
                        <h2>Schedule Appointment</h2>
                        <Form onSubmit={handleSubmit}>
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
                            <Form.Group controlId="patient_id">
                                <Form.Label>Patient ID:</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="patient-dropdown">
                                        {appointment.patient_id ? `Selected Patient ID: ${appointment.patient_id}` : "Select Patient"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {/* Replace this with patient data */}
                                        <Dropdown.Item onClick={() => handlePatientSelect(1)}>Patient ID 1</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handlePatientSelect(2)}>Patient ID 2</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Schedule Appointment
                            </Button>
                        </Form>
                    </Row>
                    <Row>
                        <h2>Schedule Appointment</h2>
                        <Form onSubmit={handleSubmit}>
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
                            <Form.Group controlId="patient_id">
                                <Form.Label>Patient ID:</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="patient-dropdown">
                                        {appointment.patient_id ? `Selected Patient ID: ${appointment.patient_id}` : "Select Patient"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {/* Replace this with patient data */}
                                        <Dropdown.Item onClick={() => handlePatientSelect(1)}>Patient ID 1</Dropdown.Item>
                                        <Dropdown.Item onClick={() => handlePatientSelect(2)}>Patient ID 2</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Schedule Appointment
                            </Button>
                        </Form>
                    </Row>
                    <Row>Test</Row>
                    <Row>Test</Row>
                    <Row>Test</Row>
                    <Row>Test</Row>
                </Col>
            </Row>
        </div>
    );
}
