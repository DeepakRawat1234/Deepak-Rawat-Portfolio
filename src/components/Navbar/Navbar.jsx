import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from "react-scroll";
import menu from '../../assets/menu.png'
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
  return (
    <nav className='navbar'>
      <img src={logo} alt="Logo" className='logo' />

      <div className='desktopmenu'>
        <Link
          className='desktopmenulistitem'
          to="Hero"
          activeClass='active'
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
        >
          Home
        </Link>

        <Link
          className='desktopmenulistitem'
          to="about"
          activeClass='active'
          offset={-20}
          spy={true}
          smooth={true}
          duration={500}
        >
          About
        </Link>

        <Link
          className='desktopmenulistitem'
          to="Services"
          activeClass='active'
          offset={-10}
          spy={true}
          smooth={true}
          duration={500}
        >
          Services
        </Link>

        <Link
          className='desktopmenulistitem'
          to="Projects"
          activeClass='active'
          offset={-10}
          spy={true}
          smooth={true}
          duration={500}
        >
          Projects
        </Link>

        <Link className='desktopmenulistitem' to="Certificates" activeClass='active' offset={-100} spy={true} smooth={true} duration={500}
        >
          Certificates
        </Link>


      </div>
<button className="contact-btn" onClick={() => {
        document.getElementById('Contact').scrollIntoView({ behavior: "smooth" });
      }}>Contact With Us</button>
      <img src={menu} alt="Logo" className='MobileMenu' onClick={()=>setShowMenu(!showMenu)} />
      <div className='navmenu' style={{display :showMenu? 'flex':'none'}}>
        
        <Link
          className='listitem'
          to="Hero"
          activeClass='active'
          offset={-100}
          spy={true}
          smooth={true}
          duration={500}
          onClick={()=>setShowMenu(false)}
        >
          Home
        </Link>

        <Link
          className='listitem'
          to="about"
          activeClass='active'
          offset={-20}
          spy={true}
          smooth={true}
          duration={500}
          onClick={()=>setShowMenu(false)}
        >
          About
        </Link>

        <Link
          className='listitem'
          to="Services"
          activeClass='active'
          offset={-10}
          spy={true}
          smooth={true}
          duration={500}
          onClick={()=>setShowMenu(false)}
        >
          Services
        </Link>

        <Link
          className='listitem'
          to="Projects"
          activeClass='active'
          offset={-10}
          spy={true}
          smooth={true}
          duration={500}
          onClick={()=>setShowMenu(false)}
        >
          Projects
        </Link>

        <Link className='listitem' to="Certificates" activeClass='active' offset={-100} spy={true} smooth={true} duration={500}
        onClick={()=>setShowMenu(false)}
        >
          Certificates
        </Link>
<Link className='listitem' to="Contact" activeClass='active' offset={-100} spy={true} smooth={true} duration={500}
onClick={()=>setShowMenu(false)}
        >
          Contact Us
        </Link>

      </div>
      
    </nav>
  )
}

export default Navbar;
