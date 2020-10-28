import React, {Fragment} from 'react'
import './Portfolio.css'
import PortfolioCard from './portfolioCard.jsx'
import { DiReact, DiRuby } from 'react-icons/di'
import {SiRedux } from 'react-icons/si'


const Portfolio = () => {

    

    return (
        <Fragment>
        <div className='portfolio-container'>
            <h1>Portfolio</h1>
        <div className='portfolio-cards'>
        <PortfolioCard name={'Habit Tracker'}
                 website={'https://protected-gorge-85357.herokuapp.com/'}
                 gitHubLink={'https://github.com/mattkuras/Habit-Helper'} 
                 description={'App that uses a Rails API and React frontend framework that allows users to create identities and to keep daily progress stored on the app'}
                 skillHighlight={'Ruby on Rails, React'}
                 icon={<DiReact/>}
                 color={'DodgerBlue'}
                 />
                 <PortfolioCard name={'Drug Charge Generator'}
                 website={'https://protected-gorge-85357.herokuapp.com/'}
                 gitHubLink={'https://github.com/mattkuras/drug-charge-app'} 
                 description={'App that utilizes custom Ruby class methods to webscrape online sites to quickly generate legal penalties for different types of drug related crimes, by US state.'}
                 skillHighlight={'skill highlight: Ruby on Rails, React'}
                 icon={<DiRuby/>}
                 color={'crimson'}
                 />
                 <PortfolioCard name={'Ecommerce Store'}
                 website={'https://protected-gorge-85357.herokuapp.com/'}
                 gitHubLink={'https://github.com/mattkuras/guitar-store'} 
                 description={'App that allows users to psudo purchase items online by selecting and adding to cart using Redux.'}
                 skillHighlight={'skill highlight: Redux, React'}
                 icon={<SiRedux/>}
                 color={'purple'}
                 />
        </div>
                
        </div>
        </Fragment>
    )
}

export default Portfolio