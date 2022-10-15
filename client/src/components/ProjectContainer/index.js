import React from 'react';
import './style.css';
import { Card, Avatar, Image } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

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
                width={200}
                src={props.image}
            />
            <div className="projectTitle">
                <h1 className='projectName'>{props.name}</h1>
                <h2 className='projectDescription'>{props.description}</h2>
            </div>
            <div className='techList'>
                <h3>Technologies Used:</h3>
                <h4>{props.tech}</h4>
            </div>
            <div className='projectLinks'>
                <a href={props.github} target="_blank" rel="noreferrer">Github respository</a>
                {props.deployed ? 
                <a href={props.deployed} target="_blank" rel="noreferrer">Deployed App</a>
                : null}
            </div>
        </div>

    );
}