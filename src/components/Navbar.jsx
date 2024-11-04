import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FcAbout } from 'react-icons/fc';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SiHyperskill } from 'react-icons/si';
import { Link } from 'react-scroll';
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { VscProject } from 'react-icons/vsc';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsOpen(!isOpen);
    }
  };

  const handleMenuItemClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div className='relative'>
      <div className='container mx-auto md:mt-8 bg-head text-black shadow-2xl border-t border-red-900 border-4 '>
        <div className='p-6 flex items-center justify-around'>
          <h1 className=' text-xl md:text-2xl lg:text-4xl md:font-bold font-bold lg:font-extrabold  flex-1'>Musharaf TechCraft</h1>
          <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
            {isOpen ? <CgClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex capitalize font-bold z-50 custom-cursor2 md:gap-4 lg:gap-14 lg:text-3xl md:text-lg '>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 nav-item p-2 rounded duration-200">
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110  nav-item p-2 rounded duration-200">
              <Link to="services" smooth={true} duration={500}>Services</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110  nav-item p-2 rounded duration-200">
              <Link to="project" smooth={true} duration={500}>Project</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110  nav-item p-2 rounded duration-200">
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
           
            <a href="https://github.com/musharafgujjar7711/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10 text-gray-400 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.5.1.6-.2.6-.5V19c-2.8.6-3.4-1.4-3.4-1.4-.4-1-.9-1.2-.9-1.2-.7-.5 0-.5.1-.5.8 0 1.3.8 1.3.8.7 1.2 1.8.8 2.2.6.1-.5.3-.8.5-1-2.3-.2-4.7-1.2-4.7-5.2 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 3 1.2.9-.3 1.9-.4 2.8-.4.9 0 1.9.1 2.8.4 2.1-1.5 3-1.2 3-1.2.6 1.3.2 2.3.1 2.6.7.8 1.1 1.8 1.1 3 0 4-2.5 5-4.8 5.2.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.5C22 6.5 17.5 2 12 2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/musharafhussain1/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10 text-blue-700 rounded-full hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5C4 3 3 4 3 5v14c0 1 1 2 2 2h14c1 0 2-1 2-2V5c0-1-1-2-2-2zM8 19H5v-9h3v9zm-1.5-10.5c-.8 0-1.5-.7-1.5-1.5S6 6 6.5 6s1.5.7 1.5 1.5S7.8 8.5 7 8.5zm13 10.5h-3v-4.5c0-1-.5-1.5-1.5-1.5s-1.5.5-1.5 1.5V19h-3v-9h3v1.2c.5-.7 1.3-1.2 2.3-1.2 2.2 0 3.7 1.6 3.7 4v5z" />
              </svg>
            </a>
          
          </ul>

          {/* Mobile Menu */}
          <ul className={`md:hidden  absolute left-32 font-bold text-  right-0 z-50 top-14 rounded-lg gap-2 bg-white text-black ${isOpen ? 'flex' : 'hidden '} flex-col p-4`}>
            <li onClick={handleMenuItemClick} className='hover:text-red-600  p-2 rounded flex items-center justify-around duration-200'>
              <Link to="about" smooth={true} duration={500} onClick={handleMenuItemClick}>About </Link>
              <p><FcAbout /></p>
            </li>
            <hr />
            <li onClick={handleMenuItemClick} className='hover:text-red-600  p-2 rounded duration-200 flex items-center justify-around'>
              <Link to="services" smooth={true} duration={500} onClick={handleMenuItemClick} className=''>Services </Link>
              <p><SiHyperskill className=' text-fuchsia-400' /></p>
            </li>
            <hr />
            <li onClick={handleMenuItemClick} className='hover:text-red-600  p-2 rounded duration-200 flex items-center justify-around'>
              <Link to="project" smooth={true} duration={500} onClick={handleMenuItemClick}>Projects</Link>
              <p><VscProject  className=' text-rose-400'/></p>
            </li>
            <hr />
            <li onClick={handleMenuItemClick} className='hover:text-red-600  p-2 rounded duration-200 flex items-center justify-around'>
              <Link to="contact" smooth={true} duration={500} onClick={handleMenuItemClick}>Contact</Link>
              <p><IoMdContact size={20} className=' text-indigo-500'/></p>
            </li>
            <hr />
            
            <a href="https://github.com/musharafgujjar7711/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10 text-gray-400 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.5.1.6-.2.6-.5V19c-2.8.6-3.4-1.4-3.4-1.4-.4-1-.9-1.2-.9-1.2-.7-.5 0-.5.1-.5.8 0 1.3.8 1.3.8.7 1.2 1.8.8 2.2.6.1-.5.3-.8.5-1-2.3-.2-4.7-1.2-4.7-5.2 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 3 1.2.9-.3 1.9-.4 2.8-.4.9 0 1.9.1 2.8.4 2.1-1.5 3-1.2 3-1.2.6 1.3.2 2.3.1 2.6.7.8 1.1 1.8 1.1 3 0 4-2.5 5-4.8 5.2.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.5C22 6.5 17.5 2 12 2z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/musharafhussain1/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10 text-blue-700 rounded-full hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5C4 3 3 4 3 5v14c0 1 1 2 2 2h14c1 0 2-1 2-2V5c0-1-1-2-2-2zM8 19H5v-9h3v9zm-1.5-10.5c-.8 0-1.5-.7-1.5-1.5S6 6 6.5 6s1.5.7 1.5 1.5S7.8 8.5 7 8.5zm13 10.5h-3v-4.5c0-1-.5-1.5-1.5-1.5s-1.5.5-1.5 1.5V19h-3v-9h3v1.2c.5-.7 1.3-1.2 2.3-1.2 2.2 0 3.7 1.6 3.7 4v5z" />
              </svg>
            </a>
         
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

