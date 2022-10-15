import React from 'react';
import './resumeStyle.css';
import PDFViewer from "../components/PDFViewer";
import Resume from './Myka_Kugaya_Resume.pdf';

export default function ResumePage() {
    return (
        <div className="resumeContainer">
            <PDFViewer pdf={Resume} />
        </div>

    );
}