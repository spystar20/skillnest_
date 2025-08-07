import React, { useState } from 'react'
import { FaSearch, FaStar } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import Course from '../data/course'
import courseCategories from '../data/CourseCategories';
import { IoTime } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { FaEye } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from 'react-icons/ci';

const Courses = () => {
  // toggling courseCategories
  const [openCourseCategories , setOpenCourseCategories] =useState(false)
  const togglecourseCategory =() =>{
    setOpenCourseCategories(!openCourseCategories)
  }
  //  toggling subcategories
  const [openCategory, setopenCategory] = useState(false)
  const toggleCategory = (name) => {
    setopenCategory((prev) => ({
      ...prev,
      [name]: !prev[name]
    }))
  }
  //  toggle like
  const [Liked,setLiked] = useState(true)
  const handleLike =() =>{
    setLiked(!Liked)
  }
  // const [filterCourse , setfilterCourse] =useState('')
  // setfilterCourse(() =>{
  //   Course.filter(course => {
  //   })
  // })
  return (
    <div className=' bg-white w-full h-[100vh] font-[Roboto]'>
      <div className='w-full h-[30%] flex flex-col gap-3 justify-center items-center text-white  home-bg'>
        <h2 className='text-5xl font-semibold font-[Outfit]  capitalize '>courses</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, labore.</p>
      </div>
      {/* search and sort */}
      <div className='px-4 py-8 pr-16 flex justify-center gap-4 items-center shadow-xs'>

        <button className='text-xl font-normal capitalize border px-10 cursor-pointer rounded-xl py-2  hover:bg-gray-100'>
          filter
        </button>
        <button className='text-xl font-normal capitalize border px-10 cursor-pointer rounded-xl py-2  hover:bg-gray-100'>
          sort
        </button>
        <div className='w-[85%] border rounded-2xl border-black flex justify-between items-center'>
          <input type="text" className='text-xl border-none outline-none placeholder:capitalize placeholder:font-[Roboto] placeholder:text-gray-900 placeholder:font-light px-4 py-2' placeholder='search desired courses' />
          <span className='h-11 bg-pink-400 px-4  flex items-center rounded-2xl'><FaSearch className='text-xl scale-100 hover:scale-125 cursor-pointer text-white' /></span>
        </div>

      </div>
      {/* filter */}
      <div className='flex items-start justify-between '>
        <div className='flex flex-col justify-start items-start border-r px-5 mt-1 w-[23%] '>
        <div className=' font-[Outfit] '>
          <h2  onClick={togglecourseCategory} className='text-2xl font-medium py-4 pb-5 flex justify-between items-center   '>Categories <span><MdOutlineKeyboardArrowDown className='text-4xl font-black' /></span></h2>
          {openCourseCategories &&
          courseCategories.map((course, index) => {
         return   (
        
              <div key={index}>

                <div onClick={() => toggleCategory(course.category)} className='flex justify-between items-center pt-2 '>
                  <label>
                    <span className='flex justify-center items-center'>
                      <input type="checkbox" className='w-3 cursor-pointer border-none h-3 accent-pink-400' name={course.category} id="" />
                      <span  className='text-xl px-3 text-wrap capitalize '>{course.category}</span>
                    </span>
                  </label>
                  <span ><MdOutlineKeyboardArrowDown className='text-xl cursor-pointer' /></span>
                </div>
                {openCategory[course.category] && course.subcategories && (


                  <div className='pl-4'>
                    {course.subcategories.map((subc, index) => {
                      return (
                        <div className='flex items-center  py-3 '>
                          <label htmlFor="development">
                            <span className='flex justify-center items-center'>
                              <input type="checkbox" className=' border-none  accent-pink-400' name="web development" id="" />
                              <span className='text-lg font-normal px-3 capitalize'>{subc}</span>
                            </span>
                          </label>
                        </div>
                      )
                    })}
                  </div>
                )}

              </div>
            
                
            )
          })}
  
        </div>

 <div className='font-[Outfit] px-5'>
           <h2  className='text-2xl font-medium py-4 pb-5 flex justify-between items-center   '>rate <span><MdOutlineKeyboardArrowDown className='text-4xl font-black' /></span></h2>
          {courseCategories.map((course, index) => {
            return (
              <div>

                <div onClick={() => toggleCategory(course.category)} className='flex justify-between items-center pt-2 '>
                  <label>
                    <span className='flex justify-center items-center'>
                      <input type="checkbox" className='w-3 cursor-pointer border-none h-3 accent-pink-400' name={course.category} id="" />
                      <span key={index} className='text-xl px-3 text-wrap capitalize '>{course.category}</span>
                    </span>
                  </label>
                  <span ><MdOutlineKeyboardArrowDown className='text-xl cursor-pointer' /></span>
                </div>
                {openCategory[course.category] && course.subcategories && (


                  <div className='pl-4'>
                    {course.subcategories.map((subc, index) => {
                      return (
                        <div className='flex items-center  py-3 '>
                          <label htmlFor="development">
                            <span className='flex justify-center items-center'>
                              <input type="checkbox" className=' border-none  accent-pink-400' name="web development" id="" />
                              <span className='text-lg font-normal px-3 capitalize'>{subc}</span>
                            </span>
                          </label>
                        </div>
                      )
                    })}
                  </div>
                )}

              </div>
            )
          })}
        </div>
        </div>
        {/* courses */}
        <div className='w-[80%]'>
          <div className='grid grid-cols-3  gap-4 px-5 py-10'>
           {Course.map((course )=>{ return(
        <div className='flex flex-col cursor-pointer shadow-2xl bg-white  w-full gap-3 rounded-2xl   h-full px-6 py-6'>
          <div className='grid group '>
            <div className='col-start-1 row-start-1 z-0'><img src={course.img} className='drop-shadow-xs col-span-1 rounded-2xl' alt="" /></div>
            <div className='col-start-1 relative invisible group-hover:visible  px-3 py-3 flex  justify-between items-end row-start-1 z-10 bg-black  opacity-65  rounded-2xl'>
              <div onClick={handleLike} className='absolute top-0 right-0  m-1 transition-all ease-out '>{Liked ? <CiHeart className='text-4xl text-pink-400' /> : <FaHeart className='text-4xl text-pink-400'/>}</div>
              <div >
                <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'><span><FaShoppingCart /></span> <span>add to cart</span></button></div>
              <div>
                <button className='flex justify-center items-center  transition-all hover:scale-95 scale-100 group    font-[Comic_Relief]  cursor-pointer bg-pink-400 text-white rounded-lg py-1 px-2 gap-1 text-lg  capitalize font-medium'>{course.price}</button></div>
            </div>
          </div>
          <div className='flex justify-start items-center gap-3'>
            <div><img src={course.instructor_img} className='w-16 rounded-full ' alt={course.instructor_img} /></div>
            <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
              <span className='text-lg font-medium'>{course.instructor_name}</span>
              <span className='font-medium text-sm '>instructor</span>
            </div>
          </div>

          <div className='flex flex-col text-left  flex-wrap'>
            <h2 className='text-xl font-semibold'>{course.course_name} </h2>
            <p className='text-lg text-wrap line-clamp-2'> {course.course_desc}</p>
          </div>
       
          <div className='flex  justify-between  items-center'>
            <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-2'>
              <span className='flex justify-center text-yellow-500'><FaStar /></span>
              <h2 className=' font-medium'>{course.rating}</h2>
            </div>
            <div className='flex border capitalize bg-black text-white text-sm font-medium  rounded-lg px-2 py-2 justify-start items-center gap-3'>
              <span><FaEye/></span><span>{course.view}</span>
            </div>
          </div>
         <div className='flex justify-between items-center '><span className='flex items-center gap-2 text-lg capitalize '>< SiBookstack />{course.chapters} chapters</span><span className='flex items-center gap-2 text-lg capitalize '><IoTime />{course.duration}</span></div>
        </div>
)})}
          </div>
        </div>


        </div>
   
    </div>
  )
}

export default Courses