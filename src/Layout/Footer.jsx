import React from "react";
import Finish from "../assets/Group 1897.png";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F071A] pt-20 pb-10 px-6 overflow-hidden">

      {/* Top Glow Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-purple-700/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-6">

        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={Finish}
            alt="logo"
            className="h-16 opacity-90 hover:opacity-100 transition duration-300"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-4">
          
          {/* GitHub */}
          <a
            href="https://github.com/Skyskraper"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/abhimanyu-kharwar-b69a81314/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:scale-110 transition duration-300"
          >
            <FaLinkedinIn />
          </a>

          {/* Twitter  */}
          <a
            href="#"
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:scale-110 transition duration-300"
          >
            <FaTwitter />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm pt-6 border-t border-white/10">
          © {year} Abhimanyu Kharwar. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;