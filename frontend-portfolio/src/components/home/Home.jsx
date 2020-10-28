import React from 'react'
import './Home.css'
import { FaGithub } from 'react-icons/fa'
import {AiFillLinkedin} from 'react-icons/ai'
import {CgFileDocument} from 'react-icons/cg'
import { useSpring, animated, config, useTransition } from 'react-spring'
import {Spring, Trail, Transition} from 'react-spring/renderprops'

const Home = () => {
    const propsMiddle = useSpring({ config: config.molasses, 
        from: {transform: `translate(0, 100%)`},
        to: {transform: 'translate(0, 0%)'}
    })
    const propsLeft = useSpring({ config: config.molasses, 
        from: {transform: 'translate(-200%, 0%)'},
        to: {transform: 'translate(0, 0%)'}
    })
    const propsRight = useSpring({ config: config.molasses, 
        from: {transform: 'translate(200%, 0%)'},
        to: {transform: 'translate(0, 0%)'}
    })
    const propsTitle = useSpring({ config: {mass:1, tension:280, friction:300},
        from: {opacity: 0},
        to: {opacity: 1}
    })

    let direction = getRandomInt(400)
    const propsName = useSpring({ config: config.molasses, 
        from: {transform: `translate(${direction}%, 0%)`},
        to: {transform: 'translate(0, 0%)'}
    })
    
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      const letters = ['m', 'a', 't', 't', 'k', 'u', 'r', 'a', 's']

    //   const transitions = useTransition(letters, letter => letter.key, {
    //     from: { transform: `translate(0, 100%)` },
    //     enter: { transform: 'translate(0, 0%)' }
    //     })

        const titleLetters = letters.map(letter => (
            <Transition 
                from={{ transform: 'translateX(220)' }}
                to={{ transform: 'translateX(0)' }}>
                {props => <span key={letter.key} style={{props}}>{letter}</span>}
            </Transition>
        ))

    //     const name = transitions.map(({letter, props, key}) =>
    // <animated.span key={key} style={props}>{letter}</animated.span> 
    //     )
    // const title = transitions.map(({letter, props, key}) => (
       
        // <animated.span key={key} style={props}>letter</animated.span> 
        // ))

    return(
        <div className='home-container'>
            <div className='home-content'>
            
                <Spring config={config.molasses}
                    from={{ opacity: 0 }}
                    to={{ opacity: 1 }}>
                    {props => <span style={props}>Matt Kuras</span>}
                </Spring>
                {/* <animated.span style={propsName}>M</animated.span><span>a</span><span>t</span><span>t</span> */}
                {/* <span>K</span><span>u</span><span>r</span><span>a</span><span>s</span> */}
                <animated.h3 style={propsTitle}>Full Stack Web Developer</animated.h3>
                <ul className='social-list'>
                    <animated.li style={propsName}><a href='https://github.com/mattkuras' ><FaGithub/></a></animated.li>
                    <animated.li  style={propsMiddle}><a href='https://www.linkedin.com/in/matthew-kuras-72a7711b5/'><AiFillLinkedin/></a></animated.li>
                    <animated.li  style={propsRight}><a href='https://www.linkedin.com/in/matthew-kuras-72a7711b5/'><CgFileDocument/></a></animated.li>
                </ul>
            </div>
        </div>
    )
}

export default Home