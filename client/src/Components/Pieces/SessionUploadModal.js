// PatientSessionsModal.js
import React, { useState, useEffect } from "react";

export default function SessionUploadModal({ patient, onClose }) {
    const [uploadSessions, setUploadSessions] = useState([]);

    const handleSubmit = () => {

    }

    return (
        <div className="modal-container">
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <div className="transcript-form">
                    <form className="upload-form" onSubmit={handleSubmit}>
                        <p>{patient.id}</p>
                        <div className="form-group">
                            <label className="form-label" htmlFor="sessionDate">
                                Date of Session:
                            </label>
                            <input
                                type="date"
                                id="sessionDate"
                                name="sessionDate"
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
                                required
                            />
                        </div>

                        <button type="submit">Upload Session</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
