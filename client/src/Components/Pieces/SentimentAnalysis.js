import React, { useState } from 'react';


export default function FileUpload() {
    const [file, setFile] = useState(null);
    const [sentimentScore, setSentimentScore] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/analyze', {
                method: 'POST',
                body: formData,
            });

            const data = await response.text();
            setSentimentScore(data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Upload a Text File</h1>
            <input type="file" accept=".txt" onChange={handleFileChange} />
            <button onClick={handleUpload}>Analyze</button>
            {sentimentScore && <p>Sentiment Score: {sentimentScore}</p>}
        </div>
    );
}

