import React from 'react'
import './Header.css'

const Header = () => {

    return(
        <header>
            <nav>
                <ul className='links-list'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header