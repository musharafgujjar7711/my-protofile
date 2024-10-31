import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '.';
import ProjectCard from '../projectSec/ProjectCard'
 

// Define animation variants for the text
const textVariant = () => ({
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }, 
});
const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },   // Initial state (invisible and slightly below)
  visible: { opacity: 1, y: 0 },   // Visible state (fully opaque and in position)
};

function Project() {
  return (
    <section className=' container  pt-6 bg-zinc-800 border-dashed border-blue-600 border-t-4 text-white' id='project'>
      <motion.div
        variants={textVariant()}      
        initial="hidden"              
        animate="visible"           
        transition={{ duration: 0.5 }} 
      >
        <p className='sectionHeadText text-white'>My Project</p>   
      </motion.div>
      <div>
      <motion.p
        className="yourClassName mt-4 md:text-xl text-lg font-medium text-gray-400  cursor-pointer"    
        variants={fadeInVariant}      
        initial="hidden"             
        animate="visible"             
        transition={{ duration: 0.5 }} 
      >
        The following projects showcase my skills and experience through real-world examples of my work.
        Each project includes a brief description, along with links to code repositories and live demos.
        These projects reflect my ability to solve complex problems, work with various technologies, and
        manage projects effectively.
      </motion.p>
    </div>
      <div className=' mt-20   flex-wrap gap-9 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
     {projects.map((project,index)=>(
      <ProjectCard key={`project-${index}`} index={index} project={project}>

      </ProjectCard>
     ))
     
     }
      </div>
    </section>
  );
}

export default Project;
