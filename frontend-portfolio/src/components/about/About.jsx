import React from 'react'
import './About.css'
import {DiHtml5, DiReact} from 'react-icons/di'
import {DiRuby} from 'react-icons/di'
import {SiRails} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {SiRedux} from 'react-icons/si'
import {AiOutlineHtml5} from 'react-icons/ai'
import {DiCss3Full} from 'react-icons/di'
import {SiRedhat} from 'react-icons/si'

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-me'>
                <h2>About Me</h2>
                <p>Hello, I'm Matt Kuras. I'm a full-stack web developer.</p>
            </div>
            <h2 id='skills-header'>Skills</h2>
            <div className='skills-container'>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><DiRuby/></a>
                        <h2>Ruby</h2>
                    </div>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><SiRails/></a>
                        <h2>Rails</h2>
                    </div>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><DiJavascript1/></a>
                        <h2>Javascript</h2>
                    </div>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><DiReact/></a>
                        <h2>React</h2>
                    </div>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><SiRedux/></a>
                        <h2>Redux</h2>
                    </div>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><SiRedhat/></a>
                        <h2>Sinatra</h2>
                    </div>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><AiOutlineHtml5/></a>
                        <h2>HTML5</h2>
                    </div>
                    <div className='skill'>
                        <a href='https://reactjs.org/'><DiCss3Full/></a>
                        <h2>CSS3</h2>
                    </div>
            </div>
        </div>
    )
}

export default About