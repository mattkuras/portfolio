import React from 'react'
import './Home.css'
import { FaGithub } from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {CgFileDocument} from 'react-icons/cg'

const Home = () => {

    return(
        <div className='home-container'>
            <div className='home-content'>
                <h1>Matt Kuras</h1>
                <h3>Full Stack Web Developer</h3>
                <ul className='social-list'>
                    <li><a href='https://github.com/mattkuras' ><FaGithub/></a></li>
                    <li><a href='https://www.linkedin.com/in/matthew-kuras-72a7711b5/'><AiFillLinkedin/></a></li>
                    <li><a><CgFileDocument/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Home