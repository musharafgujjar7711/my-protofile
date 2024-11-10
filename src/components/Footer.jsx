import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h2 className="text-2xl font-bold text-white">Musharaf Hussain</h2>
          <p className="text-gray-400 text-center md:text-left">
            Front-end Developer specializing in building interactive, user-friendly web applications.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-1">
            <li className="transition hover:text-white hover:translate-x-1 duration-200 ease-in-out">
              <a href="#home">Home</a>
            </li>
            <li className="transition hover:text-white hover:translate-x-1 duration-200 ease-in-out">
              <a href="#about">About</a>
            </li>
            <li className="transition hover:text-white hover:translate-x-1 duration-200 ease-in-out">
              <a href="#projects">Projects</a>
            </li>
            <li className="transition hover:text-white hover:translate-x-1 duration-200 ease-in-out">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition duration-300 transform hover:-translate-y-1"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-400 transition duration-300 transform hover:-translate-y-1"
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedinIn className="text-white" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1"
          >
            <FaGithub className="text-white" />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Musharaf Hussain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
