import "antd/dist/antd.css";
import { Col, Row } from 'antd';
import React from 'react';
import LandingTitle from "../components/LandingTitle";
import HomeNav from "../components/HomeNav";
import './landingStyle.css';

export default function LandingPage() {
    return (
        <div className="landingPage">
            <LandingTitle />
            <HomeNav />
        </div>
    );
}