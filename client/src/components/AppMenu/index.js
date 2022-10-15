import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
// import { Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import { Menu } from 'antd';
import { UserOutlined, AppstoreOutlined, ProfileOutlined } from '@ant-design/icons';

const AppMenu = () => {
    const navigate = useNavigate();

    // navigation links
    const handleLandingClick = () => {
        navigate("/");
    }
    const handleAboutClick = () => {
        navigate("/about");
    }
    const handleProjectsClick = () => {
        navigate("/projects");
    }
    const handleResumeClick = () => {
        navigate("/resume");
    }
    const getSelectedKey = () => {
        const path = window.location.pathname;
        if (path === "/about") {
            return "1";
        } else if (path === "/projects") {
            return "2";
        } else if (path === "/resume") {
            return "3";
        }
    }

    return(
        <div className="header">
            <h1 className="headerName" onClick={handleLandingClick}>Myka Kugaya</h1>
            {/* <div className="left-menu-links">
                <Link to="/about" className="left-menu-link">About</Link><br/>
                <Link to="/projects" className="left-menu-link">Projects</Link><br/>
                <Link to="/resume" className="left-menu-link">Resume</Link>
            </div> */}
            <Menu className='appMenu' mode="horizontal" defaultSelectedKeys={[getSelectedKey()]}>
                <Menu.Item key="1" onClick={handleAboutClick}>
                    <UserOutlined />
                    <span> About</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={handleProjectsClick}>
                    <AppstoreOutlined />
                    <span> Projects</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={handleResumeClick}>
                    <ProfileOutlined />
                    <span> Resume</span>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default AppMenu;