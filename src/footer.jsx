import {
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Footer() {
  return (
    <div className=" text-slate-200">
      <footer className="bg-black py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="text-white">
            {/* Social Media Links */}
            <div className="flex justify-center space-x-4 mb-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-600 transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
            {/* Copyright Text */}
            <p className="text-gray-400">
              © {new Date().getFullYear()} Bilal Lachaal. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
