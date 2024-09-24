import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects";
function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_bilal", "template_5pwgssm", formData, "kErNRYloygUv0_6tL")
      .then(
        (result) => {
          alert("Message Sent Successfully");
        },
        (error) => {
          alert("Failed   to send message, please try again.");
        }
      );
  };

  return (
    <div>
      {/* /////////////////////////////////home//////////////////////////////////////// */}
      <div className="flex flex-col md:flex-row items-center mt-10 px-4 md:px-8 lg:px-16">
        <div className="text-center md:text-left text-white font-bold mb-6 md:mb-0 md:w-1/2">
          <h1 className="bg-gradient-to-r from-gray-200 to-slate-700 bg-clip-text text-transparent text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
            Hi!, I'm Bilal
          </h1>
          <h2 className="mt-2 text-lg md:text-2xl bg-gradient-to-r from-gray-100 to-slate-300 bg-clip-text text-transparent font-semibold">
            Full-Stack Developer from{" "}
            <span className=" text-blue-500">Morocco.</span>
          </h2>
          <h3 className="mt-4 text-base md:text-lg lg:text-lg text-gray-300  ">
            I create websites with ease, ensuring smooth and effective results.
            I'm dedicated to transforming your vision into reality and
            delivering unique, engaging digital experiences.
          </h3>
        </div>
        <div className="flex justify-center md:justify-end mt-6 md:mt-0 md:w-1/2">
          <img
            className="w-40 sm:w-64 md:w-80 lg:w-96 opacity-75 hover:opacity-90 transition-opacity duration-300 rounded-lg shadow-lg"
            src="./images/panl.png"
            alt="Profile"
          />
        </div>
      </div>
      {/* ////////////////////////////////contact////////////////////////////////// */}

      <div className=" lg:mt-12 flex flex-wrap items-center justify-center space-x-2 md:space-x-4 mt-5">
        <a
          href="mailto:bilal78lachaal@gmail.com"
          className="flex items-center text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 text-center transition transform hover:scale-105 scale-75 md:scale-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/bilal-lachaal"
          className="flex items-center text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 text-center transition transform hover:scale-105 scale-75 md:scale-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" /> LinkedIn
        </a>
        <a
          href="https://github.com/bilal78lachaal"
          className="flex items-center text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-300 dark:focus:ring-gray-800 shadow-lg shadow-gray-800/50 dark:shadow-lg dark:shadow-gray-800/80 font-medium rounded-full text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 text-center transition transform hover:scale-105 scale-75 md:scale-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
        </a>
        <a
          href="https://www.instagram.com/bilal.lachaal?igsh=MTI3YWRsdGgzeTIwNA%3D%3D&utm_source=qr"
          className="flex items-center text-white bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-full text-xs md:text-sm px-4 py-2 md:px-5 md:py-2.5 text-center transition transform hover:scale-105 scale-75 md:scale-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="mr-2" /> Instagram
        </a>
      </div>

      {/* /////////////////////////////about////////////////////////////////// */}

      <div className="flex flex-col md:flex-row items-start mt-12 px-4 md:px-8 lg:px-16">
        <img
          className="w-28 md:w-52 lg:w-64 mb-6 md:mb-0 md:mr-6 lg:mr-12 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hidden md:block"
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
            <span className="font-bold text-yellow-400">React</span> for
            front-end development and{" "}
            <span className="font-bold text-yellow-400">Node.js</span> and{" "}
            <span className="font-bold text-yellow-400">Laravel</span> for
            back-end solutions. I have extensive experience with tools like
            <span className="font-bold text-blue-400"> Git</span>,{" "}
            <span className="font-bold text-blue-400">JavaScript</span>,{" "}
            <span className="font-bold text-blue-400">HTML</span>,{" "}
            <span className="font-bold text-blue-400">CSS</span>,{" "}
            <span className="font-bold text-blue-400">PHP</span>, and{" "}
            <span className="font-bold text-blue-400">Tailwind CSS</span>. I
            enjoy collaborating with other developers to create innovative and
            effective solutions. I believe that continuous learning and
            adaptability are key to success in this dynamic field, and I'm
            always striving to deliver the best user experience possible.
          </p>
        </div>
      </div>
      {/* //////////////////////////////Technologies//////////////////////////////////////// */}
      <div className="  text-center mt-40">
        <h2 className="text-gray-400 text-2xl font-bold mb-5">
          Web Technologies
        </h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6 mb-20">
          <div className="text-center">
            <img
              src="/images/html (2).png"
              alt="HTML"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">HTML</p>
          </div>
          <div className="text-center">
            <img
              src="/images/css.png"
              alt="CSS"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">CSS</p>
          </div>
          <div className="text-center">
            <img
              src="/images/bootstrap-framework.png"
              alt="Bootstrap"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">Bootstrap</p>
          </div>
          <div className="text-center">
            <img
              src="/images/tailwind-css.png"
              alt="Tailwind"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">Tailwind</p>
          </div>
          <div className="text-center">
            <img
              src="/images/javascript.png"
              alt="JavaScript"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">JavaScript</p>
          </div>
          <div className="text-center">
            <img
              src="/images/react.png"
              alt="React"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">React</p>
          </div>
          <div className="text-center">
            <img
              src="/images/sql.png"
              alt="SQL"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">SQL</p>
          </div>
          <div className="text-center">
            <img
              src="/images/laravel-framework.png"
              alt="Laravel"
              className="w-12 h-12 md:w-12 md:h-12 lg:w-14 lg:h-14 transform transition-transform duration-500 hover:scale-125 hover:rotate-12"
            />
            <p className="text-gray-400 mt-2">Laravel</p>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////skills//////////////////////////////////////////////// */}
      <section className="  py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-gray-200 to-slate-700 bg-clip-text text-transparent mb-8 border-b-4 border-gray-400 inline-block pb-2">
            My skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Front-end Skills */}
            <div className="bg-[#131313] p-6 rounded-lg shadow-lg ">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                Front-end
              </h3>
              <ul className="text-gray-300 space-y-2 ">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            {/* Back-end Skills */}
            <div className="bg-[#131313] p-6 rounded-lg shadow-lg ">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                Back-end
              </h3>
              <ul className="text-gray-300 space-y-2">
                <li>PHP</li>
                <li>Laravel</li>
                <li>Node.js/Express</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>REST APIs/JSON</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ///////////////////////////////////contact///////////////////////////////////////// */}

      <div>
        <div className=" mt-16 py-12   bg-black relative rounded-lg w-full max-w-md md:max-w-6xl mx-auto overflow-hidden before:absolute before:w-32 before:h-24 before:content-[''] before:right-0 before:bg-slate-200 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-slate-500 after:right-12 after:top-3 after:rounded-full after:blur-lg">
          <h2 className=" mb-4 text-3xl mr-10 font-bold text-white text-center">
            Contact Me{" "}
          </h2>

          <form
            onSubmit={sendEmail}
            className=" md:space-y-0 md:space-x-6 flex  flex-wrap justify-center  "
          >
            <div>
              <label className="block text-blue-500 font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className=" bg-zinc-900 border border-neutral-500 text-neutral-200 text-lg rounded-lg block w-72 p-2.5"
              />
            </div>
            <div>
              <label className="block text-blue-500 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-zinc-900 border border-neutral-500 text-neutral-200 text-lg rounded-lg block w-72 p-2.5"
              />
            </div>
            <div>
              <label className="block text-blue-500 font-bold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className=" bg-zinc-900 border border-neutral-500 text-neutral-200 text-sm  rounded-lg block w-72 p-2.5"
              />
            </div>

            <div class="relative group">
              <div class="relative w-64 mt-4 lg:mt-8  h-14 opacity-90 overflow-hidden rounded-xl bg-black z-10">
                <div class="absolute z-10 -translate-x-44 group-hover:translate-x-[30rem] ease-in transistion-all duration-700 h-full w-44 bg-gradient-to-r from-gray-500 to-white/10 opacity-30 -skew-x-12"></div>

                <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-2xl inset-0.5 bg-black">
                  <button
                    name="text"
                    type="submit"
                    class="input font-semibold text-lg h-full opacity-90 w-full px-16 py-3 rounded-xl bg-zinc-900"
                  >
                    Send
                  </button>
                </div>
                <div class="absolute duration-1000 group-hover:animate-spin w-full h-[100px] bg-gradient-to-r from-blue-600 to-gray-300 blur-[40px]"></div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div>
        <Projects />
      </div>
    </div>
  );
}

export default Home;
