import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { RxHamburgerMenu } from 'react-icons/rx';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 768) { // Adjust for 'md' breakpoint
      setIsOpen(!isOpen);
    }
  };

  // Close the menu when clicking on a menu item (optional)
  const handleMenuItemClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div className=' p-8 flex justify-between items-center w-full h-28'>
        <h1 className='font-bold text-lg'>MyPortfolio</h1>
        <div onClick={toggleMenu} className='md:hidden'>
          {isOpen ? <CgClose size={30} /> : <RxHamburgerMenu size={30} />}
        </div>
        <div className={`${isOpen ? 'absolute' : 'hidden'}   md:static md:flex md:flex-row flex-col  top-28 left-0 right-0 w-full md:w-auto `}>
          <ul className='flex flex-col bg-gray-500 md:flex-row md:gap-6 capitalize font-bold cursor-pointer p-4 md:p-0'>
            <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>about</li>
            <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>experience</li>
            <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>contact</li>
            <li onClick={handleMenuItemClick} className='hover:bg-gray-400 p-2 rounded duration-200'>projects</li>
          </ul>
        </div> 
      </div>
      <hr />
    </div>
    
  );
}

export default Navbar;
