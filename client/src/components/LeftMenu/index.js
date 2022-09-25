import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
import { Col, Row } from 'antd';
import { Link, useNavigate } from "react-router-dom";

const LeftMenu = () => {
    return(
        <div className="left-menu">
            <h1>Myka Kugaya</h1>
            <div className="left-menu-links">
                <Link to="/about" className="left-menu-link">About</Link>
                <Link to="/projects" className="left-menu-link">Projects</Link>
                <Link to="/resume" className="left-menu-link">Resume</Link>
            </div>
        </div>
    );
}

export default LeftMenu;