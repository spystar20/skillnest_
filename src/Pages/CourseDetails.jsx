import React from 'react'
import { CiHeart } from "react-icons/ci";
import { SiBookstack } from "react-icons/si";
import { IoTime } from "react-icons/io5";
import { FaStar ,FaMobileAlt,  FaEye  } from "react-icons/fa";
import { MdOndemandVideo,MdOutlineSimCardDownload } from "react-icons/md";
import { TbWorldCheck } from "react-icons/tb";
import { GrCertificate } from "react-icons/gr";
import { PiFileAudioBold } from "react-icons/pi";
import { LuMessageCircleMore } from "react-icons/lu";
const CourseDetails = () => {
  return (
    <div className=' bg-white w-full h-[100vh] font-[Roboto]'>
      <div className='w-[100%] h-[50%] flex justify-between items-center gap-3  text-white  home-bg'>
        {/* course info */}
        <div className='flex flex-col gap-7 items-center justify-center w-[50%]'>
          <h2 className='text-3xl font-semibold font-[Outfit]  capitalize '>UI/UX Design Essentials with Figma</h2>
        <div className='flex justify-center items-center gap-6'>
          <span className='flex gap-2 items-center justify-center text-xl font-medium '>
            <SiBookstack className=' text-pink-300 font-bold text-2xl'/>5 lessons
          </span>
            <span className='flex gap-2 items-center justify-center text-xl font-medium '>
            <IoTime className='text-pink-300 font-bold text-2xl'/>4 Hours
          </span>
            <span className='flex gap-2 items-center justify-center text-xl font-medium '>
            <FaEye className='text-pink-300 font-bold text-2xl'/>25k Ratings
          </span>
        </div>
        <div className='flex items-center justify-between w-[60%]'>
           <div className='flex justify-start items-center gap-3'>
                      <div><img src='https://i.pinimg.com/1200x/15/58/e5/1558e54047b1a7bb44eca316e829f8bf.jpg' className='w-16 rounded-full ' alt='https://i.pinimg.com/1200x/15/58/e5/1558e54047b1a7bb44eca316e829f8bf.jpg' /></div>
                      <div className='flex flex-col justify-start items-start capitalize font-[outfit]'>
                        <span className='text-lg font-medium'>ae sun</span>
                        <span className='font-medium text-sm '>instructor</span>
                      </div>
                    </div>
           <span className='text-lg font-semibold flex justify-center items-center gap-2'> <FaStar className='text-yellow-400'/> 4.7</span>
        </div>
        </div>
    <div className='w-[50%]  overflow-y-scroll flex flex-col gap-5 justify-center items-center '>
          {/* course card */}
          <div className='flex flex-col cursor-pointer  shadow-2xl bg-white w-[53%] gap-3 rounded-2xl h-full px-4 py-4'>
            <div><img src="https://i.pinimg.com/736x/b1/88/2e/b1882e2b4ebd15151ac1c60c87cf26f7.jpg" className='drop-shadow-xs rounded-2xl object-cover rounded-t-2xl transform hover:scale-105 transition-transform duration-300 ' alt="" /></div>
            <div className='flex justify-start items-center'><p class="text-2xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
  Free
</p>
</div>
            <div className='flex flex-col gap-2'>
              <button className='px-5 py-2 capitalize text-lg font-semibold  rounded-xl bg-gradient-to-r from-pink-500 to-pink-400 w-full hover:scale-95 scale-100 ease-out '>enroll now</button>
              <button className='  flex gap-2 items-center justify-center px-5 py-2 capitalize text-lg font-semibold  rounded-xl hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400 hover:text-white hover:border-0  text-black border-gray-400 border w-full ease-in transition-all ' ><span><CiHeart className='text-2xl ' /></span> add to whishlist</button>

            </div>
          </div>
           <div className='flex flex-col cursor-pointer  shadow-2xl bg-white text-black w-[53%]  gap-3 rounded-2xl h-full px-4 py-4'>
  <h2 className='text-xl p-2  font-medium text-black capitalize font-[Outfit]'>course features</h2>
  <ul className='flex flex-col gap-3 p-2'>
    <li className='text-lg group flex justify-start text-gray-600 items-center gap-2'>
<MdOndemandVideo className=' text-black text-2xl group-hover:text-pink-500 ' />2.5 hours on-demand video
    </li>
     <li className='text-lg flex justify-start group text-gray-600 items-center gap-2'>
<MdOutlineSimCardDownload className=' text-black text-2xl group-hover:text-pink-500 ' />Downloadable resources
    </li>
     <li className='text-lg flex justify-start group text-gray-600 items-center gap-2'>
<FaMobileAlt className=' text-black text-2xl group-hover:text-pink-500 ' />Access on mobile and desktop
    </li>
     <li className='text-lg flex justify-start group text-gray-600 items-center gap-2'>
<TbWorldCheck className=' text-black text-2xl group-hover:text-pink-500 ' />Lifetime access
    </li>
     <li className='text-lg flex justify-start group text-gray-600 items-center gap-2'>
<GrCertificate className=' text-black text-2xl group-hover:text-pink-500 ' />Certificate of completion
    </li>
     <li className='text-lg flex justify-start group text-gray-600 items-center gap-2'>
<PiFileAudioBold  className=' text-black text-2xl group-hover:text-pink-500' />Audio lectures available
    </li>
     <li className='text-lg flex justify-start group text-gray-600 items-center gap-2'>
<LuMessageCircleMore className=' text-black text-2xl group-hover:text-pink-500 ' />Community Q&A and support
    </li>
  </ul>
           </div>
          </div>
          </div>
        </div>
    
 
  )
}

export default CourseDetails