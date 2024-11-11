import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import myProfile from '../assets/images/mypro.png'


import { FaGithub } from 'react-icons/fa';
import { TbBrandVercel } from 'react-icons/tb';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className='mb-9'
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 1 }}
    >
      <Tilt option={{
        max: 45,
        scale: 1,
        speed: 540
      }} className='bg-cyan-950 p-5 rounded-2xl w-full sm:w-[360px ]  ' >
        <div className=' w-full h-[230px] relative'>
          <img
            src={project.image}
            alt={`${project.name} `}
            className='w-full h-full object-cover rounded-2xl' />
        
         <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className=' '>
            <FaGithub className=' md:w-12 md:h-10 h-10 w-10 py-1 px-1 custom-cursor2 flex items-center justify-center right-1 absolute  bg-gray-900 text-white rounded-full hover:text-red-300 mt-3' />
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className=' '>
            <TbBrandVercel className='md:w-12 md:h-10 h-10 w-10 py-2 px-2 custom-cursor2 text-xs right-12    absolute  bg-gray-900 text-white rounded-full hover:text-red-300 mt-3' />
          </a>
         
          </div>

          <div className=' mt-5 '>
           <h2 className=' md:text-2xl text-xl w-32  font-bold text-white '>{project.name.slice(0,14)}</h2>
           <p className='  text-gray-400 text-lg mt-4'>{project.description}</p>
          
        </div>
        <div className=' flex flex-wrap mt-4 gap-2'>
                 {project.tags.map((tage)=>(
                  <p key={tage.name} className={`text-lg ${tage.color}`}>#{tage.name}</p>
                 ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectCard;

