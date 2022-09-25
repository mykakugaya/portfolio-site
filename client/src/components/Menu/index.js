import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
import { Col, Row, Menu } from 'antd';
import { ProfileTwoTone, SoundTwoTone, FolderOpenTwoTone, setTwoToneColor } from '@ant-design/icons';
import { Link, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

const items = [
    getItem(<Link to="/about" >About</Link>, "about", <SoundTwoTone />),
    getItem(<Link to="/projects" >Projects</Link>, "projects", <FolderOpenTwoTone />),
    getItem(<Link to="/resume" >Resume</Link>, "resume", <ProfileTwoTone />)
]

const Menu = () => {
    setTwoToneColor('#1689AD');
    const history = useNavigate();
    
    return(
        <div className="home-nav">
            <Menu
                // onClick={onClick}
                style={{
                    backgroundColor: "transparent",
                }}
                // defaultSelectedKeys={'about'}
                // defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    );
}

export default Menu;