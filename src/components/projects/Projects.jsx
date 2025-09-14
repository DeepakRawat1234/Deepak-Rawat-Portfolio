import React from 'react'
import "./Projects.css"
import projectdata from "../../assets/Porjectdata"
const Projects = () => {
  return (
    <div className='Projects'>
        <div className='project-title'>
            <h1>My Porjects</h1>
        </div>
        <div className='Porjects-box'>
          {projectdata.map((value,index)=>{
            return (
            <div className="project" key={index}>
              <img src={value.img_url} alt=""  />
              <h2>{value.img_title}</h2>
              <h5>{value.img_desc}</h5>
              <button>Read More..</button> <a href={value.link} target='_blank'><button className='check-btn'>Check Now..</button></a>
            </div>
         ) })}
        </div>
    </div>
  )
}

export default Projects
