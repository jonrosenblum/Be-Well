// PatientSessionsModal.js
import React, { useState, useEffect } from "react";

export default function SessionUploadModal({ patient, onClose }) {
    const [uploadSessions, setUploadSessions] = useState([]);

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <form>
                    <label>
                        Enter Transcript:
                        <textarea
                            rows="5"
                            // value={transcript}
                            // onChange={handleChange}
                            placeholder="Enter session transcript"
                            required
                        />
                    </label>
                    <button type="submit">Upload Session</button>
                </form>
            </div>
        </div>
    )
}
