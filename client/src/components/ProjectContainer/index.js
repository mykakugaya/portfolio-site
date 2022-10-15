import React from 'react';
import './style.css';
import { Card, Avatar, Image } from 'antd';
import { GithubOutlined, PlayCircleOutlined } from '@ant-design/icons';

// takes in name, description, tech, github, deployed (opt), and image
const { Meta } = Card;
export default function ProjectContainer(props) {

    return (
        // <Card
        //     style={{ width: 300 }}
        //     cover={
        //         <Image
        //         width={500}
        //         src={props.image}
        //          />
        //     }
        //     actions={[
        //         <GithubOutlined key='github'/>
        //         // {props.deployed ? <LinkOutlined key='deployed'/> : null}
        //     // <SettingOutlined key="setting" />,
        //     // <EditOutlined key="edit" />,
        //     // <EllipsisOutlined key="ellipsis" />,
        //     ]}
        // >
        //     <Meta
        //     avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        //     title={<h1 className='projectName'>{props.name}</h1>}
        //     description={<h2 className='projectDescription'>{props.description}</h2>}
        //     />
        // </Card>
        <div className="projectDetails">
            <Image
                className='projectImage'
                src={props.image}
            />
            <div className="projectTitle">
                <h2 className='projectName'>{props.name}</h2>
                <h3 className='projectDescription'>{props.description}</h3>
            </div>
            <div>
                <h3 className='projectTech'>Technologies Used: {props.tech}</h3>
            </div>
            <div className='projectLinks'>
                <a className='projectLink' href={props.github} target="_blank" rel="noreferrer"><GithubOutlined/> Github respository</a>
                {props.deployed !== "none" ? 
                <a className='projectLink' href={props.deployed} target="_blank" rel="noreferrer"><PlayCircleOutlined /> Deployed App</a>
                : null}
            </div>
        </div>

    );
}