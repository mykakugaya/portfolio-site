import React from 'react';
import './resumeStyle.css';
import PDFViewer from "../components/PDFViewer";
import Resume from './Myka_Kugaya_Resume.pdf';
import {Button} from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

export default function ResumePage() {
    return (
        <div className="resumeContainer">
            <Button className='downloadBtn' type="primary" shape="round" icon={<DownloadOutlined />} size='large' onClick={() => window.open(Resume)}>
                Download Resume
            </Button>
            <div>
                <PDFViewer pdf={Resume} />
            </div>
        </div>
    );
}