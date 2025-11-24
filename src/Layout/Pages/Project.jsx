import React from 'react';
import background from '../../assets/Screenshot 2022-09-30 at 10.49 3.png'
import Project1 from '../../assets/Screenshot 2025-10-31 185730.png'
import Food from '../../assets/Screenshot 2025-11-01 191750.png'
const Project = () => {
  return (
    <>
      <section className='bg-[#11071F] py-12 px-10'>
        <div className='container'>
          <div className='lg:grid grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-8'>
            <div className='col-span-1'>
              <div className='w-full  '>
                <div className=''>
                  <h1 className='text-[15px] font-[600] text-[#9857D3]'>Featured Project</h1>
                  <h2 className=' text-white lg:text-[30px] md:text-[30px] text-[25px] font-[600]'>Example Project</h2>

                </div>
                <div className='p-6 rounded-xl bg-white/10  border border-white/20 backdrop-blur-md mt-2 mb-4'>
                  <p className='text-white text-[15px] font-[500]  ' >
                    I craft digital experiences that are not only visually compelling but also intuitively functional. By blending strategic thinking with technical expertise, I build products that engage users and drive measurable success for brands and businesses.
                  </p>
                </div>



              </div>
            </div>
            <div className='col-span-1'>
              <div className='w-full'>
                <div className='relative'>
                  <img src={background} alt='image' className=' lg:h-[325px]  h-[292px] realtive rounded-[10px]' />
                  <img src={Project1} alt='image' className='lg:top-[43px] top-[41px] lg:left-[20px] left-[12px] lg:h-[282px] h-[250px]  lg:w-[536px] w-[500px] absolute rounded-[10px]' />

                </div>


              </div>
            </div>

          </div>
          <div className='lg:grid grid-cols-2 md:grid-cols-2 grid-cols-1 py-30'>
            <div className='col-span-1'>
              <div className='w-full'>
                <div className='relative'>
                  <img src={background} alt='image' className=' relative lg:h-[325px] h-[292px]  rounded-[10px]' />
                  <img src={Food} alt='image' className='absolute lg:h-[292px] h-[250px] lg:w-[503px] w-[464px] lg:top-[30px] top-[25px] rounded-[10px]' />
                 </div>

              </div>

            </div>
            <div className='col-span-1'>
              <div className='w-full'>
                <div className=''>
                  <h1 className='text-[15px] font-[600] text-[#9857D3]'>Featured Project</h1>
                  <h2 className=' text-white lg:text-[30px] md:text-[30px] text-[25px] font-[600]'>Example Project</h2>

                </div>


                <div className='p-6 rounded-xl bg-white/10  border border-white/20 backdrop-blur-md mt-5'>
                  <p className='text-white text-[15px] font-[500]  ' >
                    A modern, responsive food delivery website that lets users browse restaurants, view menus, and order meals online.
                    Designed with an intuitive interface for easy navigation, search, and cart management.
                    Focused on delivering a fast, seamless, and visually appealing user experience. </p>
                </div>


              </div>
            </div>


          </div>
        </div>
      </section>

    </>
  );
}

export default Project;
