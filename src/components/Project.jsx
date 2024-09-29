import React from 'react';

const projects = [
  {
    title: 'My YouTube Clone',
    image: 'https://editor.analyticsvidhya.com/uploads/86337souvik-banerjee-8dOk8JVESxY-unsplash.jpg',
    description: 'I have built a full YouTube clone that is fully responsive with the help of these languages and frameworks.',
    technologies: ['JavaScript', 'Tailwind CSS', 'Node.js', 'React Native'],
  },
  {
    title: 'News app',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGzz3EVOPp7SMcaqMU39_QG_Z6j1f8-kq3zg&s',
    description: ' i have built a responsive news app.that is fully responsive with the help of these languages and frameworks. that have fully responsive ',
    technologies: ['JavaScript', 'Tailwind CSS', 'Node.js', 'React Native'],
  },
  {
    title: 'Weather app',
    image: 'https://play-lh.googleusercontent.com/znc7FD1BqyFR92b8n6hyROZrAR3FsTyV_ThO79hyuQG-Nb45z2qHFDTnf1HXH50DYg',
    description: ' i have built a responsive weather app Using api.that is fully responsive with the help of these languages and frameworks.',
    technologies: ['JavaScript', 'Tailwind CSS', 'Node.js', 'React Native'],
  },
];

function Project() {
  return (
    <div className='mt-4 ml-12 md:ml-48 w-full '>
      <h1 className='capitalize font-bold'>My Projects</h1>
      <div className='flex flex-col md:flex-row md:gap-4 mt-6 '>
        {projects.map((project, index) => (
          <div key={index} className='mt-6 w-[280px] p-2 bg-slate-800 rounded-lg text-white flex flex-col justify-between'>
            <h2 className='capitalize font-bold'>{project.title}</h2>
            <img src={project.image} className='w-64 h-32' alt={project.title} />
            <p className='mt-3 p-1 bg-gray-500 hover:bg-gray-600'>{project.description}</p>
            <ul className='grid grid-cols-2 gap-3 mt-6 p-1'>
              {project.technologies.map((tech, techIndex) => (
                <li key={techIndex} className='bg-gray-700 p-2  rounded-lg capitalize hover:bg-gray-600'>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
