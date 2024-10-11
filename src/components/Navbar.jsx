import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FcAbout } from 'react-icons/fc';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SiHyperskill } from 'react-icons/si';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 768) { // Adjust for 'md' breakpoint
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
      <div className='container bg-black text-white'>
        <div className='p-6 flex items-center justify-between relative'>
          <h1 className='font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl flex-1'>MyPortfolio</h1>
          <div onClick={toggleMenu} className='md:hidden cursor-pointer'>
            {isOpen ? <CgClose size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
       

        {/* Desktop Menu */}
        <ul className='hidden md:flex capitalize font-bold cursor-pointer   '>
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>about</li>
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>experience</li>
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>contact</li>
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>projects</li>
        </ul>

        {/* Mobile Menu */}
        <ul className={`md:hidden absolute left-32 right-0 top-14 rounded-lg gap-2  bg-gray-800 ${isOpen ? 'flex' : 'hidden'} flex-col p-4`}>
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded flex items-center justify-around duration-200'>about
            <p><FcAbout/></p>
          </li>
          <hr />
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200 flex items-center justify-around'>experience
            <p><SiHyperskill/></p>
          </li>
          <hr />
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>contact</li>
          <hr />
          <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>projects</li>
          <hr />
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
