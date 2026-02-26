import React, { useRef } from "react";
import boy from "../../assets/Me.png";
import back from "../../assets/Gradient.png";

const Banner = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const bgRef = useRef(null);

  // Mouse 3D tilt
  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / 20;
    const y = (e.clientY - top - height / 2) / 20;

    imageRef.current.style.transform = `
      rotateY(${x}deg)
      rotateX(${-y}deg)
      translateZ(40px)
    `;
    bgRef.current.style.transform = `
      rotateY(${x * 0.5}deg)
      rotateX(${-y * 0.5}deg)
      translateZ(-20px)
      scale(1.05)
    `;
  };

  const resetTransform = () => {
    imageRef.current.style.transform =
      "rotateY(0deg) rotateX(0deg) translateZ(0px)";
    bgRef.current.style.transform =
      "rotateY(0deg) rotateX(0deg) translateZ(0px) scale(1)";
  };

  return (
    <section className="relative w-full bg-[#0F071B] py-24 overflow-hidden">
      {/* Background Glow Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>

      <div className="relative w-full px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* 3D Image Section */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTransform}
            className="flex justify-center items-center"
            style={{ perspective: "1200px" }}
          >
            <div
              className="relative w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px] animate-float"
              style={{ transformStyle: "preserve-3d", transition: "transform 0.3s ease-out" }}
            >
              {/* Background Layer */}
              <img
                ref={bgRef}
                src={back}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover rounded-full transition-transform duration-300"
                style={{ transformStyle: "preserve-3d" }}
              />
              {/* Foreground Image */}
              <img
                ref={imageRef}
                src={boy}
                alt="Abhimanyu"
                className="relative z-10 w-full h-full object-contain transition-transform duration-300"
                style={{ transformStyle: "preserve-3d" }}
              />
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-40"></div>
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

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Banner;