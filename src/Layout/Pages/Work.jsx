import React from "react";
import skill1 from "../../assets/Group 2.png";
import skill2 from "../../assets/Group 1935.png";
import Cup from "../../assets/Group 1938.png";
import Drop from "../../assets/Group 1.png";

const Work = () => {
  const experiences = [
    {
      title: "Full Stack Development",
      desc: "Built responsive web applications using React, Tailwind CSS, Node.js and Express. Implemented authentication, REST APIs and deployed projects on Vercel.",
      img: skill1,
    },
    {
      title: "Backend & API Development",
      desc: "Designed and tested RESTful APIs using Node.js and Express. Worked with Postman for API testing and handled database integration.",
      img: skill2,
    },
    {
      title: "Data Structures & Algorithms",
      desc: "Solved 1000+ problems on LeetCode. Strong understanding of arrays, trees, graphs, dynamic programming and problem-solving strategies.",
      img: Cup,
    },
    {
      title: "Machine Learning Basics",
      desc: "Exploring Machine Learning fundamentals using Python. Learning supervised models, data preprocessing and core ML concepts.",
      img: Drop,
    },
  ];

  return (
    <section className="bg-[#0F071B] py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
          Technical{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h1>


        <div className="grid md:grid-cols-2 gap-10">

          {experiences.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A0B2E] border border-purple-600 rounded-xl p-6 hover:scale-105 transition duration-300"
            >
              <div className="flex items-start gap-5">
                <img src={item.img} alt="icon" className="w-14 h-14" />
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">
                    {item.title}
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Work;
