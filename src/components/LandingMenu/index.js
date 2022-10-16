import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
import { Menu } from 'antd';
import { UserOutlined, AppstoreOutlined, ProfileOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

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
            <Menu className='landingMenu' mode="inline">
                <Menu.Item key="1" onClick={handleAboutClick} className='menuItem'>
                    <UserOutlined />
                    <span>About Me</span>
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