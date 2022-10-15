import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
import {Row } from 'antd';

const LandingTitle = () => {
    return (
        <div className="landingTitleContainer">
            <Row>
                <h1 className="name">Myka Kugaya</h1>
            </Row>
            <Row>
                <h2 className="position typewriter">Software Engineer & Full-Stack Developer</h2>
            </Row>
        </div>
    );
}

export default LandingTitle;