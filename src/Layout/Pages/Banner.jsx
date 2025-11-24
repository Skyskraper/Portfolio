import React from "react";
import boy from "../../assets/Me.png";
import back from "../../assets/Gradient.png";

const Banner = () => {
  return (
    <section className="w-full bg-[#11071F] py-20 flex items-center"> 
      <div className="w-full px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center max-w-6xl lg:mx-auto">

          {/* Image Section */}
          <div className="relative flex justify-center items-center"> 
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px]">
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
          <div className="text-center lg:text-left items-center"> 
            <h3 className="text-lg sm:text-xl lg:text-2xl text-white mb-2">
              Hello! I am {" "}
              <span className="text-[#7127BA] font-semibold">
                Abhimanyu Kharwar
              </span>
            </h3>

            <h2 className="text-xl sm:text-2xl lg:text-3xl text-white mb-2">
              A Developer Who
            </h2>

            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6">
              Judges a book by its {" "}
              <span className="text-[#7127BA]">cover</span> ...
            </h1>

            <p className="text-base lg:text-xl text-white">
              Because if the cover does not impress you, what else can?
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
