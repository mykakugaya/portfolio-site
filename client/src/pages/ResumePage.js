import React from 'react';
import './resumeStyle.css';
import PDFViewer from "../components/PDFViewer";
import Resume from './Myka_Kugaya_Resume.pdf';
import { Button, Breadcrumb } from 'antd';
import { HomeOutlined, ProfileOutlined, DownloadOutlined } from '@ant-design/icons';

export default function ResumePage() {
    return (
        <div className="pageContainer">
            <div className="pageContent">
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/resume">
                    <ProfileOutlined />
                    <span>Resume</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <Button className='downloadBtn' type="primary" shape="round" icon={<DownloadOutlined />} size='large' onClick={() => window.open(Resume)}>
                Download Resume
            </Button>
            <div>
                <PDFViewer pdf={Resume} />
            </div>
            </div>
        </div>
    );
}