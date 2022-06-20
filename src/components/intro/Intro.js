import React from 'react';
import './Intro.css';
import Typewriter from 'typewriter-effect'

const Intro = () => {
    return (
        <div className='intro'>
            <h2 className='intro-intro'>Hello! I am Onkar Apte.</h2>
            <Typewriter 
                options={{
                    strings: ['I am a Student', 'I am a Tennis Player'],
                    autoStart: true,
                    loop: true,
                    wrapperClassName: 'typewriter-text',
                    cursorClassName: 'typewriter-cursor'
                  }}
            />
            
        </div>
    )
}

export default Intro;