import React, { useEffect, useState } from 'react';
import './App.css';
import Slideshow from './Slideshow';


// import DBPic from './media/VGDB.png';
import GamiBird from './media/Feature1.png';
import spotifyUI from './media/spotify.png';

import pp1 from './media/cap1.png';
import pp2 from './media/cap2.png';

import db1 from './media/DBHome.PNG';
import db2 from './media/DBGame.PNG';
import db3 from './media/DBAdd.PNG';

const ppImages = [pp1, pp2];

const DBImgs = [db1, db2, db3];


const Projects = () => {
    const intervalTime = 4000;

    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() =>{
        const interval = setInterval(() =>{ 
            setCurrIndex((prevIndex) => //prevIndex is current slide
                prevIndex === ppImages.length - 1 ? 0 : prevIndex + 1
            );
        }, intervalTime);

        //clean interval when component unmounts
        return () => clearInterval(interval);

    }, [currIndex, intervalTime]); //dependencies


    return (
        <div>
            {/* PROJECTS SECTION */}
            {/* ---------------- */}
            <br id='Projects'/>
            <h1 className='secTitle'>&mdash; PROJECTS &mdash;</h1>
            {/* VGDB*/}

            <section className='projSec'>
                <div className='descBox'>
                    <h2 className='projName'>VideoGame Database</h2>
                    <p className='projDesc'>
                        VGDB was made to search a number of available videogames and display
                        their designers and publishers, as well as reviews and videos 
                        from other users. This project was created using HTML/CSS 
                        for the UI, Python for the schema, MySQL for the RDBMS, 
                        and Node.js/Express.js for the RESTful API. This project can
                        be found in my <a href='https://github.com/gameonjon/VideoGamesDB2'className='link'>Github Repos</a>. 
                    </p>

                    {/* <div className='projSSDiv'> */}
                    {/* </div> */}
                </div>
                <Slideshow images={DBImgs} classname='projSSR'/>
                {/* <img src={DBImgs[currIndex]} alt='DB screen shots' className='projSSR'/> */}
            </section>

            {/* Spotify user profile  */}
            <section className='projSec'>
                <img src={spotifyUI} alt='spotify rework' className='projSSL'/>
                <div className='descBox'>
                    <h2 className='projName'>UI/UX Concepts</h2>
                    <p className='projDesc'>
                    The main goal of this project was to deepen my understanding of
                    the UX design process and improve cross-functional 
                    communication. I chose to redesign a specific feature in 
                    Spotify (profile sharing) which I felt didn’t reflect a 
                    user’s current listening behavior. The default view focuses 
                    on outdated playlists with limited personalization or 
                    reorganization options. I used Figma to create both 
                    low-fi and high-fi wireframes, and received 
                    mentorship from a professional UX designer throughout the 
                    process.
                    {/* Main purpose of this project was to better understand the UX
                    process and accurately communicate between different departments
                    within a company. Choosing one of my favored music apps, I 
                    redesigned a specific page when sharing with others. I utilized 
                    Figma for the lo-fi and hi-fi UX development, and recieved mentorship
                    from a UX designer. */}
                    {/* From my perspective, sharing spotify profiles
                    does not accurately represent the current listening behavior a 
                    user has. It mainly shows outdated playlists and no options to
                    reorganize. I utilized Figma for lo-fi and hi-fi UX development,
                    and recieve mentorship from and UX designer. */}
                    </p>
                </div>
            </section>

            <section className='projSec'>
            <div className='descBox'>
                <h2 className='projName'>Gami Bird</h2>
                <p className="projDesc"> 
                Using Unity and C#, I was able to develop a 2D mobile 
                game, a simple execution of the famous mobile games of 2013, 
                Flappy Bird. I also used Gimp and FlatIcon to create my 
                scenery and sprites. The main purpose of this project was 
                to practice publishing/shipping of mobile games. Previously 
                available on Google Play.
                </p>
            </div>
            <img src={GamiBird} alt='GamiBird' className='projSSR'/>
            </section>

            {/* <section className='projSec'>
                <Slideshow images={ppImages} classname='projSSL'/> */}
                {/* <img src={ppImages[currIndex]} alt='prev portfolio' className='projSSL'/> */}
                {/* <div className='descBox'>
                    <h2 className='projName'>Web Portfolio</h2>
                    <p className='projDesc'>
                        Here I am showcasing my previous portfolio, which
                        had many different features than the current one, 
                        using mainly HTML/CSS.
                    </p>
                </div>
                
            </section> */}

            
        </div>

    );
};

export default Projects;