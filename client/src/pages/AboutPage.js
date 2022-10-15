import { Col, Row } from 'antd';
import React from 'react';
import './aboutStyle.css';

export default function AboutPage() {
    return (
        <div className="aboutContainer">
            <Row>
                <Col span={24}>
                    <h1 className='aboutHeader'>About</h1>
                </Col>
            </Row>
        </div>
    );
}