import React from 'react'
import mypic2 from "../../assets/mypic2.jpg"
import './about.css'
const About = () => {
  return (
    <div className='about'> 
    <div className="about-title">
        <h1>About Me</h1>
        <img src={mypic2} alt="" />
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={mypic2} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>Hi, I'm Deepak Rawat, a frontend developer from India passionate about crafting modern and responsive web interfaces. I have strong knowledge of HTML, CSS, JavaScript, and React, and I enjoy building clean, user-friendly designs. I'm currently pursuing my studies at Devbhoomi Uttarakhand University, where I'm further strengthening my skills and working on real-world development projects.</p>
            </div>
            <div className="about-skils"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                        <div className="about-skils"><p>React Js</p><hr style={{width:"70%"}}/></div>
            <div className="about-skils"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skils"><p>MongoDB</p><hr style={{width:"50%"}}/></div>

        </div>
    </div>
    <div className="about-achievements">
        <div className="about-achievement">
            <h1></h1>
        </div>
    </div>
    </div>
  )
}

export default About