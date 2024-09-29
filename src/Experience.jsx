import React from 'react';
import { DiHtml5, DiJavascript } from "react-icons/di";
import { GrReactjs } from 'react-icons/gr';
import { IoLogoCss3 } from 'react-icons/io';

function Experience() {
    const myExperience = () => [
        {
          id: 1,
          name: "React.js",
          des: "I have 1 year of experience in React.js. Designed and developed reusable components using React, promoting code reuse and modular architecture across applications. Collaborated in a team environment using Git for version control, managing branches, pull requests, and code reviews effectively.",
          icon: <GrReactjs size={60} />
        },
        {
          id: 2,
          name: "JavaScript",
          des: "I have 2 years of experience in JavaScript. Integrated RESTful APIs to fetch and manipulate data, providing dynamic content updates without reloading the page. Implemented responsive design using JavaScript to ensure cross-browser compatibility.",
          icon: <DiJavascript size={60} />
        },
        {
          id: 3,
          name: "HTML5",
          des: "I have 3 years of experience in HTML5. Utilized semantic HTML5 elements (like <header>, <footer>, <article>, and <section>) to improve accessibility and SEO.",
          icon: <DiHtml5 size={60} />
        },
        {
          id: 4,
          name: "CSS3",
          des: "I have 2 years of experience in CSS3. Developed responsive layouts using CSS Flexbox and Grid, ensuring optimal viewing experiences across various devices and screen sizes.",
          icon: <IoLogoCss3 size={60} />
        },
    ];

    return (
        <div className='p-14 flex flex-col w-full md:items-center md:justify-center'>
            <h1 className='capitalize font-bold text-3xl text-blue-500 mb-8'>Experience</h1>
            <div className='flex flex-col md:flex-col items-start md:items-center'>
                {myExperience().map((item) => (
                    <div key={item.id} className='flex items-center gap-4 mt-4 w-full md:w-auto flex-col md:flex md:items-center'>
                        <div className='flex items-center flex-col '>
                            {item.icon}
                            <h1 className='font-bold text-yellow-200 capitalize '>{item.name}</h1>
                        </div>
                        <p className='capitalize font-medium text-xl flex flex-col w-full md:w-[800px] p-1 rounded-lg bg-gradient-to-r from-indigo-400'>
                            {item.des}
                        </p>
                    </div>
                ))}
            </div>
            
        </div>
        
    );
}

export default Experience;
