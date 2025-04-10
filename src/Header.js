import React from "react";
import './App.css';

import proPic from './media/profilePic.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGithub, faLinkedin, fab} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faEnvelope, faLinkedin, faGithub);

function Header({}){
    return (
        <header className='head'>
            <div className='proPicDiv'>
                <img src={proPic} alt='profile' className='proPic'/>
                <h1 id='headName'>Jonathan <br className="mobileBr"/>Alfaro</h1>  
            </div>
           
            <ul className='headList'>
                
                <li className='headListAns'>
                    <a href='mailto:JonathanAlfaro51@gmail.com' className='headLink'>
                        <span className='headLinkText'>JonathanAlfaro51@gmail.com</span>
                        <FontAwesomeIcon icon={"envelope"} className="headLinkIcon"/>
                    </a>
                </li>
                <li className='headListAns'>
                    <a href='https://linkedin.com/in/gameonjon' target='_blank' className='headLink'>
                        <span className='headLinkText'>linkedin.com/in/gameonjon</span>
                        <FontAwesomeIcon icon={faLinkedin} className="headLinkIcon"/>
                    </a>
                </li>
                <li className='headListAns'>
                    <a href='https://github.com/gameonjon' target='_blank' className='headLink'>
                        <span className='headLinkText'>Github.com/gameonjon</span>
                        <FontAwesomeIcon icon={faGithub} className="headLinkIcon"/>
                    </a>
                </li>
            </ul>
    
        </header>
    )

}

export default Header;


