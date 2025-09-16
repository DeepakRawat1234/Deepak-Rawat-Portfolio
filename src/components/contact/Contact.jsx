import React, { useRef } from 'react'
import './Contact.css'
import fbicon from "../../assets/fb.png"
import giticon from "../../assets/git2.png"
import instaicon from "../../assets/insta.png"
import linkdinicon from "../../assets/linkdin.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form =useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_suze3ju', 'template_bcnhhw8', form.current, {
        publicKey: 'IfCm46A2a8-zO7bEb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Email Sent")
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section className='contact-page'>
<div className="contact" id='Contact'>
    <h1 className='contact-title'>Contact Me</h1>
    <span className="contact-desc">Please fill out the form below to discuss any work opportunities</span>
    <form action="" className='contact-form' ref={form} onSubmit={sendEmail}>
        <input type="text" placeholder='Your Name' className='name' name='your_name' />
          <input type="email" placeholder='Your Email' className='email' name='your_email' />
          <textarea name="message" rows="6" placeholder='Your Message' className='msg'></textarea>
          <button className="submit-btn" type='submit' value='send'>Submit</button>
          <div className="links">
            <a href="https://www.linkedin.com/in/deepak-rawat-123456789/"><img src={fbicon} alt="Facebook" className='link' /></a>
            <img src={instaicon} alt="Instagram" className='link' />
            <a href="https://www.linkedin.com/in/deepak-rawat-123456789/">   <img src={linkdinicon} alt="Linkdin" className='link' /></a> 
              <a href="https://www.instagram.com/rawat_yuvii/"> <img src={giticon} alt="Github" className='link' /></a>
          </div>
    </form>
</div>

    </section>
  )
}

export default Contact