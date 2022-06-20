import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

//const ScrollLink = Scroll.ScrollLink;

const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Navbar-social'>
                <ul className='Navbar-social-links'>
                    <li><a href='#'><i className="fa fa-facebook-square"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/onapte'><i className="fa fa-linkedin-square"></i></a></li>
                    <li><a href='https://www.github.com/onapte'><i className="fa fa-github-square"></i></a></li>
                    <li><a href='https://stackoverflow.com/users/17324341/onapte'><i className="fa fa-stack-overflow"></i></a></li>
                </ul>
            </div>
            <div className='Navbar-name'>
                Onkar Apte
            </div>
            <div className='Navbar-links'>
                <Link
                    activeClass='active'
                    to='About'
                    spy={ true }
                    smooth={ true }
                    offset={ -30 }
                >
                    About
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link
                    to='Skills'
                    spy={ true }
                    smooth={ true }
                    offset={ -30 }
                >
                    Skills
                </Link>
                &nbsp;&nbsp;&nbsp;
                <Link
                    to='Projects'
                    spy={ true }
                    smooth={ true }
                    offset={ -30 }
                >
                    Projects
                </Link>
            </div>
        </div>
    )
}

export default Navbar;