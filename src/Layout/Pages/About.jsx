import React from "react";

const About = () => {
  const skills = [
    "DSA",
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "Python",
    "Machine Learning (Basics)",
    "Figma",
    "Vercel",
    "Postman"
  ];

  const certifications = [
    "Data Structures & Algorithms",
    "React Development",
    "Machine Learning Basics",
    "Python Programming",
    "Postman API Fundamentals"
  ];

  return (
    <section className="relative bg-[#0F071B] px-6 lg:px-20 py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600 blur-[150px] opacity-20 rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Me
          </span>
        </h1>

        {/* Intro */}
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          I am a Computer Science and Engineering student with strong foundations
          in Data Structures & Algorithms and full-stack web development.
          I enjoy building scalable, user-focused applications using modern
          technologies.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed mb-12">
          I have solved <span className="text-purple-400 font-semibold">100+</span> DSA problems
          and am currently exploring Machine Learning and AI fundamentals.
          My goal is to combine strong engineering skills with intelligent systems.
        </p>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-purple-400 mb-6">
            Skills
          </h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-[#1A0B2E] border border-purple-500 text-white rounded-full text-sm hover:bg-purple-600 hover:scale-105 transition duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Slider */}
        <div>
          <h2 className="text-2xl font-semibold text-purple-400 mb-6">
            Certifications
          </h2>

          <div className="overflow-hidden relative">
            <div className="flex gap-6 animate-scroll">

              {[...certifications, ...certifications].map((cert, index) => (
                <div
                  key={index}
                  className="min-w-[280px] bg-[#1A0B2E] border border-purple-500 p-6 rounded-xl text-white"
                >
                  <p className="font-medium">{cert}</p>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
