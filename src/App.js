import './App.css';
import fence from './media/fencing.jpg';
import wine from './media/winery.jpg';
import DBPic from './media/VGDB.png';
import prevPor from './media/webPor.png';
import resumePic from './media/JonA.png';
import resume from './media/JonAlfaro.pdf';
import spotifyUI from './media/spotify.png';
// import proPic from './media/profilePic.png';   //HEADER
// import mapIcon from './media/maps-and-flags.png'
// import mailIcon from './media/email.png';
// import linkedIcon from './media/linkedin.png';
// import gitIcon from './media/github-sign.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Header from './Header.js';


function App() {
  return (
    <div className='bg-brown'>
      {/* <header className='head'>
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
            <a href='mailto:JonathanAlfaro51@gmail.com' className='headLink fa fa-envelope'>
              <span className='headLinkText'>JonathanAlfaro51@gmail.com</span>
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

      </header> */}

      <Header/>

      <body id='body'>
        {/* ABOUT SECTION */}
        {/* ------------- */}
        <br id='About'/>
        <h1 className='secTitle'>&mdash;&mdash; ABOUT ME &mdash;&mdash;</h1>
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
        <h1 className='secTitle'>&mdash;&mdash; EXPERIENCE &mdash;&mdash;</h1>
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




        {/* PROJECTS SECTION */}
        {/* ---------------- */}
        <br id='Projects'/>
        <h1 className='secTitle'>&mdash;&mdash; PROJECTS &mdash;&mdash;</h1>
          {/* VGDB*/}

        <section className='projSec'>
          <div className='descBox'>
            <h2 className='projName'>VideoGame Database</h2>
            <p className='projDesc'>VGDB was made using web development and 
              Relational Database Management System with HTML/CSS and python, respectively.
              These two resources were connected using Node.js as the REST API. The
              purpose of this project was to create an interface and storage
              management system to hold various videogames and their info of
              publishers, designers, etc.
            </p>

            {/* <div className='projSSDiv'> */}
            {/* </div> */}
          </div>
          <img src={DBPic} alt='DB screen shot' className='projSSR'/>
        </section>

        {/* Spotify user profile  */}
        <section className='projSec'>
          <img src={spotifyUI} alt='spotify rework' className='projSSL'/>
          <div className='descBox'>
            <h2 className='projName'>UX/UI Redesign of Music App</h2>
            <p className='projDesc'>Addressing user pain points when sharing profiles. 
            From my perspective sharing with friends doesn't showcase an accurate 
            representation of the current listening behavior. Main purpose was to 
            better understand the UX process and accurately communicate between
            cross-functional departments. Utilizing Figma for lo-fi and hi-fi UX development,
            and receiving mentorship from UX Designer. 
            </p>
          </div>
        </section>

        <div className='descBox'>
          <h2 className='projName'>I HAVE ALSO...</h2>
          <p className='projDesc'>dabbled in game development (using Unity and Gimp) 
          and basics to making music(using Ableton)  </p>
        </div>


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
            
            {/* <a href={resume} className='btn' target='blank'>Jon's Resume</a> */}
          </div>
          

        </section>
      </body>
    </div>


    
  );
}

export default App;
