import { useInView } from "framer-motion";
import { useState } from "react";
import { useEffect, useRef } from "react";



const About = () => {
  const animatedRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("css");
          } else {
            entry.target.classList.remove("css");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  const animatedRef2 = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("html");
          } else {
            entry.target.classList.remove("html");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animatedRef2.current) {
      observer.observe(animatedRef2.current);
    }

    return () => {
      if (animatedRef2.current) {
        observer.unobserve(animatedRef2.current);
      }
    };
  }, []);

  const animatedRef1 = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("java");
          } else {
            entry.target.classList.remove("java");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animatedRef1.current) {
      observer.observe(animatedRef1.current);
    }

    return () => {
      if (animatedRef1.current) {
        observer.unobserve(animatedRef1.current);
      }
    };
  }, []);
  const animatedRef3 = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("java");
          } else {
            entry.target.classList.remove("java");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (animatedRef3.current) {
      observer.observe(animatedRef3.current);
    }

    return () => {
      if (animatedRef3.current) {
        observer.unobserve(animatedRef3.current);
      }
    };
  }, []);

  const skillData = [
    { percentage: "90%", label: "Team Work" },
    { percentage: "80%", label: "Creativity" },
    { percentage: "65%", label: "Project Managment" },
    { percentage: "70%", label: "Comiunication" },
  ];


 
  
  return (
    <section id="about" className="min-h-screen custom-cursor container bg-about   text-white  p-6">
      <h2 className="text-4xl font-bold text-head  mb-4 text-center">About Me</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-x-12 gap-y-7">
        <div className="left">
          <h1 className=" text-center font-bold text-head text-4xl">Technical skill </h1>

          <div className=" mb-8 mt-8">
            <div className=" flex justify-between items-center">
              <p>Html</p>
              <p>90%</p>
            </div>
            <div className=" w-full h-6 rounded-full border mt-2 relative">
              <span ref={animatedRef2} className="bg-cyan-600 w-[90%] html transition-all duration-200 h-full absolute left-0 rounded-full"  ></span>
            </div>
          </div>
          <div className="mb-8">
            <div className=" flex justify-between items-center">
              <p>Css</p>
              <p>80%</p>
            </div>
            <div className=" w-full h-6 rounded-full border mt-2 relative">
              <span ref={animatedRef} className="bg-cyan-600 css  w-[80%] h-full absolute left-0 rounded-full"
              ></span>
            </div>
          </div>
          <div className="mb-8">
            <div className=" flex justify-between items-center">
              <p>JavaScript</p>
              <p>72%</p>
            </div>
            <div className=" w-full h-6 rounded-full border mt-2 relative">
              <span ref={animatedRef1} className="bg-cyan-600 w-[72%] java  h-full absolute left-0 rounded-full"
              ></span>
            </div>
          </div>
          <div className="">
            <div className=" flex justify-between items-center">
              <p>React js</p>
              <p>82%</p>
            </div>
            <div className=" w-full h-6 rounded-full border mt-2 relative">
              <span ref={animatedRef3} className="bg-cyan-600 w-[82%] react  h-full absolute left-0 rounded-full"
              ></span>
            </div>
          </div>

        </div>

        <div className="right text-center">
          <h2 className="font-bold text-head text-4xl">professional skill</h2>
          <div className=" grid grid-cols-2 mt-6 ">



          {skillData.map((skill, index) => (
        <div key={index} className="box mt-6 relative">
          <div className="circle w-full h-32 flex justify-center items-center">
            {/* Dashed Circle */}
            <div
              className="custom-transform w-32 h-32 rounded-full border-4 border-dashed border-cyan-600 flex justify-center items-center relative overflow-hidden"
              style={{ "--i": index + 1 }} 
            >
              <div
                className="absolute inset-0 rounded-full border-4 border-cyan-600 custom-transform"
                style={{
                  animation: `dashAnimation 2s ease-in-out forwards`,
                  animationDelay: `${index * 1}s`, // Delay for each circle
                }}
              ></div>
              <span className="text-white text-lg font-bold z-10">
                {skill.percentage}
              </span>
            </div>
          </div>
          <div className="text text-center font-bold mt-4">
            <p>{skill.label}</p>
          </div>
        </div>
      ))}
          </div>
        </div>
      </div>
   
    </section>
  );
};

export default About;


//   <div className="max-w-3xl text-center">
//   <h2 className="text-4xl font-bold text-gray-300 mb-4">About Me</h2>
//   <p className="text-lg text-gray-400 md:text-2xl mb-6">
//     I'm a passionate front-end developer with experience in creating responsive, interactive web applications.
//     Skilled in modern JavaScript frameworks and libraries, I bring ideas to life through clean, efficient, and
//     maintainable code.
//   </p>
//   <div className="flex flex-wrap justify-center gap-4 mb-6">
//     <span className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">React.js</span>
//     <span className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md">Tailwind CSS</span>
//     <span className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md">Redux</span>
//     <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md">JavaScript</span>
//     <span className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">HTML</span>
//     <span className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">CSS</span>
//   </div>
//   <p className="text-gray-600">
//     I enjoy solving complex problems and optimizing web experiences, always keeping the end-user in mind. Whether
//     it's building single-page applications or designing reusable components, I strive to create seamless and
//     enjoyable user interfaces.
//   </p>
// </div>