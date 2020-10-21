import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about-container'>
            <h2>About Me</h2>
            <p>Hello, I'm Matt Kuras. I'm a full-stack web developer.</p>
            <h2>Skills</h2>
            <ul className='skills-list'>
                <p><a href='https://reactjs.org/'>Ruby</a></p>
                <p><a href='https://reactjs.org/'>Rails</a></p>
                <p><a href='https://reactjs.org/'>Javascript</a></p>
                <p><a href='https://reactjs.org/'>React</a></p>
                <p><a href='https://reactjs.org/'>Redux</a></p>
                <p><a href='https://reactjs.org/'>Sinatra</a></p>
                <p><a href='https://reactjs.org/'>SQLite</a></p>
                <p><a href='https://reactjs.org/'>HTML5</a></p>
                <p><a href='https://reactjs.org/'>CSS3</a></p>
            </ul>
                
        </div>
    )
}

export default About