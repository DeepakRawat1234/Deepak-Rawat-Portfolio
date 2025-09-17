import React from 'react'
import "./Hero.css"
import profileimg from "../../assets/mypic.jpg"
const Hero = () => {
  const getresume=()=>{
    window.open
  }
  return (
    <div className='Hero'>
        <img src={profileimg} alt="" />
        <h1> <span> Hi I 'm Deepak Rawat</span> - Frontend Developer crafting modern, responsive web interfaces</h1>
        <p>Frontend Developer from India with strong knowledge of modern frontend technologies.
Skilled in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, and React.  </p>
        <div className='Hero-action'>
            <button className='hero-connect' onClick={()=>{
               document.getElementById('Contact').scrollIntoView({behavior:"smooth"})
            }}>Connect with me</button>
            <button className="hero-resume" > <a href="https://drive.google.com/file/d/1nlbEAvKXdLxY4lcmMAf28ADpIE06P3Gz/view?usp=sharing" download>My Resume</a></button>
        </div>
    </div>
  )
}

export default Hero