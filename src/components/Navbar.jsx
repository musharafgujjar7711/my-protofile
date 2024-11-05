import React, { useState } from 'react';
import 'animate.css';
import { CgClose } from 'react-icons/cg';
import { FcAbout } from 'react-icons/fc';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SiHyperskill } from 'react-icons/si';
import { Link } from 'react-scroll';
import { VscProject } from 'react-icons/vsc';
import { IoMdContact } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

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
    <div className="relative animate__animated animate__fadeInDown">
      <div className='container mx-auto md:mt-8 bg-head text-black shadow-2xl border-t border-red-900 border-4 '>
        <div className='p-6 flex items-center justify-around'>
          <h1 className='text-xl md:text-2xl lg:text-4xl md:font-bold font-bold lg:font-extrabold flex-1'>
            Musharaf TechCraft
          </h1>
          <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
            {isOpen ? <CgClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex capitalize font-bold z-50 custom-cursor2 md:gap-4 lg:gap-14 lg:text-3xl md:text-lg '>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 nav-item p-2 rounded duration-200">
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 nav-item p-2 rounded duration-200">
              <Link to="services" smooth={true} duration={500}>Services</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 nav-item p-2 rounded duration-200">
              <Link to="project" smooth={true} duration={500}>Project</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 nav-item p-2 rounded duration-200">
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>

            {/* GitHub and LinkedIn Links */}
            <a href="https://github.com/musharafgujjar7711/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10  text-gray-800 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
               <BsGithub/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/musharafhussain1/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10 text-blue-700 rounded-full hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <FaLinkedin/>
              </svg>
            </a>
          </ul>

          {/* Mobile Menu */}
          <ul className={`md:hidden absolute left-32 font-bold text- right-0 z-50 top-14 rounded-lg gap-2 bg-white text-black ${isOpen ? 'flex' : 'hidden'} flex-col p-4`}>
            <li onClick={handleMenuItemClick} className='hover:text-red-600 p-2 rounded flex items-center justify-around duration-200'>
              <Link to="about" smooth={true} duration={500}>About</Link>
              <p><FcAbout /></p>
            </li>
            <hr />
            <li onClick={handleMenuItemClick} className='hover:text-red-600 p-2 rounded duration-200 flex items-center justify-around'>
              <Link to="services" smooth={true} duration={500}>Services</Link>
              <p><SiHyperskill className='text-fuchsia-400' /></p>
            </li>
            <hr />
            <li onClick={handleMenuItemClick} className='hover:text-red-600 p-2 rounded duration-200 flex items-center justify-around'>
              <Link to="project" smooth={true} duration={500}>Projects</Link>
              <p><VscProject className='text-rose-400' /></p>
            </li>
            <hr />
            <li onClick={handleMenuItemClick} className='hover:text-red-600 p-2 rounded duration-200 flex items-center justify-around'>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
              <p><IoMdContact size={20} className='text-indigo-500' /></p>
            </li>
            <hr />

            {/* GitHub and LinkedIn Links */}
            <a href="https://github.com/musharafgujjar7711/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10 text-gray-400 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub SVG Path */}
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/musharafhussain1/" target="_blank" rel="noopener noreferrer">
              <svg className="h-10 w-10 text-blue-700 rounded-full hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn SVG Path */}
              </svg>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

