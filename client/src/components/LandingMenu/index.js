import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
import { Col, Row, Menu } from 'antd';
import { UserOutlined, AppstoreOutlined, ProfileOutlined } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";

const LandingMenu = () => {

    const navigate = useNavigate();

    // navigation links
    const handleAboutClick = () => {
        navigate("/about");
    }
    const handleProjectsClick = () => {
        navigate("/projects");
    }
    const handleResumeClick = () => {
        navigate("/resume");
    }

    return(
        <div>
            {/* <Row className='navRow'>
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
            </Row> */}
            <Menu className='landingMenu' mode="inline">
                <Menu.Item key="1" onClick={handleAboutClick} className='menuItem'>
                    <UserOutlined />
                    <span>About</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleProjectsClick} className='menuItem'>
                    <AppstoreOutlined />
                    <span>Projects</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleResumeClick} className='menuItem'>
                    <ProfileOutlined />
                    <span>Resume</span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default LandingMenu;