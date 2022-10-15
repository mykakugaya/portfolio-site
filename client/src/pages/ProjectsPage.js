import { Breadcrumb, Image } from 'antd';
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
            <Image.PreviewGroup>
                {projects.map((project) => {
                    return (
                        <ProjectContainer 
                            key={project.key}
                            name={project.name}
                            description={project.description}
                            tech={project.tech}
                            image={project.image}
                            github={project.github}
                            deployed={project.deployed}
                        />
                    );
                })}
            </Image.PreviewGroup>
                
        </div>
        </div>
    );
}