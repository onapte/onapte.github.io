import React from 'react';
import './Project.css'

const Project = (props) => {
    return (
        <div className='Project'>
            <div className='Project-image'>
                <img src={ props.img } />
            </div>
            <div className='Project-Title'>
                { props.title }
            </div>
            <div className='Project-Description'>
                { props.des }
            </div>
            <div className='Project-Misc'>
                <font className='Project-Date'>{ props.date }</font>-<font className='Project-Status'>{ props.status }</font>-<font className='Project-Link'><a href={ props.link }>Visit</a></font>
            </div>
        </div>
    )
}

export default Project;