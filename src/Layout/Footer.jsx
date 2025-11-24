import React from 'react'
import Finish from '../assets/Group 1897.png'

const Footer = () => {
  return (
    <>
      <section className='bg-[#11071F] py-12'>
        <div className='container'>
          <div className='grid grid-cols-1'>
            <div className='col-span-1'>
              <div className=' flex flex-col items-center justify-center text-center  '>
                <div>
                  <img src={Finish} alt='image' />
                </div>
                <p className='text-[#8750f7] py-2'>
                  @2025 All Rights Reserved by Abhimanyu Kharwar
                </p>

              </div>


            </div>

          </div>

        </div>
      </section>

    

    </>
  )
}

export default Footer
