import React from 'react'
import skill1 from '../../assets/Group 2.png'
import skill2 from '../../assets/Group 1935.png'
import Cup from '../../assets/Group 1938.png'
import Drop from '../../assets/Group 1.png'

const Work = () => {
  return (
    <>
      <section className='bg-[#11071F] py-12 '>
        <div className='container mx-auto px-4 max-w-6xl'>
          <h1 className='lg:text-3xl md:text-3xl text-2xl text-white font-bold mb-10 text-center'>
            Work Experience
          </h1>

          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1  gap-8 px-5'>
            {/* First Skill */}
            <div className='col-span-1'>
              <div className=' rounded-xl border-t-4 border-[#4F228D] lg:p-5 md:p-5 p-2 '>

                <div className=' flex items-center  gap-5 '>
                  <div className=''>
                    <img src={skill1} alt='star' className='' />
                  </div>
                  <div className=''>
                    <h1 className='text-white  lg:text-[26px] md:text-[26px] text-[20px] font-[600]'>CIB on the Mobile</h1>
                    <p className='text-white text-[12px] font-[500] mb-3'>Take your client onboard seamlessly by our amazing tool  of digital onborad process</p>
                    <button className=' bg-[#2C1250] px-6 py-2 border-1 border-[#693B93] text-white rounded-[15px]'>
                      Learn More
                    </button>


                  </div>


                </div>
              </div>


            </div>

            {/* Second Skill */}
            <div className='col-span-1 '>
              <div className=' rounded-xl border-t-4 border-[#4F228D] p-5'>
                <div className='flex items-center gap-5'>
                  <div>
                    <img src={skill2} alt='Bulb' className=' h-22 ' />
                  </div>
                  <div>
                    <h1 className='text-white lg:text-[26px] md:text-[26px] text-[20px] font-[600]'>
                      CIB on the Mobile
                    </h1>
                    <p className='text-white text-[12px] font-[500] mb-3'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                    <button className=' bg-[#2C1250] px-6 py-2 border-1 border-[#693B93] text-white rounded-[15px] '>
                      Learn More
                    </button>

                  </div>


                </div>
              </div>

            </div>
          </div>

          <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-5 gap-8 px-5'>
            <div className='col-span-1'>
              <div className='rounded-xl border-t-3 border-[#4F228D] p-5'>
                <div className='flex items-center gap-5'>
                  <div>
                    <img src={Cup} alt='image'/>
                  </div>
                  <div>
                    <h1 className='text-white lg:text-[26px] md:text-[26px] text-[20px] font-[600]'>CIB on the Mobile</h1>
                    <p className='text-white text-[12px] font-[500] mb-3'>Take your client onboard seamlessly by our amazing tool of digital onboard process.</p>
                    <button className='bg-[#2C1250] py-2 px-6 text-white rounded-[15px] border-1 border-[#693B93]'>
                      Learn More
                    </button>
                  </div>


                </div>

              </div>

            </div>
            <div className='col-span-1'>
              <div className='rounded-xl border-t-3 border-[#4F228D] p-5'>
                <div className='flex items-center gap-5'>
                  <div>
                    <img src={Drop} alt='image'/>
                  </div>
                  <div>
                    <h1 className='text-white lg:text-[26px] md:text-[26px] text-[20px] font-[600]'>CIB on the Mobile</h1>
                    <p className='text-white text-[12px] font-[500] mb-3'>
                      Take your client onboard seamlessly by our amazing tool of digital onboard process.
                    </p>
                     <button className='bg-[#2C1250] py-2 px-6 text-white rounded-[15px] border-1 border-[#693B93]'>
                      Learn More
                    </button>

                  </div>

                </div>

              </div>


            </div>

          </div>


        </div>
      </section>

    </>
  )
}

export default Work
