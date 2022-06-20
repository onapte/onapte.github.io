import React from 'react';
import './Projects.css'
import Project from './Project';

let projectList = [
    {
        Image: '../images/shareledge.png',
        Title: 'ShareLEDGE',
        Description: "This project's name is Shareledge, an online platform which allows content writers and bloggers to create and publish articles, tutorials and blogs on various topics. A user who is interested to publish articles or tutorials should register with Shareledge and then contact the admin to get verified for publishing. The users who are not verified will not have an option to create and publish.",
        Link: 'https://github.com/onapte/shareledge',
        Date: 'Decemeber 28, 2021',
        Status: 'Not hosted'
    },
    {
        Image: 'https://onapte.github.io/assets/images/shareledge.png',
        Title: 'HAWA-ON',
        Description: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackha',
        Link: 'https://havaon.pythonanywhere.com/',
        Date: 'February 10, 2021',
        Status: 'Hosted'
    },
    {
        Image: '..images/crms.png',
        Title: 'CRMS',
        Description: 'The goal of the Online Criminal Record Management System is to replace the current manual system using computerized tools and full-fledged computer applications, meeting the needs of all police officers so that their important data/information can be processed for a longer period of time while still being easily accessible.',
        Link: 'https://github.com/onapte/crms',
        Date: 'June 12, 2021',
        Status: 'Not Hosted'
    }
]

const Projects = () => {
    return (
        <div className='Projects' id='Projects'>
            <h1 className='Title-Projects'><center>My Projects</center></h1>
            {
                projectList.map(project => (
                    <Project 
                    image={ project.Image } 
                    title={ project.Title } 
                    des={ project.Description }
                    link={ project.Link }
                    date={ project.Date }
                    status={ project.Status }
                    />
                ))
            }
            {/* <Project image='img' title='ShareLEDGE' des='des' link='lnk' date='dt' status='Not hosted' /> */}
        </div>
    )
}

export default Projects;
