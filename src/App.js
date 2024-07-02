import './App.css';
import fence from './media/fencing.jpg';
import wine from './media/winery.jpg';
import DBPic from './media/VGDB.png';
import GamiBird from './media/Feature1.png';
import prevPor from './media/webPor.png';
import resumePic from './media/JonA.PNG';
import resume from './media/JonAlfaro.pdf';
import spotifyUI from './media/spotify.png';
import Header from './Header.js';


function App() {
  return (
    <div className='bg-brown'>

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
            <p className='projDesc'>
              VGDB was made to display a number of available videogames, 
              their designers and publishers, as well as reviews and videos 
              from other users. This project was created using HTML/CSS 
              for the UI, Python for the schema, MySQL for the RDBMS, 
              and Node.js/Express.js for the RESTful API. This project can
              be found in my Github repos.
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
            <p className='projDesc'>
              Main purpose of this project was to better understand the UX
              process and accurately communicate between different departments
              within a company. From my perspective, sharing spotify profiles
              does not accurately represent the current listening behavior a 
              user has. It mainly shows outdated playlists and no options to
              reorganize. I utilized Figma for lo-fi and hi-fi UX development,
              and recieve mentorship from and UX designer.
            </p>
          </div>
        </section>

        <section className='projSec'>
          <div className='descBox'>
            <h2 className='projName'>Gami Bird</h2>
            <p class="projDesc"> 
              Using Unity and C#, I was able to develop a 2D mobile 
              game, a simple execution of the famous mobile game of 2013, 
              Flappy Bird. I also used Gimp and FlatIcon to create my 
              scenery and sprites. The main purpose of this project was 
              to practice publishing/shipping of mobile games. Previously 
              available on Google Play.
            </p>
          </div>
          <img src={GamiBird} alt='GamiBird' className='projSSR'/>
        </section>

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
    </div>


    
  );
}

export default App;
