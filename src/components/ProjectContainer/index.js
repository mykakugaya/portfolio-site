import React from 'react';
import './style.css';
import { Card, Image } from 'antd';
import { GithubOutlined, PlayCircleOutlined } from '@ant-design/icons';

// takes in name, description, tech, github, deployed (opt), and image
const { Meta } = Card;
export default function ProjectContainer(props) {

    return (
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