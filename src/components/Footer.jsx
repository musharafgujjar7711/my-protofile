import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a href="#hero">
          <h2 className="text-2xl font-bold text-white custom-cursor2">Musharaf Dev</h2>
          </a>
          <p className="text-gray-400 text-center md:text-left">
            Front-end Developer specializing in building interactive, user-friendly web applications.
          </p>
        </div>

       
        {/* Social Media Links */}
        <div className="flex items-center space-x-4 ">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full custom-cursor2 bg-gray-800 hover:bg-blue-600 transition duration-300 transform hover:-translate-y-1"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full custom-cursor2 bg-gray-800 hover:bg-blue-400 transition duration-300 transform hover:-translate-y-1"
          >
            <FaTwitter className="text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/musharafhussain1/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full custom-cursor2 bg-gray-800 hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1"
          >
            <FaLinkedinIn className="text-white" />
          </a>
          <a
            href="https://github.com/musharafgujjar7711/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full custom-cursor2 bg-gray-800 hover:bg-gray-700 transition duration-300 transform hover:-translate-y-1"
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
