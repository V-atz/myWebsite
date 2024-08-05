import React from "react";
import { UilLinkedin, UilGithub, UilInstagram } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Footer Links */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <NavLink to="about" className="mx-2 md:mx-4 text-gray-400 hover:text-white transition duration-300">
            About
          </NavLink>
          <NavLink to="projects" className="mx-2 md:mx-4 text-gray-400 hover:text-white transition duration-300">
            Projects
          </NavLink>
          <NavLink to="contact" className="mx-2 md:mx-4 text-gray-400 hover:text-white transition duration-300">
            Contact
          </NavLink>
        </div>
        {/* Social Media Links */}
        <div className="flex mb-4 md:mb-0">
          <a
            href="https://www.linkedin.com/in/vatsal-tandel-588034202/"
            className="mx-2 md:mx-4 text-gray-400 hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilLinkedin size={24} />
          </a>
          <a
            href="https://github.com/V-atz"
            className="mx-2 md:mx-4 text-gray-400 hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            className="mx-2 md:mx-4 text-gray-400 hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <UilInstagram size={24} />
          </a>
        </div>
        {/* Footer Copy */}
        <p className="text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Vatsal Tandel. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
