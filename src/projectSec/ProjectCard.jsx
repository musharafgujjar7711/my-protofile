import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import myProfile from '../assets/images/mypro.png'


import { FaGithub } from 'react-icons/fa';
import { TbBrandVercel } from 'react-icons/tb';

function ProjectCard({ project, index }) {
  return (
    <motion.div
      className=''
      key={index}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 1 }}
    >
      <Tilt option={{
        max: 45,
        scale: 1,
        speed: 540
      }} className='bg-gray-200 p-5 rounded-2xl w-full sm:w-[360px ]  ' >
        <div className=' w-full h-[230px] relative'>
          <img
            src={project.image}
            alt={`${project.name} `}
            className='w-full h-full object-cover rounded-2xl' />
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className=' '>
            <FaGithub className=' w-12 h-12 py-1 px-1 flex items-center justify-center left-12 absolute inset-0 bg-gray-900 text-white rounded-full hover:text-red-300' />
          </a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className=' '>
            <TbBrandVercel className=' w-12 h-12 py-3 px-3 text-xs   absolute inset-0 bg-gray-900 text-white rounded-full hover:text-red-300' />
          </a>
          </div>

          <div className=' mt-5 '>
           <h2 className=' text-2xl font-bold text-white '>{project.name}</h2>
           <p className=' mt-2 text-gray-400 text-lg'>{project.description}</p>
          
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

