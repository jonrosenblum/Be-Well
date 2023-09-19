import React, { useState } from "react";
import { MDBModal, MDBModalHeader, MDBModalBody, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from "mdb-react-ui-kit";
import { Modal, Form, Button } from "react-bootstrap";
import { useAuthHook } from "../../Services/hooks";

export default function SessionUploadModal({ patient, onClose }) {
    const auth = useAuthHook();
    const [formData, setFormData] = useState({
        patient_id: patient.id,
        therapist_id: auth.user.id,
        sessionDate: "",
        transcript: "",
    });

    const [alertMessage, setAlertMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`/therapist/patient/${patient.id}/sessions/upload-session`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${auth.access_token}`,
                },
            });

            if (response.ok) {
                console.log("Session uploaded successfully");
                setAlertMessage("Session upload successful");
                onclose(true);

                // Close the modal or navigate back to the therapist portal after a delay
                setTimeout(() => {
                    onClose();
                }, 2000); // Close after 2 seconds (adjust as needed)
            } else {
                console.log(response);
                console.error("Error uploading session");
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <MDBContainer>
            <Modal show={true} onHide={onClose}>
                <div className="new-patient-header">
                    <Modal.Header closeButton>
                        <Modal.Title>Upload New Session</Modal.Title>
                    </Modal.Header>
                </div>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="sessionDate">
                            <Form.Label>Session Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="sessionDate"
                                value={formData.sessionDate}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="transcript">
                            <Form.Label>Enter Transcript:</Form.Label>
                            <Form.Control
                                type="text"
                                name="transcript"
                                value={formData.transcript}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Button type="submit" color="">Upload</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            {alertMessage && (
                <div className="custom-alert">
                    {alertMessage}
                </div>
            )}
        </MDBContainer>
        // <MDBModal size="sm" className="bg-" show={true} onHide={onClose}>
        //     <MDBModalHeader toggle={onClose} > Session for {patient.first_name} {patient.last_name}</MDBModalHeader>
        //     <MDBModalBody>
        //         <MDBContainer>
        //             <form onSubmit={handleSubmit}>
        //                 <MDBRow>
        //                     <MDBCol>
        //                         <MDBInput
        //                             type="date"
        //                             label="Date of Session:"
        //                             name="sessionDate"
        //                             value={formData.sessionDate}
        //                             onChange={handleChange}
        //                             required
        //                         />
        //                     </MDBCol>
        //                 </MDBRow>
        //                 <MDBRow>
        //                     <MDBCol>
        //                         <MDBInput
        //                             type="textarea"
        //                             rows="5"
        //                             label="Enter Transcript:"
        //                             name="transcript"
        //                             value={formData.transcript}
        //                             onChange={handleChange}
        //                             required
        //                         />
        //                     </MDBCol>
        //                 </MDBRow>
        //                 <MDBRow>
        //                     <MDBCol>
        //                         <MDBBtn type="submit" color="primary">
        //                             Upload Session
        //                         </MDBBtn>
        //                     </MDBCol>
        //                 </MDBRow>
        //             </form>
        //         </MDBContainer>
        //     </MDBModalBody>

        // </MDBModal>
    );
}
