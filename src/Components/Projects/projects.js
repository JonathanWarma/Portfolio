import React from 'react';
import './projects.css';
import project1 from '../../assets/portfolio-1.png';
import project2 from '../../assets/portfolio-2.png';
import project3 from '../../assets/portfolio-3.png';

function Projects() {
    return (
        <section id='project'>
            <h1 className="projectPageTitle">Projects</h1>

            <div className="projectBar">
                <img src={project1} alt="" className="projectBarImg" />
                <div className="projectBarText">
                    <h2>Project1 : project Name</h2>
                    <p>I use Unity as my creative playground, crafting captivating video games with passion</p>
                </div>
            </div>

            <div className="projectBar">
                <img src={project2} alt="" className="projectBarImg" />
                <div className="projectBarText">
                    <h2>Project1 : project Name</h2>
                    <p>I use Unity as my creative playground, crafting captivating video games with passion</p>
                </div>
            </div>

            <div className="projectBar">
                <img src={project3} alt="" className="projectBarImg" />
                <div className="projectBarText">
                    <h2>Project1 : project Name</h2>
                    <p>I use Unity as my creative playground, crafting captivating video games with passion</p>
                </div>
            </div>




        </section>
    )
}

export default Projects
