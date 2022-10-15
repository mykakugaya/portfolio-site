import { Breadcrumb } from 'antd';
import { HomeOutlined, AppstoreOutlined } from '@ant-design/icons';
import React from 'react';
import './projectsStyle.css';
import projects from './projects';
import ProjectContainer from '../components/ProjectContainer';

export default function ProjectsPage() {
    return (
        <div className="pageContainer">
            <div className="pageContent">
            {/* <Row>
                <Col span={24}>
                    <h1 className='projectsHeader'>Projects</h1>
                </Col>
            </Row> */}
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/projects">
                    <AppstoreOutlined />
                    <span>Projects</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            {/* map through projects array and create div for each */}
            {projects.map((project, index) => {
                return (
                    <ProjectContainer 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        github={project.github}
                        deployed={project.deployed}
                    />
                );
            })}
        </div>
        </div>
    );
}