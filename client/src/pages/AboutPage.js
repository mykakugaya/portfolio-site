import { Col, Row } from 'antd';
import React from 'react';
import './aboutStyle.css';

export default function AboutPage() {
    return (
        <div className="aboutPage">
            <Row>
                <Col span={24}>
                    <h1 className='aboutHeader'>About</h1>
                </Col>
            </Row>
        </div>
    );
}