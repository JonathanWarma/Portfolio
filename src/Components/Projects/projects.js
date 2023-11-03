import React from 'react';
import './projects.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/portfolio-2.png';
import project3 from '../../assets/portfolio-3.png';

function Projects() {
    return (
        <section id='project'>
            <h1 className="projectPageTitle">Projects</h1>
            <a href="https://pokemons-memory-game.netlify.app/">
                <div className="projectBar">
                    <img src={project1} alt="" className="projectBarImg" />
                    <div className="projectBarText">
                        <h2>Pokemon Memory games</h2>
                        <br/>
                        <p>Experience the thrill of a Pokémon memory game I've created. <br/>Find matching Pokémon cards to win in this HTML, CSS, and JavaScript powered game.</p>
                    </div>
                </div>
            </a>
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
