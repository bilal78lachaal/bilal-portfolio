import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
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
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div>
      <div className=" mt-4 py-6   bg-black relative rounded-lg w-full max-w-md md:max-w-6xl mx-auto overflow-hidden before:absolute before:w-32 before:h-24 before:content-[''] before:right-0 before:bg-slate-200 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-slate-500 after:right-12 after:top-3 after:rounded-full after:blur-lg">
        <h2 className=" mb-4 text-3xl mr-10 font-bold text-white text-center">
          Contact Me
        </h2>
        <div className=" lg:mt-12 flex flex-wrap items-center justify-center space-x-2 md:space-x-4 mb-10">
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
            <label className="block text-blue-500 font-bold mb-2">Email</label>
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
  );
}

export default Contact;
