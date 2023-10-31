import React, { useRef } from 'react';
import "./contact.css";
import link1 from "../../assets/resume.png";
import link2 from "../../assets/github.png";
import link3 from "../../assets/linkedin.png";
import emailjs from '@emailjs/browser';
import CV from "../../assets/CV-JONATHAN-DEV.pdf";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_25z7gjd', 'template_rra8fpd', form.current, 's_k8-81kj4bYsePgW')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contactPage">

            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill the form bellow to discuss any work oportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='your_name' />
                    <input type="email" className="email" placeholder="Your Email" name='your_email' />
                    <textarea className="msg" rows="5" placeholder="Your Message" name='message'></textarea>

                    <button type="submit" value="send" className="submitBtn">submit</button>

                </form>
            </div>



            <div className="linkImgs">
                <div className="linkBox">
                    <a href={CV} download><img src={link1} alt="" className="linkImg" /></a>
                    <p>Resume</p>
                </div>
                <div className="linkBox">
                    <a href="https://www.linkedin.com/in/jonathan-warma-885934255/"><img src={link3} alt="" className="linkImg" /></a>
                    <p>Linkedin</p>
                </div>
                <div className="linkBox">
                    <a href="https://github.com/"> <img src={link2} alt="" className="linkImg" /></a>
                    <p>GitHub</p>
                </div>

            </div>
        </section>
    )
}

export default Contact
