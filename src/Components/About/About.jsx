import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <div className="about-para">
                    <p>Hello! I'm Mohammed Siddique, a passionate front-end developer with a keen eye for design and a love for crafting beautiful and intuitive user interfaces. I thrive on turning complex problems into simple, elegant solutions.</p>
                    <p>I'm passionate about staying updated with the latest web development trends, continuously learning, and collaborating with cross-functional teams. My goal is to craft engaging web experiences that leave a lasting impression on users</p>
                </div>
            </div>
            <div className="about-right">
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default About