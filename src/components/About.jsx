import { HeartIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoDiamond } from 'react-icons/io5';
import { motion } from 'framer-motion';

function About() {
  return (
    <div className='relative'>
      <div className='container bg-gray-700 text-white'>
        <div className='flex flex-col'>
          {/* Animated Heading */}
          <motion.h1
            className='capitalize text-2xl lg:text-4xl text-center font-poppins mt-24 md:mt-36 font-bold'
            initial={{ opacity: 0, scale: 0.5 }} // Start scaled down
            animate={{ opacity: 1, scale: 1 }} // Scale to normal
            transition={{ duration: 0.5 }} // Animation duration
          >
            my services and Experience
          </motion.h1>

          <div className='grid md:grid-cols-3 grid-cols-1 mt-9 lg:mt-32 p-2 gap-6'>
            {/* Service Boxes with Fly-In-Down Animation */}
            {[
              {
                icon: <IoDiamond size={40} className='text-blue-800' />,
                title: 'Development',
                description: (
                  <>
                    I have experience in <b className='text-orange-700'>HTML</b>, <b className='text-orange-700'>CSS</b>, and <b className='text-orange-700'>JavaScript</b>, and I use one of the famous libraries like <b className='text-orange-700'>React.js</b> and for style <b className='text-orange-700'>Tailwind CSS</b>.
                  </>
                ),
              },
              {
                icon: <FaHeart size={40} className='text-blue-800' />,
                title: 'Design',
                description: (
                  <>
                    I have experience in web design and responsive website design. I have built many responsive designs like <b className='text-orange-700 capitalize'>landing pages</b> etc.
                  </>
                ),
              },
              {
                icon: <IoDiamond size={40} className='text-blue-800' />,
                title: 'Development',
                description: (
                  <>
                    I have experience in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and I use one of the famous libraries like <b>React.js</b> and for style <b>Tailwind CSS</b>.
                  </>
                ),
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className='box bg-gray-950 py-2 px-3 rounded-lg'
                initial={{ opacity: 0, y: 50 }} // Start below the original position
                animate={{ opacity: 1, y: 0 }} // Fade in and move to the original position
                transition={{ duration: 0.5, delay: index * 1 }} // Delay based on index
              >
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-poppins font-bold py-2 px-3 text-center flex flex-col items-center'>
                    {service.icon}
                    {service.title}
                  </h2>
                  <p className='font-poppins text-text2 py-2 px-3 leading-7 text-center'>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

