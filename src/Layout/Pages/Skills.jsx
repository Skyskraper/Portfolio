import React from 'react'
import Center from '../../assets/Group 1897.png'
import Background from '../../assets/Ellipse 20.png'
import Eclipse from '../../assets/Group 1907 (1).png'
import line1 from '../../assets/Vector 28.png'
import line2 from '../../assets/Vector 29.png'
import line3 from '../../assets/Vector 30.png'
import line4 from '../../assets/Vector 27.png'
import line5 from '../../assets/Vector 26.png'
import line6 from '../../assets/Vector 25.png'
import HTML from '../../assets/html-CCTS3q0u.png'
import Language2 from '../../assets/Rectangle 7.png'
import Bootstrap from '../../assets/bootstrap.png'
import Java from '../../assets/java-script-DnnVdcwd.png'
import react from '../../assets/react.svg'
import Figma from '../../assets/Rectangle 1.png'
import language3 from '../../assets/icons8-c++-48.png'
import node from '../../assets/Rectangle 4.png'
import mongo from '../../assets/Rectangle 13.png'
import artificial from '../../assets/Rectangle 11.png'
import machine from '../../assets/coding.png'
import python from '../../assets/python.png'

const Skills = () => {
  return (
    <section className="bg-[#11071F] py-12">
      <div className="container mx-auto">
        <div className="text-white text-center">
          <h1 className="font-[400] lg:text-[26px] md:text-[26px] text-[18px] ">
            I'm currently looking to join a{' '}
            <span className="text-[#A362FF]">cross-functional</span> team
          </h1>
          <p className='lg:text-[24px] text-[12px]'>that values improving people's lives through accessible design</p>
        </div>


        <div className="flex justify-center items-center mt-16 overflow-visible relative">

          {/*Icons */}

          <div className="absolute top-[-60px] lg:left-[566px] left-[20px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={HTML}
              alt="image"
              className='h-[25px]'
            />
          </div>
          <div className="absolute top-[-62px] lg:left-[627px] left-[87px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={Language2}
              alt="image"
              className='h-[25px]'
            />
          </div>
          <div className="absolute top-[-60px] lg:left-[693px] left-[163px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={Bootstrap}
              alt='image'
              className='h-[25px]'
            />
          </div>
          <div className="absolute top-[-60px] lg:left-[793px] left-[275px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={Java}
              alt='image'
              className='h-[25px]'
            />
          </div>
          <div className="absolute top-[-60px] lg:left-[861px] left-[355px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={react}
              alt='image'
              className='h-[25px]'
            />
          </div>
          <div className="absolute top-[-60px] lg:left-[932px] left-[424px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={Figma}
              alt='image'
              className='h-[25px]'
            />
          </div>
          <div className="absolute top-[3px] lg:left-[895px] left-[396px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={language3}
              alt='image'
              className='h-[25px]'
            />
          </div>
          <div className="absolute top-[3px] lg:left-[831px] left-[330px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={node}
              className='h-[20px]'
            />
          </div>
          <div className="absolute top-[-1px] lg:left-[765px] left-[269px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={mongo}
              alt='image'
              className='h-[10px]'
            />
          </div>
          <div className="absolute top-[1px] lg:left-[701px] left-[197px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={artificial}
              className='h-[25px]'
            />
          </div>

           <div className="absolute top-[3px] lg:left-[651px] left-[116px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={machine}
              className='h-[25px]'
            />
          </div>

           <div className="absolute top-[3px] lg:left-[591px] left-[42px] z-30 bg-[#251C31] rounded-full h-[45px] w-[45px] flex justify-center items-center">
            <img
              src={python}
              className='h-[25px]'
            />
          </div>




          {/*  image */}
          <img
            src={line1}
            alt="line"
            className="absolute top-[48px] lg:left-[629px] left-[71px] z-30 "
          />
          <img
            src={line2}
            alt="line"
            className='absolute top-[48px] lg:left-[682px] left-[146px] z-30'
          />
          <img
            src={line3}
            alt="line"
            className='absolute top-[48px] lg:left-[735px] left-[214px] z-30'
          />
          <img
            src={line4}
            alt="line"
            className='absolute top-[48px] lg:left-[755px] left-[249px] z-30'
          />
          <img
            src={line5}
            alt="line"
            className='absolute top-[48px] lg:left-[769px] left-[270px] z-30'
          />
          <img
            src={line6}
            alt="line"
            className='absolute top-[48px] lg:left-[770px] left-[282px] z-30'
          />

          {/* Main Circle */}
          <div className="relative w-[200px] h-[200px] flex justify-center items-center mt-70">

            {/* Outer Ring */}
            <img
              src={Eclipse}
              alt="ring"
              className="absolute z-0 w-full h-full object-contain"
            />

            {/* Background */}
            <img
              src={Background}
              alt="background"
              className="absolute w-[150px] h-[150px] z-10 object-contain"
            />

            {/* Center Icon */}
            <img
              src={Center}
              alt="center icon"
              className="relative z-20 w-[60px] h-[60px] object-contain"
            />

          
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Skills
