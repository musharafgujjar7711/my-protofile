import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="mt-2 text-gray-400">
            I’m a passionate Front-End Developer with a strong focus on creating
            responsive, user-friendly web applications. Skilled in React, Tailwind CSS, and modern web development techniques.
          </p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
          <div className="mb-4 sm:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-gray-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <svg className="h-6 w-6 text-gray-400 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.9 9.5.5.1.6-.2.6-.5V19c-2.8.6-3.4-1.4-3.4-1.4-.4-1-.9-1.2-.9-1.2-.7-.5 0-.5.1-.5.8 0 1.3.8 1.3.8.7 1.2 1.8.8 2.2.6.1-.5.3-.8.5-1-2.3-.2-4.7-1.2-4.7-5.2 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.3.1-2.6 0 0 .9-.3 3 1.2.9-.3 1.9-.4 2.8-.4.9 0 1.9.1 2.8.4 2.1-1.5 3-1.2 3-1.2.6 1.3.2 2.3.1 2.6.7.8 1.1 1.8 1.1 3 0 4-2.5 5-4.8 5.2.3.3.6.8.6 1.6v2.4c0 .3.2.6.7.5 4-1.3 6.9-5 6.9-9.5C22 6.5 17.5 2 12 2z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <svg className="h-6 w-6 text-gray-400 hover:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5C4 3 3 4 3 5v14c0 1 1 2 2 2h14c1 0 2-1 2-2V5c0-1-1-2-2-2zM8 19H5v-9h3v9zm-1.5-10.5c-.8 0-1.5-.7-1.5-1.5S6 6 6.5 6s1.5.7 1.5 1.5S7.8 8.5 7 8.5zm13 10.5h-3v-4.5c0-1-.5-1.5-1.5-1.5s-1.5.5-1.5 1.5V19h-3v-9h3v1.2c.5-.7 1.3-1.2 2.3-1.2 2.2 0 3.7 1.6 3.7 4v5z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Front-End Developer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
