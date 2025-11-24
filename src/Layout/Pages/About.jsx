import React from 'react';

const About = () => {
  return (
    <section className='bg-[#11071F] lg:px-30  px-10 lg:py-10 py-10  flex items-center justify-center'>
      <div className='container'>
        <div className='grid grid-cols-1'>
          <div className='col-span-1'>

            {/* content */}
            <div className='max-w-3xl w-full mx-auto'>
              <h1 className='text-white lg:text-5xl md:text-5xl text-3xl foont-bold text-left'>
                I'm a Software Engineer.|
              </h1>

              <p className='text-white lg:text-xl md:text-xl text-lg py-2 text-left'>
                Currently I'm a Web Developer intern
              </p>

              <p className='text-white lg:text-lg md:text-lg text-lg font-[400] lg:pt-6 md:pt-6 pt-3 text-left '>
                A self-taught UI/UX designer with hands-on experience in technology
                and personal projects. I design and develop meaningful digital
                products that create a balance between user needs and business goals.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
