import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import './aboutStyle.css';
import aboutImg from '../images/aboutMe.JPG';

export default function AboutPage() {
    return (
        <div className="pageContainer">
            <div className="pageContent">
            <Breadcrumb>
                <Breadcrumb.Item href="/">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/about">
                    <UserOutlined />
                    <span>About Me</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="aboutContainer">
                <h1 className="aboutHeader typewriter">Hello, my name is Myka!</h1>
                <img className="aboutImage" src={aboutImg} alt="Myka Kugaya" />
                <div className="aboutText">
                    <h3 className="aboutParagraph">
                        I am a software engineer & full-stack web developer and 
                        recently obtained my B.A. in Computer Science from Boston University (graduated August 2022). 
                        My passion for software development grew after taking UCLA's Full-Stack Web Development Bootcamp in 2020, 
                        where I collaborated with mentors and teams to create full-stack web projects in Javascript and React.
                    </h3>
                    <h3 className="aboutParagraph">
                        As an undergraduate student, I mainly worked on creating web and mobile applications 
                        using React, Python, and Java. Some other technologies I am comfortable working with include 
                        HTML, CSS, JavaScript, Node.js, SQL, MongoDB, and Firebase. I am also very familiar with 
                        the Agile development process and working with Git, GitHub, Jira, and Miro.
                    </h3>
                    <h3 className="aboutParagraph">
                        Currently, I am looking for a full-time software engineering position where I can continue to
                        grow as a developer and learn new technologies. I am especially interested in areas like 
                        security and cloud development, so I am self-studying to obtain my AWS Cloud Practitioner 
                        Certification in the near future.
                    </h3>
                    <h3 className="contactParagraph">
                        Feel free to reach out to me via <a href="mailto:mkugaya@bu.edu">email</a> or <a href="https://www.linkedin.com/in/myka-kugaya/">LinkedIn</a>!
                    </h3>
                </div>
            </div>
            </div>
        </div>
    );
}