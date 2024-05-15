import React from 'react'
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        
        <h1><span>I'm Mohammed Siddique,</span> Front End Developer.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odit.</p>
        <div className="hero-action">
            <div className="hero-connect">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
            </div>
            <div className="hero-resume">
                My Resume
            </div>
        </div>
    </div>
  )
}

export default Hero