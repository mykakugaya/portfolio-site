import { Col, Row } from 'antd';
import React from 'react';
import './projectsStyle.css';

export default function ProjectsPage() {
    return (
        <div className="projectsPage">
            <Row>
                <Col span={24}>
                    <h1 className='projectsHeader'>Projects</h1>
                </Col>
            </Row>
        </div>
    );
}