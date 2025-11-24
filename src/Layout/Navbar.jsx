import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moon from "../assets/Logo.png"
import { ImCross } from 'react-icons/im'
import { IoIosMenu } from 'react-icons/io'

const Navbar = () => {

  const [open, setopen] = useState(false)
  return (
    <section className="bg-[#1A0B2E] topheader ">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img src={moon} alt="Moon Logo" className="h-10 w-auto  text-white " />
          <p className='text-white font-[400] text-md'>abhimanyukharwar65@gmail.com</p>

        </div>

        {/* Navbar*/}
        <nav className='md:flex hidden'>
          <ul className="flex gap-6 font-[plus jakarta sans]">
            <li className="text-white text-[20px] font-[400] ">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white text-[20px] font-[400] ">
              <Link to="/Work">Work</Link>
            </li>


            <li className="text-white text-[20px] font-[400] ">
              <Link to="/Skills">Skills</Link>
            </li>
            <li className="text-white text-[20px] font-[400]">
              <Link to="/About">About</Link>
            </li>
            <li className="text-white text-[20px] font-[400]">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>


        </nav>

        {/* Button */}
        <button className=" lg:flex hidden text-white  font-[400] hover:text-[#8750f7]  border-1 border-white rounded-[20px] bg-[#1A0B2E] lg:px-4 px-2 py-2">
          Hire me!
        </button>
        <button onClick={() => setopen(!open)} className='text-white md:hidden block'>
          {open ? <ImCross /> : <IoIosMenu />} 

        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1A0B2E] text-center px-6 pb-4 transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <li className="text-white text-[18px]">
            <Link to="/" onClick={() => setopen(false)}>Home</Link>
          </li>
          <li className="text-white text-[18px]">
            <Link to="/Work" onClick={() => setopen(false)}>Work</Link>
          </li>

          <li className="text-white text-[18px]">
            <Link to="/Skills" onClick={() => setopen(false)}>Skills</Link>
          </li>

          <li className="text-white text-[18px]">
            <Link to="/About" onClick={() => setopen(false)}>About</Link>
          </li>

          <li className="text-white text-[18px]">
            <Link to="/Contact" onClick={() => setopen(false)}>Contact</Link>
          </li>
        </ul>

        <button className="mt-4 w-full text-white  border border-white rounded-[20px]  py-2">
          Hire me!
        </button>
      </div>
    </section>
    
  )
}

export default Navbar
