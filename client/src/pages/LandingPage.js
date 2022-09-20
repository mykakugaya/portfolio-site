import "antd/dist/antd.css";
import { Col, Row } from 'antd';
import React from 'react';
import SocialMediaBar from "../components/SocialMediaBar";

export default function LandingPage() {
    return (
        <>
            <Row>
                <Col span={24}>
                    <h1>Landing Page</h1>
                </Col>
            </Row>
            <SocialMediaBar/>
        </>
    );
}