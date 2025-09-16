import React from 'react'
import certificate_data from "../../assets/Certification.js"
import './Certification.css'
const Certification = () => {
  return (
    <div className='certification'>
      <h1>My Certification </h1>
      <div className='Certificate-box'>
          {certificate_data.map((value,index)=>{
            return (
            <div className="Certificates" key={index}>
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

export default Certification