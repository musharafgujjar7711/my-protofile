import React, { useEffect, useState } from 'react'
import myProfile from '../assets/images/profile4.png'
import profile from '../assets/images/profile.png'
import { BsTwitter } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { PiTwitterLogoDuotone } from 'react-icons/pi';
import { MdDesignServices } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';
import { useRef } from 'react';

function Hero() {
   
    const [project, setProject] = useState(0);
    // const [ref, inView] = useInView({
    //     triggerOnce: true,
    //     threshold: 0.5,
    // });

    useEffect(() => {
        const handleScroll = () => {
            const birds = document.querySelectorAll('.bird, .bird2, .bird3');
            birds.forEach((bird) => {
                const rect = bird.getBoundingClientRect();
                if (rect.top < window.innerHeight) {
                    bird.classList.add('animate-bird');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        if (project < 20) {
            const timer = setTimeout(() => setProject(project + 1), 20);
            return () => clearTimeout(timer);
        }
    }, [project]);

    

    //for text
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      triggerOnce: false, // Set to false to re-trigger animation on each view
      threshold: 0.5,
    });
  

    //image
    const animatedRef = useRef(null);
  
    // Increment the counter when in view
    useEffect(() => {
      if (inView && count < 98) {
        const timer = setTimeout(() => setCount(count + 1), 20);
        return () => clearTimeout(timer);
      }
    }, [count, inView]);
  
    // Add animation when in view
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in-left");
            } else {
              entry.target.classList.remove("fade-in-left");
            }
          });
        },
        { threshold: 0.5 }
      );
  
      if (animatedRef.current) {
        observer.observe(animatedRef.current);
      }
  
      return () => {
        if (animatedRef.current) {
          observer.unobserve(animatedRef.current);
        }
      };
    }, []);

    const animateRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-right');
            } else {
              entry.target.classList.remove('fade-in-right');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      if (animateRef.current) {
        observer.observe(animateRef.current);
      }
  
      return () => {
        if (animateRef.current) {
          observer.unobserve(animateRef.current);
        }
      };
    }, []);
    return (
        <div id='hero' className='flex custom-cursor flex-col items-center justify-center  text-white py-5'
        style={{backgroundImage: `url(https://www.onyedika.xyz/static/media/index.89d3119228d600788910.svg)`}}>
            <div className='container flex flex-col-reverse md:flex-row items-center justify-between md:gap-10 w-full max-w-screen-lg mx-auto px-4'>
                {/* Text Section */}
                <div ref={animatedRef} className='fade-in-left flex opacity-0 flex-col items-start md:gap-8 md:mt-5 mt-14 lg:mt-8 w-full md:w-1/2 px-3'>
                    <div className=' flex items-center gap-2 py-2 px-2 bg-green-600 bg-opacity-65 rounded-xl '>
                      
                    <span className='animate-wobble text-4xl'>✌🏻</span>
                    <h1 className='text-3xl   font-bold capitalize'>Hi, I'm Musharaf Hussain</h1>
                    </div>
                    <p className='text-lg md:text-4xl font-extrabold font-special '>
                        React & <span className='text-green-500 '>JavaScript Developer</span> | Front-End Specialist | Experience in Responsive, Scalable Web Applications
                    </p>
                    <div className="flex gap-6 mt-4">
                        <button className="text-xs md:text-lg py-2 md:py-3 px-4 sm:px-5 lg:px-10 bg-blue-700 text-white font-medium rounded-full">
                            Let's Talk
                        </button>
                        <button className="text-xs md:text-lg py-2 md:py-3 px-4 sm:px-5 lg:px-10 bg-white text-gray-600 border rounded-full hover:bg-sky-100 transition ease-in-out">
                            Start Project
                        </button>
                    </div>
                    <div className='flex gap-8 mt-5 justify-center'>
                        <div className='flex flex-col md:items-center gap-2'>
                            <h1 className='font-bold text-xl md:text-5xl'>2+</h1>
                            <p className='text-xs font-bold text-gray-500'>Years Experience</p>
                        </div>
                        <div className='flex flex-col md:items-center gap-2'>
                            <h1 className='font-bold text-xl md:text-5xl'>{project}k</h1>
                            <p className='text-xs font-bold text-gray-500'>Projects Success</p>
                        </div>
                        <div ref={ref} className='flex flex-col md:items-center gap-2'>
                            <h1 className='font-bold text-xl md:text-5xl'>{count}%</h1>
                            <p className='text-xs font-bold text-gray-500'>Satisfied Ratio</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
              

                <div ref={animateRef} className='relative fade-in-right   w-full md:w-1/2   flex items-center justify-center mt-2 '>
                    <img
                        src={myProfile}
                        alt="Portfolio showcase"
                        className="max-w-xs  ml-9 md:ml-0 md:h-72  fade-in-right   rounded-xl transform scale-125 opacity-80 hover:opacity-100 transition duration-300"
                    />



                    <div className='bird absolute top-20 md:top-11 hidden md:block text-black sm:top-40 right-52 sm:right-28 md:-right-4 space-y-14'>
                        <div className='bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                            Illustration
                            <PiTwitterLogoDuotone className='absolute  text-2xl md:text-4xl text-teal-50 bg-teal-400 md:py-2 md:px-2 rounded-full -top-4 -left-3 md:-top-7' />
                        </div>
                    </div>

                    <div className='bird2 absolute top-36 md:top-28 hidden md:block text-black  mt-12 right-60 sm:right-32 sm:top-60 md:right-0 space-y-14'>
                        <div className='bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'>
                            Web Developer
                            <MdDesignServices className='absolute text-2xl md:text-4xl text-teal-50 bg-teal-400 md:py-2 md:px-2 rounded-full -top-4 -left-3 md:-top-7' />
                        </div>
                    </div>

                    <div className='bird3 absolute text-black hidden md:block   rounded-full top-52 md:top-36 mt-24 right-60 md:right-28 space-y-14'>
                        <div className='bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg opacity-100 text-sm px-5 py-2.5 text-center me-2 mb-2'>
                            Responsive
                            <DiResponsive className='absolute text-2xl md:text-4xl text-black-50 bg-teal-400 md:py-1 md:px-1 rounded-full -top-4 md:-top-7 -left-3' />
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Hero;
