import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/servieses/Service'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/footer'
import Projects from './components/projects/Projects'
import Certification from './components/certification/Certification'
import "./App.css"

const App = () => {
  return (
    <div className='Div'>
      <Navbar/>
      
      <div className="App-Div">
        <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Certification/>
      <Contact/>
      
      </div>
      <Footer/>
    </div>
  )
}

export default App