import React from 'react'
import './intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/image1.png';



const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello"> Hello</span>
                <span className="introText">I'm <span className="introName"> Jonathan</span><br /> Software Developper </span>
                <p className="introPara">I am a beginner developper with experience in creating<br /> softwares ,websites and games </p>


            </div>

            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro