import React from "react";
import './App.css';

import proPic from './media/profilePic.png';
import mapIcon from './media/location-pin.png'
import mailIcon from './media/email.png';
import linkedIcon from './media/linkedin.png';
import gitIcon from './media/github.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Header({}){
    return (
        <header className='head'>
            <div className='proPicDiv'>
                <img src={proPic} alt='profile picture' className='proPic'/>
            </div>
            <h1 id='headName'>Jonathan Alfaro</h1>           
            <ul className='headList'>
                <li className='headListAns'>
                    <a className='headLink noHover'>
                        <span className='headLinkText'>Fresno, CA</span>
                        <img src={mapIcon} className='headLinkIcon'/>
                    </a>
                </li>
                <li className='headListAns'>
                    <a href='mailto:JonathanAlfaro51@gmail.com' className='headLink'>
                        <span className='headLinkText'>JonathanAlfaro51@gmail.com</span>
                        <img src={mailIcon} alt='email icon' className='headLinkIcon'/>
                    </a>
                </li>
                <li className='headListAns'>
                    <a href='https://linkedin.com/in/gameonjon' target='_blank' className='headLink'>
                        <span className='headLinkText'>linkedin.com/in/gameonjon</span>
                        <img src={linkedIcon} alt='linkedin' className='headLinkIcon'/>
                    </a>
                </li>
                <li className='headListAns'>
                    <a href='https://github.com/gameonjon' target='_blank' className='headLink'>
                        <span className='headLinkText'>Github.com/gameonjon</span>
                        <img src={gitIcon} alt='github' className='headLinkIcon'/>
                    </a>
                </li>
            </ul>
    
        </header>
    )

}

export default Header;


