import React from 'react'
import './About.css'
import { DiReact, DiRuby, DiJavascript1, DiCss3Full } from 'react-icons/di'
import {SiRails, SiRedux, SiRedhat } from 'react-icons/si'
import {AiOutlineHtml5} from 'react-icons/ai'
import sophiaheadshot from './sophiaheadshot.JPG'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor"

const About = () => {
    return (
        <div className='about-container'>
            <VisibilitySensor partialVisibility={true}>
                {({ isVisible }) => (
                <Spring delay={100} to={{ opacity: isVisible ? 1 : 0,
                    transform: isVisible? "translateY(0)" : "translateY(-100px)",
                }}>
                    {(props) => (
                    <h1 style={{ ...props }}>About Me</h1>
                    )}
                </Spring>
                )}
            </VisibilitySensor>
            <div className='split-container'>
                <div className='headshot-container'>
                    <img alt='sophiaheadshot.JPG' src={sophiaheadshot}/>
                </div>
                <div className='about-me'>
                    <p>Experienced in Ruby on Rails and JavaScript based programming and a background in customer service and education. Teaching English and developing youth soccer has driven me to deeply understand my passions to the point that I can clearly communicate their intricacies even to a child, which has translated directly to my education in code. Helping change others’ futures through my skills in communication and project planning, I want to help change our future using technology. </p>
                </div>
            </div>
            <VisibilitySensor partialVisibility>
                {({isVisible}) => (
                    <Spring delay = {200} to={{opacity: isVisible ? 1: 0}}>
                        {(opacity) => (
                        <h2 id='skills-header' style={opacity}>Skills</h2>    
                        )}
                    </Spring>
                )}
            </VisibilitySensor>

            <VisibilitySensor>
                {({ isVisible }) => (
                <Spring delay={300} to={{ opacity: isVisible ? 1 : 0, transform: isVisible? "translateY(0)" : "translateY(100px)",
                }}>
                    {( props ) => (
                    <div className='skills-container' style={{...props}}>
                    <div className='skill left'>
                        <a href='https://reactjs.org/'><DiRuby/></a>
                        <h2>Ruby</h2>
                    </div>
                    <div className='skill left'>
                        <a href='https://reactjs.org/'><SiRails/></a>
                        <h2>Rails</h2>
                    </div>
                    <div className='skill left'>
                        <a href='https://reactjs.org/'><DiJavascript1/></a>
                        <h2>Javascript</h2>
                    </div>
                    <div className='skill left'>
                        <a href='https://reactjs.org/'><DiReact/></a>
                        <h2>React</h2>
                    </div>
                    <div className='skill right'>
                        <a href='https://reactjs.org/'><SiRedux/></a>
                        <h2>Redux</h2>
                    </div>
                    <div className='skill right'>
                        <a href='https://reactjs.org/'><SiRedhat/></a>
                        <h2>Sinatra</h2>
                    </div>
                    <div className='skill right'>
                        <a href='https://reactjs.org/'><AiOutlineHtml5/></a>
                        <h2>HTML5</h2>
                    </div>
                    <div className='skill right '>
                        <a href='https://reactjs.org/'><DiCss3Full/></a>
                        <h2>CSS3</h2>
                    </div>
            </div>
                    )}
                </Spring>
                )}
            </VisibilitySensor>            
        </div>
    )
}

export default About