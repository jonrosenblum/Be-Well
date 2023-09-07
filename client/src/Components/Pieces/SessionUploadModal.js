import React, { useState } from "react";
import './Styles/ModalStyles.css'

export default function SessionUploadModal({ patient, onClose }) {


    const [formData, setFormData] = useState({
        patient_id: patient.id
    });

    const [alertMessage, setAlertMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`/therapist/patient/${patient.id}/sessions/upload-session`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log("Session uploaded successfully");
                setAlertMessage("Session upload successful");

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

    const { sessionDate, transcript, mp3File } = formData


    return (
        <div className="modal-container">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <div className="transcript-form">
                    <form className="upload-form" onSubmit={handleSubmit}>
                        <input type="hidden" name="patientId" value={patient.id} />
                        <div className="form-group">
                            <label className="form-label" htmlFor="sessionDate">
                                Date of Session:
                            </label>
                            <input
                                type="date"
                                id="sessionDate"
                                name="sessionDate"
                                value={sessionDate}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="transcript">
                                Enter Transcript:
                            </label>
                            <textarea
                                rows="5"
                                id="transcript"
                                name="transcript"
                                value={transcript}
                                onChange={handleChange}
                                placeholder="Enter session transcript"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label" htmlFor="mp3File">
                                Upload MP3 file:
                            </label>
                            <input
                                type="file"
                                id="mp3File"
                                name="mp3File"
                                accept=".mp3"
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit">Upload Session</button>
                    </form>
                </div>
                {alertMessage && (
                    <div className="custom-alert">
                        {alertMessage}
                    </div>
                )}
            </div>
        </div>
    );
}
