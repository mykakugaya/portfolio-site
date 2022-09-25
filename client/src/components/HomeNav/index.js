import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
import { Col, Row } from 'antd';
import { Link } from "react-router-dom";

const HomeNav = () => {
    return(
        <div className="home-nav">
            <Row className='navRow'>
                <Col span={8}>
                    <Link to="/about" className="homeNavLink">About</Link>
                </Col>
            </Row>
            <Row className='navRow'>
                <Col span={8}>
                    <Link to="/projects" className="homeNavLink">Projects</Link>
                </Col>
            </Row>
            <Row className='navRow'>
                <Col span={8}>
                    <Link to="/resume" className="homeNavLink">Resume</Link>
                </Col>
            </Row>
        </div>
    );
}

export default HomeNav;