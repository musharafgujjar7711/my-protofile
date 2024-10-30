import React, { useEffect, useState } from 'react'
import myProfile from '../assets/images/mypro.png'
import { BsTwitter } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';
import { PiTwitterLogoDuotone } from 'react-icons/pi';

function Hero() {
    const [count, setCount] = useState(0);
    const [project, setProject] = useState(0);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

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

    useEffect(() => {
        if (inView && count < 98) {
            const timer = setTimeout(() => setCount(count + 1), 20);
            return () => clearTimeout(timer);
        }
    }, [count, inView]);

    return (
        <div id='hero' className='flex flex-col items-center justify-center bg-gradient-to-r from-white to-sky-300 overflow-hidden py-10'>
            <div className='container flex flex-col md:flex-row items-center justify-between md:gap-10 w-full max-w-screen-lg mx-auto px-4'>
                {/* Text Section */}
                <div className='flex flex-col items-start md:gap-8 mt-10 lg:mt-0 w-full md:w-1/2 px-3'>
                    <h1 className='text-3xl md:text-5xl font-bold capitalize'>Hi, I'm Musharaf Hussain</h1>
                    <p className='text-lg md:text-2xl font-medium text-gray-500'>
                        React & JavaScript Developer | Front-End Specialist | Experience in Responsive, Scalable Web Applications
                    </p>
                    <div className="flex gap-6 mt-4">
                        <button className="text-xs md:text-lg py-2 md:py-3 px-4 md:px-10 bg-blue-700 text-white font-medium rounded-full">
                            Let's Talk
                        </button>
                        <button className="text-xs md:text-lg py-2 md:py-3 px-4 md:px-10 bg-white text-gray-600 border rounded-full hover:bg-sky-100 transition ease-in-out">
                            Start Project
                        </button>
                    </div>
                    <div className='flex gap-8 mt-5'>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-xl md:text-5xl'>2+</h1>
                            <p className='text-xs font-bold text-gray-500'>Years Experience</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='font-bold text-xl md:text-5xl'>{project}k</h1>
                            <p className='text-xs font-bold text-gray-500'>Projects Success</p>
                        </div>
                        <div ref={ref} className='flex flex-col items-center'>
                            <h1 className='font-bold text-xl md:text-5xl'>{count}%</h1>
                            <p className='text-xs font-bold text-gray-500'>Satisfied Ratio</p>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className='relative w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0'>
                    <img
                        src={myProfile}
                        alt="Portfolio showcase"
                        className="max-w-xs md:max-w-md rounded-xl transform scale-125 opacity-80 hover:opacity-100 transition duration-300"
                    />


                   
                        <div className='bird absolute top-20 md:top-44 sm:top-40 right-72 sm:right-28 md:right-12 space-y-14'>
                            <div className='relative bg-white rounded-full text-xs md:text-lg font-medium py-2 px-5'>
                                Illustration
                                <PiTwitterLogoDuotone className='absolute text-2xl md:text-5xl text-teal-50 bg-teal-400 py-2 px-2 rounded-full -top-4 -left-3 md:-top-7' />
                            </div>
                        </div>

                        <div className='bird2 absolute top-36 md:top-60 mt-12 right-72 sm:right-32 sm:top-60 md:right-0 space-y-14'>
                            <div className='relative bg-white rounded-full text-xs md:text-lg font-medium py-2 px-5'>
                                Web Developer
                                <PiTwitterLogoDuotone className='absolute text-2xl md:text-5xl text-teal-50 bg-teal-400 py-2 px-2 rounded-full -top-4 -left-3 md:-top-7' />
                            </div>
                        </div>

                        <div className='bird3 absolute top-52 md:top-72 mt-24 sm:right-56 sm:top-64 right-60 md:right-28 space-y-14'>
                            <div className='relative bg-white rounded-full md:text-lg text-xs font-medium md:font-medium py-2 px-5 md:-top-7'>
                                Responsive
                                <PiTwitterLogoDuotone className='absolute text-2xl md:text-5xl text-teal-50 bg-teal-400 py-2 px-2 rounded-full -top-4 md:-top-7 -left-3' />
                            </div>
                        </div>
                   


                </div>
            </div>
        </div>
    );
}

export default Hero;