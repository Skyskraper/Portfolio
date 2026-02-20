import React from "react";
import boy from "../../assets/Me.png";
import back from "../../assets/Gradient.png";

const Banner = () => {
  return (
    <section className="relative w-full bg-[#0F071B] py-24 overflow-hidden">

      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center max-w-6xl mx-auto">

          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] animate-[float_5s_ease-in-out_infinite]">

              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-40"></div>

              <img
                src={back}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover rounded-full"
              />
              <img
                src={boy}
                alt="Abhimanyu"
                className="relative z-10 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="text-center lg:text-left">

            <h3 className="text-lg sm:text-xl text-gray-300 mb-3">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
                Abhimanyu Kharwar
              </span>
            </h3>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Full Stack Engineer
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Building Scalable Digital Systems
              </span>
            </h1>

            <p className="text-gray-400 text-base lg:text-lg max-w-xl mb-8">
              I design and develop high-performance web applications with strong
              fundamentals in DSA, system design, and modern tech stacks.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 transition duration-300">
                View Projects
              </button>

              <button className="px-8 py-3 border border-purple-500 text-purple-400 rounded-full hover:bg-purple-600 hover:text-white transition duration-300">
                Download Resume
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
