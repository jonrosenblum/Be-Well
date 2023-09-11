import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import TherapistHeader from "./TherapistHeader";
import UserProfile from "./UserProfile";

export default function Appointments() {
    // Define state to manage appointment data
    const [appointment, setAppointment] = useState({
        date: "",
        time: "",
        patientName: "",
        reason: "",
    });

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAppointment({ ...appointment, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation here if needed

        // Send the appointment data to the backend for storage
        // This part would typically involve making an API request to your backend server

        // Clear the form or provide feedback to the user
        setAppointment({
            date: "",
            time: "",
            patientName: "",
            reason: "",
        });
    };

    return (

        <div>
            <TherapistHeader />
            <UserProfile />
            <h2>Schedule Appointment</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="date">
                    <Form.Label>Date:</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={appointment.date}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="time">
                    <Form.Label>Time:</Form.Label>
                    <Form.Control
                        type="time"
                        name="time"
                        value={appointment.time}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="patientName">
                    <Form.Label>Patient Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="patientName"
                        value={appointment.patientName}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="reason">
                    <Form.Label>Reason:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="reason"
                        value={appointment.reason}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Schedule Appointment
                </Button>
            </Form>
        </div>
    );
}
