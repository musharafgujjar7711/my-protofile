const About = () => {
    return (
      <section id="about" className="min-h-screen container flex flex-col items-center justify-center bg-gray-100 p-6">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate front-end developer with experience in creating responsive, interactive web applications.
            Skilled in modern JavaScript frameworks and libraries, I bring ideas to life through clean, efficient, and
            maintainable code.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">React.js</span>
            <span className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-md">Tailwind CSS</span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-lg shadow-md">Redux</span>
            <span className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md">JavaScript</span>
            <span className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md">HTML</span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md">CSS</span>
          </div>
          <p className="text-gray-600">
            I enjoy solving complex problems and optimizing web experiences, always keeping the end-user in mind. Whether
            it's building single-page applications or designing reusable components, I strive to create seamless and
            enjoyable user interfaces.
          </p>
        </div>
      </section>
    );
  };
  
  export default About;
  