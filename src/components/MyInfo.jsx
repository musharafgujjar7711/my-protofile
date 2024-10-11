import React from 'react';
import { motion } from 'framer-motion';

function MyInfo() {
  return (
    <div className='container bg-black text-white'>
      <div className='flex items-center md:flex-row-reverse flex-col-reverse gap-7'>
        
        {/* Text Section with Fade-in-Left Animation */}
        <motion.div 
          className='flex-1 flex-col flex gap-6'
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
          transition={{ duration: 0.5 }} // Animation duration
        >
          <h1 className='capitalize text-2xl lg:text-5xl font-bold leading-7 text-text1 lg:text-start font-poppins'>
            hi, my name is musharaf hussain
          </h1> 
          <p className='leading-9 text-text2 text-2xl lg:text-start font-poppins'>
            i am a web designer and front-end web developer. I have experience in JavaScript, CSS, HTML, JSON, etc.
          </p>
          <button className='text-lg bg-text1 w-32 hover:bg-blue-600 p-2 rounded-xl mb-4'>Hire</button>
        </motion.div>

        {/* Image Section with Fade-in-Right Animation */}
        <motion.div 
          className='flex-1'
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          animate={{ opacity: 1, x: 0 }} // Fade in and move to original position
          transition={{ duration: 0.5 }} // Animation duration
        >
          <img src="/Screenshot.png" className='w-[500px]' alt="" />
        </motion.div>
        
      </div>
    </div>
  ); 
}

export default MyInfo;

