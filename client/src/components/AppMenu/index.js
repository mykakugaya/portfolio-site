import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
// import { Col, Row } from 'antd';
import { useNavigate } from "react-router-dom";
import { Menu, Tooltip } from 'antd';
import { UserOutlined, ContactsOutlined, AppstoreOutlined, ProfileOutlined, MailFilled, LinkedinFilled, GithubOutlined } from '@ant-design/icons';

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
            {/* <h1 className="headerName" onClick={handleLandingClick}>Myka Kugaya</h1> */}
            {/* <div className="left-menu-links">
                <Link to="/about" className="left-menu-link">About</Link><br/>
                <Link to="/projects" className="left-menu-link">Projects</Link><br/>
                <Link to="/resume" className="left-menu-link">Resume</Link>
            </div> */}
            <Menu className='appMenu' mode="horizontal" defaultSelectedKeys={[getSelectedKey()]}>
                <Menu.Item key="0" onClick={handleLandingClick}>
                    <h1 className="headerName" onClick={handleLandingClick}>Myka Kugaya</h1>
                </Menu.Item>
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
                <Menu.SubMenu 
                title={<><ContactsOutlined />
                <span> Contacts</span></>}>
                    <Menu.Item key="4"><span><a href="mailto:mkugaya@bu.edu" target="__blank"><MailFilled className="headerSocialIcon"/> Email</a></span></Menu.Item>
                    <Menu.Item key="5"><span><a href="https://linkedin.com/in/mykakugaya" target="__blank"><LinkedinFilled className="headerSocialIcon"/> LinkedIn</a></span></Menu.Item>
                    <Menu.Item key="6"><span><a href="https://www.github.com/mykakugaya" target="__blank"><GithubOutlined className="headerSocialIcon"/> Github</a></span></Menu.Item>
                </Menu.SubMenu>
            </Menu>
            {/* <div className='headerLinksContainer'>
                    <Tooltip placement="top" title={"Gmail"}>
                        <span><a href="mailto:mkugaya@bu.edu" target="__blank"><MailFilled className="headerSocialIcon"/></a></span>
                    </Tooltip>
                    <Tooltip placement="top" title={"LinkedIn"}>
                        <span><a href="https://linkedin.com/in/mykakugaya" target="__blank"><LinkedinFilled className="headerSocialIcon"/></a></span>
                    </Tooltip>
                    <Tooltip placement="top" title={"Github"}>
                        <span><a href="https://www.github.com/mykakugaya" target="__blank"><GithubOutlined className="headerSocialIcon"/></a></span>
                    </Tooltip>
            </div> */}
        </div>
    );
}

export default AppMenu;