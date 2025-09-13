import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { GiNestBirds } from 'react-icons/gi';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {

const [open,setopen] = useState(false)

  return (

    <div className='font-["Roboto"]'>
      <div className="w-full h-[10vh] py-5 font-['Comic_Relief'] flex justify-evenly px-12 items-center bg-[#fffdf5] text-[#364c84] backdrop-blur-sm  bg-opacity-30 rounded-b-lg shadow-sm shadow-[#fffdf5]">
        <div className="flex items-center space-x-2">
          <GiNestBirds className="text-[#364c84] text-3xl" />
          <span className="text-2xl font-bold">
            <span className="text-[#364c84]">Skill</span>
            <span className="text-[#95b1ee]">nest</span>
          </span>
        </div>
        <ul class="flex justify-center gap-3 font-['Comic_Relief'] items-center h-full text-lg ">
       <Link to="/">  <li className="cursor-pointer hover:bg-[#95b1ee] hover:rounded-full transition-all hover:text-[#fffdf5] py-2 px-5 ">Home</li></Link> 

        <Link to="/courses"> <li className="cursor-pointer  hover:bg-[#95b1ee] active:bg-[#95b1ee] hover:rounded-full transition-all hover:text-[#fffdf5] py-2 px-5 flex justify-center  gap-1 items-center course-button  "  onMouseEnter={()=>setopen(true)} >Courses <span><FaAngleDown className={`transition-transform duration-300 mt-1 ${open ? 'rotate-180' : ''}`}/></span>
          {open && (
            <div className='relative z-[99999]' onMouseEnter={()=>setopen(true)} onMouseLeave={()=>setopen(false)}>
          <div onMouseEnter={()=>setopen(true)} onMouseLeave={()=>setopen(false)} className="grid drop-down z-[990099] w-[40vw] grid-cols-2 gap-3 px-8 py-6 shadow-2xl lg:left-[-13rem]  font-['Roboto'] top-[2rem]   text-[#364c84] bg-[#fffdf5] rounded-sm mt-3 absolute">
        <ul >
          <li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 
            <div className="text-lg font-semibold flex justify-between items-center">
              Development
              <span className="inline-block w-4">
                <FaAngleDown  className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180"  />
              </span>
          </div>

            <ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
              <li className="hover:text-[#95b1ee]">Web Development</li>
              <li className="hover:text-[#95b1ee]">Mobile Development</li>
              <li className="hover:text-[#95b1ee]">Game Development</li>
              <li className="hover:text-[#95b1ee]">Programming Languages</li>
            </ul>

          </li>
          <li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

            <div className="text-lg font-semibold flex justify-between items-center">
              Business
              <span className="inline-block w-4">
                <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
              </span>
            </div>

            <ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
              <li className="hover:text-[#95b1ee]">Entrepreneurship</li>
              <li className="hover:text-[#95b1ee]">Marketing</li>
              <li className="hover:text-[#95b1ee]">Finance & Accounting</li>
              <li className="hover:text-[#95b1ee]">Management</li>
            </ul>
          </li>
          <li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">
Design
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">Graphic Design</li>
  <li className="hover:text-[#95b1ee]">UI/UX Design</li>
  <li className="hover:text-[#95b1ee]">Animation</li>
  <li className="hover:text-[#95b1ee]">Interior Design</li>
</ul>
</li>
<li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">IT & Software
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">Cybersecurity</li>
  <li className="hover:text-[#95b1ee]">Cloud Computing</li>
  <li className="hover:text-[#95b1ee]">Network & Security</li>
  <li className="hover:text-[#95b1ee]">DevOps</li>
</ul>
</li>
<li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">
Personal Development
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">Productivity</li>
  <li className="hover:text-[#95b1ee]">Leadership</li>
  <li className="hover:text-[#95b1ee]">Communication Skills</li>
  <li className="hover:text-[#95b1ee]">Time Management</li>
</ul>
</li>
</ul>
<ul>
<li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">
Data Science
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">Machine Learning</li>
  <li className="hover:text-[#95b1ee]">Data Analysis</li>
  <li className="hover:text-[#95b1ee]">AI & Deep Learning</li>
  <li className="hover:text-[#95b1ee]">Statistics</li>
</ul>
</li>
<li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">
Health & Fitness
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">Yoga</li>
  <li className="hover:text-[#95b1ee]">Mental Health</li>
  <li className="hover:text-[#95b1ee]">Nutrition</li>
  <li className="hover:text-[#95b1ee]">Sports Training

</li>
</ul>
</li>
<li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">
Language Learning
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">English</li>
  <li className="hover:text-[#95b1ee]">Spanish</li>
  <li className="hover:text-[#95b1ee]">Korean</li>
  <li className="hover:text-[#95b1ee]">Hindi or regional languages</li>
</ul>
</li>
<li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">
Arts & Humanities
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">Music</li>
  <li className="hover:text-[#95b1ee]">Drawing</li>
  <li className="hover:text-[#95b1ee]">History</li>
  <li className="hover:text-[#95b1ee]">Writing</li>
</ul>
</li>
<li className="group py-3 border-y border-[#364c84]  capitalize flex flex-col gap-2 cursor-pointer w-52"> 

<div className="text-lg font-semibold flex justify-between items-center">
Test Preparation
  <span className="inline-block w-4">
    <FaAngleDown className="ml-1 mt-1 transition-transform duration-300 group-hover:rotate-180" />
  </span>
</div>

<ul className="hidden  group-hover:flex flex-col justify-start items-start gap-1 my-2 font-sans transition-all duration-300 w-full">
  <li className="hover:text-[#95b1ee]">UPSC / SSC / Government Exams</li>
  <li className="hover:text-[#95b1ee]">IELTS / TOEFL</li>
  <li className="hover:text-[#95b1ee]">SAT / GRE / GMAT</li>
  <li className="hover:text-[#95b1ee]">NEET / JEE

</li>
</ul>
</li>
        </ul>
   
      </div> 
      </div>
          )}
          </li>
          </Link> 
          <li className="cursor-pointer hover:bg-[#95b1ee] hover:rounded-full transition-all hover:text-[#fffdf5] py-2 px-5 ">About</li>
          <li className="cursor-pointer hover:bg-[#95b1ee] hover:rounded-full transition-all hover:text-[#fffdf5] py-2 px-5 ">Teach</li>
        </ul>

      {/* button  */}
        <div class="flex justify-center text-xl  capitalize   gap-5 items-center h-full">
        <button className="relative inline-block px-6 py-1 font-medium text-[#364c84] group">
  <span className="absolute inset-0 border border-[#364c84] rounded-md transition-all duration-300 group-hover:border-[3px]"></span>
  <span className="relative z-10">Login</span>
</button>

          <button className='  scale-100 hover:scale-95 cursor-pointer bg-pink-400 hover:bg-[#95b1eee4] text-[#fffdf5] rounded-lg py-1 px-5  capitalize font-medium'>sign up</button>

        </div>
      </div>
</div>
  )
}
export default Navbar