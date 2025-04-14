import {useEffect, useState } from 'react';
import './App.css';

function Slideshow({images, classname}){
    const interval = 4000;
    const [currentIndex, setCurrIndex] = useState(0);

    useEffect(() =>{
        const slide = setInterval(() => {
            setCurrIndex((prev) => (prev + 1) % images.length);            
        }, interval);
        return () => clearInterval(slide);
    }, [images.length, interval]);

    return (
        <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`}
            className={classname}
        />
    );
}

export default Slideshow;