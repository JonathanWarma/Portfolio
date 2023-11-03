import React from 'react';
import './skills.css';
import Unity from '../../assets/unity.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
import Blender from '../../assets/Blender.png';

import html from '../../assets/html.png';
import css from '../../assets/css.png';
import php from '../../assets/php.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';

import c from '../../assets/c.png';
import cpp from '../../assets/cpp.png';
import cs from '../../assets/csharp.png';
import java from '../../assets/java.png';

import sql from '../../assets/sql.png';
import mysql from '../../assets/mysql.png';




const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle"> What i do</span>
            <span className="skillDesc"> I am a developer with a versatile skill set, specializing in the creation of websites, computer applications, and video games. My passion lies in harnessing technology to build engaging digital experiences. Whether I'm designing user-friendly websites, developing efficient software applications, or crafting immersive video games, my work reflects my dedication to creating innovative solutions in the digital realm.</span>
            <div className="skillBars">



                <div className="skillBar">
                    <img src={WebDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>WebDesign</h2>
                        <p>My skill set in web design is a fusion of creativity and technical proficiency.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Software Developer</h2>
                        <p>"I am a software virtuoso, sculpting digital landscapes with code.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Blender} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>3D Modeling/ Animation</h2>
                        <p>I am proficient in 3D modeling and animations, with a focus on Blender.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={Unity} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Video-Game Developer</h2>
                        <p>I use Unity as my creative playground, crafting captivating video games with passion</p>
                    </div>
                </div>

            </div>

            <div className='language'>
                <h2>Languages</h2>
                <p>These are a few of the languages I've picked up on my path as a developer.</p>
                <div className='web'>
                <h1>Web:</h1>
                    <img src={html} alt="" className="langImg" />
                    <img src={css} alt="" className="langImg" />
                    <img src={php} alt="" className="langImg" />
                    <img src={js} alt="" className="langImg" />
                    <img src={react} alt="" className="langImg" />

                </div>
            

                <div className='app'>
                    <h1>Apps:</h1>
                    <img src={c} alt="" className="langImg" />
                    <img src={cpp} alt="" className="langImg" />
                    <img src={cs} alt="" className="langImg" />
                    <img src={java} alt="" className="langImg" />
                 

                </div>

                <div className='app'>
                    <h1>Data-Base:</h1>
                    <img src={sql} alt="" className="langImg" />
                    <img src={mysql} alt="" className="langImg" />
                  

                </div>
            </div>
        </section>
    )
}

export default Skills
