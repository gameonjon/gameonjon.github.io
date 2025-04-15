import './App.css';
import fence from './media/fencing.jpg';
import wine from './media/winery.jpg';
import resumePic from './media/JonA.png';
import resume from './media/JonAlfaro.pdf';
import Header from './Header.js';
import React, { useEffect } from 'react';
import Projects from './Projects.js';


function App() {
  useEffect(() =>{
    document.title = "Jon A's Portfolio";
  }, []);

  return (
    <div className='bg-brown'>

      <Header/>

      <body id='body'>
        {/* ABOUT SECTION */}
        {/* ------------- */}
        <br id='About'/>
        <h1 className='secTitle'>&mdash; ABOUT ME &mdash;</h1>
        <p className='about'>
          Hey, I’m Jon, enjoy-er of video games, music, and movies. 
          I graduated from the University of California Merced with a B.S. 
          degree in Computer Science and Engineering. I have worked with 
          multiple programming languages and frameworks focusing mostly on 
          web/mobile app development. I would best be described as a blank 
          canvas, ready to be painted with the companies talents and skills.
        </p>

        {/* EXPERIENCE SECTION */}
        {/* ---------------- */}
        <br id='Experience'/>
        <h1 className='secTitle'>&mdash; EXPERIENCE &mdash;</h1>
        <section className='expSec'>
          <div className='expDiv'>
            <img src={fence} alt="fencing" className='expSS'/>
            <h2 >Universal Fencing League</h2>
            <p> Software Engineer</p>
            <p>July 2022 - April 2023</p>
          </div>
          <div className='expDiv'>
            <img src={wine} alt="winery" className='expSS'/>
            <h2>E&J Gallo Winery</h2>
            <p>Software Engineer Intern</p>
            <p>August 2019 - December 2019</p>
          </div>
        
        </section>


        <Projects/>


        <br/>
        <div className='conLine'></div>
        <br/>

        {/* Resume SECTION */}
        {/* ------------- */}
        <br id='Resume'/>
        <section className='resumeSec'>
          <div className='resQues'>
            <h1 className='secTitle'>Looking to hire?</h1>

          </div>
          <div className='resContainer'>
            <img src={resumePic} alt='Resume' className='resume'/>
            <div className='overlay'>
              <a href={resume} className='btn' target='blank'>Jon's Resume</a>
            </div>
            
          </div>
          

        </section>
      </body>

      <footer>
        <p>Copyright © 2024. All rights Reserved.</p>
      </footer>
    </div>


    
  );
}

export default App;
