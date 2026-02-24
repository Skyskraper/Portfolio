import React from "react";
import Center from "../../assets/Group 1897.png";
import Background from "../../assets/Ellipse 20.png";
import Eclipse from "../../assets/Group 1907 (1).png";

import HTML from "../../assets/html-CCTS3q0u.png";
import CSS from "../../assets/Rectangle 7.png";
import Bootstrap from "../../assets/bootstrap.png";
import JavaScript from "../../assets/java-script-DnnVdcwd.png";
import ReactIcon from "../../assets/react.svg";
import Figma from "../../assets/Rectangle 1.png";
import CPP from "../../assets/icons8-c++-48.png";
import Node from "../../assets/Rectangle 4.png";
import Mongo from "../../assets/Rectangle 13.png";
import AI from "../../assets/Rectangle 11.png";
import Machine from "../../assets/coding.png";
import Python from "../../assets/python.png";

const skills = [
  HTML,
  CSS,
  Bootstrap,
  JavaScript,
  ReactIcon,
  Figma,
  CPP,
  Node,
  Mongo,
  AI,
  Machine,
  Python,
];

const Skills = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f051d] via-[#140826] to-[#0f051d] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-700/20 blur-[180px] rounded-full top-20 left-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-white text-center max-w-3xl mx-auto">
          <h1 className="font-medium text-xl sm:text-2xl lg:text-3xl">
            I'm currently looking to join a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              cross-functional
            </span>{" "}
            team
          </h1>

          <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-300">
            that values improving people's lives through accessible design
          </p>
        </div>

        {/* Orbit Section */}
        <div className="relative flex flex-col items-center justify-center mt-24">

          {/* Floating Skill Cluster */}
          <div className="relative flex flex-wrap justify-center gap-6 max-w-[500px] mx-auto mt-16">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="w-14 h-14 rounded-2xl 
                      bg-white/5 backdrop-blur-md 
                      border border-white/10
                      flex items-center justify-center
                      transition-all duration-300
                      hover:scale-110 hover:bg-purple-600/30
                      hover:border-purple-400/40
                      shadow-lg shadow-purple-900/20">
                  <img src={skill} alt="skill" className="h-6 opacity-80 group-hover:opacity-100" />
                </div>
              </div>
            ))}

          </div>

          {/* Center Circle */}
          <div className="relative w-[180px] sm:w-[220px] h-[180px] sm:h-[220px] flex items-center justify-center mt-10">

            {/* Rotating Ring */}
            <img
              src={Eclipse}
              alt="ring"
              className="absolute w-full h-full object-contain animate-spin-slow"
            />

            {/* Gradient Glow Circle */}
            <div className="absolute w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] 
                            rounded-full bg-gradient-to-br 
                            from-purple-600 to-indigo-700 
                            blur-md opacity-40"></div>

            {/* Background */}
            <img
              src={Background}
              alt="background"
              className="absolute w-[150px] sm:w-[180px] object-contain"
            />

            {/* Center Icon */}
            <img
              src={Center}
              alt="center"
              className="relative z-20 w-14 sm:w-16"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;