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
      <div className='container mx-auto md:mt-10'>
        <div className='p-6 flex items-center justify-around'>
          <h1 className='font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl flex-1'>MyPortfolio</h1>
          <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
            {isOpen ? <CgClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>

          {/* Desktop Menu */}
          <ul className='hidden md:flex capitalize font-bold cursor-pointer md:gap-14 md:text-xl'>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 hover:underline p-2 rounded duration-200">
              <Link to="about" smooth={true} duration={500}>About</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 hover:underline p-2 rounded duration-200">
              <Link to="services" smooth={true} duration={500}>Services</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 hover:underline p-2 rounded duration-200">
              <Link to="project" smooth={true} duration={500}>Project</Link>
            </li>
            <li onClick={handleMenuItemClick} className="hover:text-red-400 brightness-110 hover:underline p-2 rounded duration-200">
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          <ul className={`md:hidden absolute left-32 font-bold  right-0 z-50 top-14 rounded-lg gap-2 bg-white text-black ${isOpen ? 'flex' : 'hidden'} flex-col p-4`}>
            <li onClick={handleMenuItemClick} className='hover:text-red-600  p-2 rounded flex items-center justify-around duration-200'>
              <Link to="about" smooth={true} duration={500} onClick={handleMenuItemClick}>About </Link>
              <p><FcAbout /></p>
            </li>
            <hr />
            <li onClick={handleMenuItemClick} className='hover:text-red-600  p-2 rounded duration-200 flex items-center justify-around'>
              <Link to="services" smooth={true} duration={500} onClick={handleMenuItemClick}>Services </Link>
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
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

