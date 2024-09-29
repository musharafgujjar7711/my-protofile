import React from 'react';
import { BiArrowFromTop } from 'react-icons/bi';
import { FaMousePointer } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { SiBackendless } from 'react-icons/si';

const services = [
  {
    icon: <FaMousePointer size={40} />,
    title: 'Frontend Developer',
    description: 'I am a frontend developer with 1 year of experience. I build responsive and optimized sites.',
  },
  {
    icon: <SiBackendless size={40} />,
    title: 'Backend Developer',
    description: 'I have little bit experience backend developer . I build responsive and optimized sites using APIs.',
  },
  {
    icon: <MdDesignServices size={40} />,
    title: 'UI/UX Designer',
    description: 'Creating layouts, color schemes, typography, and overall aesthetics of the application or website. Developing interactive prototypes to demonstrate user interface functionality.',
  },
];

function About() {
  return (
    <div className='p-14 flex items-center justify-center flex-col'>
      <h1 className='capitalize font-bold text-3xl text-blue-500 mb-4'>About</h1>
      <div className='flex flex-col gap-4 w-full max-w-2xl'>
        {services.map((service, index) => (
          <div key={index} className='flex items-start gap-4 md:flex-row flex-col'>
            <span>{service.icon}</span>
            <span className='flex flex-col'>
              <h1 className='capitalize font-bold text-2xl p-2  bg-gradient-to-r from-violet-500 to-fuchsia-500 cursor-pointer duration-300 hover:text-red-300 rounded'>{service.title}</h1>
              <p className='w-full text-wrap p-2  cursor-pointer duration-300 hover:text-rose-500 rounded'>{service.description}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
