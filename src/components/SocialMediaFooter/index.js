import React from 'react';
import "antd/dist/antd.css";
import "./style.css";
import { Col, Row, Tooltip } from 'antd';
import {GithubOutlined, MailFilled, LinkedinFilled} from '@ant-design/icons';

const SocialMediaFooter = () => {
    return (
        <div className='footer'>
            <Row>
                <Col span={24}>
                    <div className='linksContainer'>
                        <Tooltip placement="top" title={"Gmail"}>
                            <span><a href="mailto:mkugaya@bu.edu" target="__blank"><MailFilled className="socialIcon"/></a></span>
                        </Tooltip>
                        <Tooltip placement="top" title={"LinkedIn"}>
                            <span><a href="https://linkedin.com/in/mykakugaya" target="__blank"><LinkedinFilled className="socialIcon"/></a></span>
                        </Tooltip>
                        <Tooltip placement="top" title={"Github"}>
                            <span><a href="https://www.github.com/mykakugaya" target="__blank"><GithubOutlined className="socialIcon"/></a></span>
                        </Tooltip>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default SocialMediaFooter;