import React, { useRef , useState } from 'react';
import "./contact.css";
import link1 from "../../assets/resume.png";
import link2 from "../../assets/github.png";
import link3 from "../../assets/linkedin.png";
import emailjs from '@emailjs/browser';
import CV from "../../assets/CV-JONATHAN-DEV.pdf";

const Contact = () => {
    const form = useRef();

    //
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
  
    //
    const sendEmail = (e) => {
        e.preventDefault();
        //
        const name = form.current.elements.your_name.value;
        const email = form.current.elements.your_email.value;
        const message = form.current.elements.message.value;
    
        // Perform validation
        if (!name || !email || !message) {
          setErrorMessage('Please fill in all fields.');
          return;
        }
    
        // Clear any previous error or success messages
        setErrorMessage(null);
        setSuccessMessage(null);
        //

        emailjs.sendForm('service_25z7gjd', 'template_rra8fpd', form.current, 's_k8-81kj4bYsePgW')
            .then((result) => {
                console.log(result.text);
                setSuccessMessage('Message sent successfully');

                setTimeout(() => {
                    window.location.reload();
                  }, 1000);
               
            }, (error) => {
                console.log(error.text);
                setErrorMessage('Failed to send the message. Please try again later.');
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
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                 {successMessage && <div className="success-message">{successMessage}</div>}
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
                    <a href="https://github.com/JonathanWarma?tab=repositories"> <img src={link2} alt="" className="linkImg" /></a>
                    <p>GitHub</p>
                </div>

            </div>
        </section>
    )
}

export default Contact
