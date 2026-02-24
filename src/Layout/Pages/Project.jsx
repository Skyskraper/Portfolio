import React from "react";
import background from "../../assets/Screenshot 2022-09-30 at 10.49 3.png";
import Project1 from "../../assets/Screenshot 2025-10-31 185730.png";
import Food from "../../assets/Screenshot 2025-11-01 191750.png";

const ProjectCard = ({ title, description, image, reverse, liveLink }) => {
  return (
    <div
      className={`grid md:grid-cols-2 gap-16 items-center relative`}
    >
      {/* TEXT */}
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <p className="text-sm font-semibold text-[#A855F7] tracking-widest uppercase">
          Featured Project
        </p>

        <h2 className="text-white text-4xl font-bold mt-3 leading-tight">
          {title}
        </h2>

        <div className="mt-8 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-purple-900/40 transition duration-500">
          <p className="text-gray-300 leading-relaxed text-[15px]">
            {description}
          </p>

          {/* Buttons */}
          <div className="mt-6 flex gap-4 flex-wrap">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:scale-105 transition duration-300"
              >
                Live Demo
              </a>
            )}

            <button className="px-6 py-2 rounded-lg border border-white/20 text-white hover:bg-white/10 transition duration-300">
              View Code
            </button>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className={`relative flex justify-center ${reverse ? "md:order-1" : ""}`}>
        <div className="absolute w-72 h-72 bg-purple-600/30 blur-[120px] rounded-full"></div>

        <img
          src={background}
          alt="frame"
          className="relative rounded-2xl w-full max-w-lg opacity-60"
        />

        <img
          src={image}
          alt="project"
          className="absolute top-8 left-8 w-[85%] rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <section className="bg-[#0F071A] py-28 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-800/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-700/20 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">

        {/* Portfolio Project */}
        <ProjectCard
          title="Portfolio Website"
          description="A modern developer portfolio built with performance, animations, and clean UI principles. Designed to showcase projects with clarity while maintaining premium visual aesthetics and seamless responsiveness."
          image={Project1}
          liveLink="https://portfolio-rho-wheat-43.vercel.app/"
        />

        {/* Food Delivery Project */}
        <ProjectCard
          title="Food Delivery Platform"
          description="A fully responsive food delivery web app allowing users to browse restaurants, manage carts, and place orders seamlessly. Built with intuitive UX, fast navigation, and production-ready scalable architecture."
          image={Food}
          reverse
        />

      </div>
    </section>
  );
};

export default Project;