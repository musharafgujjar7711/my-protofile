import React from 'react';
import { DiHtml5, DiJavascript } from "react-icons/di";
import { GrReactjs } from 'react-icons/gr';
import { IoLogoCss3 } from 'react-icons/io';
import { motion } from 'framer-motion';

function Experience() {
    const myExperience = () => [
        {
            id: 1,
            name: "React.js",
            des: "I have 1 year of experience in React.js. Designed and developed reusable components using React, promoting code reuse and modular architecture across applications. Collaborated in a team environment using Git for version control, managing branches, pull requests, and code reviews effectively.",
            icon: <GrReactjs size={60} className='text-sky-950' />
        },
        {
            id: 2,
            name: "JavaScript",
            des: "I have 2 years of experience in JavaScript. Integrated RESTful APIs to fetch and manipulate data, providing dynamic content updates without reloading the page. Implemented responsive design using JavaScript to ensure cross-browser compatibility.",
            icon: <DiJavascript size={60} className='text-amber-400' />
        },
        {
            id: 3,
            name: "HTML5",
            des: "I have 3 years of experience in HTML5. Utilized semantic HTML5 elements (like <header>, <footer>, <article>, and <section>) to improve accessibility and SEO.",
            icon: <DiHtml5 size={60} className='bg-red-500' />
        },
        {
            id: 4,
            name: "CSS3",
            des: "I have 2 years of experience in CSS3. Developed responsive layouts using CSS Flexbox and Grid, ensuring optimal viewing experiences across various devices and screen sizes.",
            icon: <IoLogoCss3 size={60} className='text-blue-600' />
        },
    ];

    return (
        <div className='relative'>
            <div className='container bg-gray-700'>
                <div className='container'>
                    <div className='flex flex-col md:items-center md:justify-center '>
                        {/* Animated Heading */}
                        <motion.h1
                            className='capitalize font-bold text-3xl lg:text-5xl mt-8 text-white mb-8'
                            initial={{ opacity: 0, scale: 0.5 }} // Start scaled down
                            animate={{ opacity: 1, scale: 1 }} // Scale to normal
                            transition={{ duration: 0.5 }} // Animation duration
                        >
                            Experience
                        </motion.h1>
                        <div className='flex flex-col items-start md:items-center mb-10 gap-8'>
                            {myExperience().map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    className='flex items-center gap-4 mt-4 w-full md:w-auto flex-col lg:flex-row md:gap-10 md:items-center'
                                    initial={{ opacity: 0, y: 50 }} // Start below the original position
                                    animate={{ opacity: 1, y: 0 }} // Fade in and move to original position
                                    transition={{ duration: 0.5, delay: index * 1 }} // Delay based on index
                                >
                                    <div className='flex items-center flex-col'>
                                        {item.icon}
                                        <h1 className='font-bold text-white capitalize'>{item.name}</h1>
                                    </div>
                                    <p className='capitalize font-medium text-xl text-white leading-6 flex flex-col w-full  text-center lg:text-start p-1 rounded-lg bg-gradient-to-r hover:bg-gray-500'>
                                        {item.des}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

