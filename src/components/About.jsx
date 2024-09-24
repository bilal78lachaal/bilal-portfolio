import React from "react";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-start mt-14 px-4 md:px-8 lg:px-16">
      <img
        className="w-28 md:w-52 lg:w-64 mb-6 md:mb-0 md:mr-6 lg:mr-12 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 "
        src="../images/abut.png"
        alt="About Me"
      />
      <div className="text-white font-bold md:w-3/4 bg-black p-6 rounded-lg shadow-lg md:bg-transparent">
        <h1 className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-300 to-slate-700 bg-clip-text text-transparent font-extrabold mb-4">
          About Me
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-slate-300 leading-relaxed text-justify">
          I'm <span className="font-bold text-blue-400">Bilal</span>, a
          full-stack web developer passionate about creating elegant and
          intuitive user experiences. I specialize in working with{" "}
          <span className="font-bold text-yellow-400">React</span> for front-end
          development and{" "}
          <span className="font-bold text-yellow-400">Node.js</span> and{" "}
          <span className="font-bold text-yellow-400">Laravel</span> for
          back-end solutions. I have extensive experience with tools like
          <span className="font-bold text-blue-400"> Git</span>,{" "}
          <span className="font-bold text-blue-400">JavaScript</span>,{" "}
          <span className="font-bold text-blue-400">HTML</span>,{" "}
          <span className="font-bold text-blue-400">CSS</span>,{" "}
          <span className="font-bold text-blue-400">PHP</span>, and{" "}
          <span className="font-bold text-blue-400">Tailwind CSS</span>. I enjoy
          collaborating with other developers to create innovative and effective
          solutions. I believe that continuous learning and adaptability are key
          to success in this dynamic field, and I'm always striving to deliver
          the best user experience possible.
        </p>
      </div>
    </div>
  );
}

export default About;
