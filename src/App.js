import logo from './logo.svg';
import './App.css';
import proPic from './media/profilePic.png';
import fence from './media/fencing.jpg';
import wine from './media/winery.jpg';
import DBPic from './media/VGDB.png';
import prevPor from './media/webPor.png';
import resume from './media/JonA.png';
import resume2 from './media/JonAlfaro.pdf';

function App() {
  return (
    <div className='bg-brown'>
      <header className='head'>
        <div className='proPicDiv'>
          <img src={proPic} alt='profile picture' className='proPic'/>
        </div>
        <h1 id='headName'>Jonathan Alfaro</h1>
        
        <ul className='headList'>
          <li className='headListOpt'>Location:</li>
          <li className='headListAns'>Fresno, CA</li>  
          <li className='headListOpt'>Email:</li>
          <li className='headListAns'>
            <a href='mailto:JonathanAlfaro51@gmail.com' className='headLink'>
              <span>JonathanAlfaro51@gmail.com</span>
            </a>
          </li>
          <li className='headListOpt'>Linkedin:</li>
          <li className='headListAns'>
            <a href='https://linkedin.com/in/gameonjon' target='_blank' className='headLink'>
              <span>linkedin.com/in/gameonjon</span>
            </a>
          </li>
          <li className='headListOpt'>Github:</li>
          <li className='headListAns'>
            <a href='https://github.com/gameonjon' target='_blank' className='headLink'>
              <span>Github.com/gameonjon</span>
            </a>
          </li>
        </ul>

      </header>

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
          <img src={DBPic} alt='DB screen shot' className='projSS'/>
        </section>

        {/* previous web portfolio */}
        <section className='projSec'>
          <img src={prevPor} alt='old web portfolio' className='projSS'/>
          <div className='descBox'>
            <h2 className='projName'>Web Portfolio</h2>
            <p className='projDesc'>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur et ipsum a eros placerat pharetra.
              Fusce egestas, dolor nec mattis condimentum, libero dolor 
              ultrices enim, vitae euismod lacus purus in quam. Mauris 
              quis bibendum velit. Integer venenatis rutrum sapien sit 
              amet gravida. Aenean commodo metus ut lectus efficitur 
              fringilla. Quisque ipsum nulla, tincidunt ac libero ut, 
              rutrum eleifend lorem. Fusce tempor eros non ex eleifend 
              auctor. Curabitur tincidunt quis neque eget consequat. 
              Sed eget purus vitae arcu eleifend volutpat. Nam ut urna 
              diam.
            </p>
          </div>
        </section>

        {/* Resume SECTION */}
        {/* ------------- */}
        <br id='Resume'/>
        <h1 className='secTitle'>Looking to hire?</h1>
        <object data={resume2} className='resume'/>
        <img src={resume} alt='Resume' className='resume'/>
      </body>
    </div>
    
  );
}

export default App;
