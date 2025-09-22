import React from 'react'
import featureCourses from '../data/course'
import { useParams } from 'react-router-dom'
import vid from '../assets/Vid.mp4'
import { FaPlayCircle,FaStar } from 'react-icons/fa'
import { TiArrowSortedDown } from 'react-icons/ti'
import { usetoggletab } from '../Store/UseToggleTab'
import { LiaCertificateSolid } from 'react-icons/lia'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { FaFacebookF  ,FaInstagram} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import Rating from '@mui/material/Rating';

const CoursePlayer = () => {
   const tabs = [ {name: "overview",id:1 },{name:"syllabus",id:2},{name:"notes",id:3},{name:"resource",id:4},{name:"instructor",id:5} ,{name:"review", id:6},]
    const {tab,toggletab,toggleModule,syllabus } = usetoggletab()
  const  {course_name} = useParams()
    const courseData = featureCourses.find((c)=> c.course_name==course_name)
  return (
    <div className='bg-white w-[100%] h-full capitalize font-[Outfit]  py-5 pl-5'>
<div>
    <div>
   
     <div className='flex  gap-2'>
      <div className='flex flex-col gap-1' >
        <span className='flex flex-col gap-0'>
        <span className='text-gray-800 normal-case font-semibold text-base'>
     Name of this module 
        </span>
        <h2 className='text-2xl font-semibold'>{courseData.course_name}</h2>
        </span>
        <div className='flex flex-col justify-between gap-6'>
   <div className='p-4 w-[60vw] rounded-lg bg-white shadow-lg'><video  src={vid} controls autoPlay> </video></div>
  <div className='w-[80%] pl-10 font-[Outfit]'>
          {/* headings */}           
          <div className='flex flex-row gap-8   text-black text-xl font-semibold '>
              {tabs.map((t)=>{return(
            <a key={t.id} onClick={()=>toggletab(t.name)} className={`cursor-pointer capitalize flex hover:text-pink-400 p-2 ${tab === t.name ? " underline-offset-8 underline  text-pink-400" :"text-black "}`}>{t.name}</a>
                 )})}         
          </div>      
<div>
          {/* overview */}
      {tab ==="overview" ?(
          <div>  
            <div className='flex flex-col gap-1 py-6'>
              <h1 className='text-lg font-medium'>Course Description</h1>
              <p className='font-normal '>
                {courseData.overview.description}
              </p>
            </div>
            <div className='flex flex-col gap-1 '>
              <h2 className='text-lg font-medium'>What you’ll learn</h2>
              <ul className='flex flex-col list-disc list-outside pl-5'>
                {courseData.overview.learn.map((list)=>{return(
                <li>{list}</li>)})}
              </ul>
            </div>
            <div className='flex flex-col gap-1 py-5'>
              <h2 className='text-lg font-medium'>Who this course is for</h2>
              <ul className='flex flex-col list-disc list-outside pl-5'>
                 {courseData.overview.highlights.map((list)=>{return(
                <li>{list}</li>
                )})}
              </ul>
            </div>
            <div className='flex flex-col gap-1 py-3'>
              <h2 className='text-lg font-medium'>Requirements</h2>
              <ul className='flex flex-col list-disc list-outside pl-5'>
                 {courseData.overview.requirements.map((list)=>{return(
                <li>
                {list}
                </li>
                )})}
               </ul>
            </div>
          </div>
      ): tab === "syllabus" ? (
          <div  className='py-10'>

{courseData.syllabus.map((t, i) => {
  const moduleKey = `module${i + 1}`; 
  return (
    <div key={i}>
      {/* Module header */}
      <div
        onClick={() => toggleModule(moduleKey)}
        className="flex my-1 justify-between items-center py-5 bg-pink-400 px-3 rounded-lg text-white cursor-pointer"
      >
        <span className="flex items-center gap-2 text-lg font-medium">
          <TiArrowSortedDown
            className={`transition-transform duration-300 ${
              syllabus[moduleKey] ? "rotate-180" : "rotate-0"
            }`}
          />
          {t.module}
        </span>
        <span>({t.totalTime})</span>
      </div>
      {/* Lessons */}
      {syllabus[moduleKey] && (
        <ul className="flex flex-col gap-2 mt-2">
          {t.lessons.map((lesson, j) => (
            <li
              key={j}
              className="flex justify-between rounded-xl hover:bg-gray-100 transition-all px-6 py-4 w-full"
            >
              <span className="flex items-center gap-2">
                <FaPlayCircle className="text-sm text-pink-500" />
                {lesson.title}
              </span>
              <span className="text-gray-500">{lesson.time}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
})}

          </div>
      ) : tab === "instructor" ?(
      <div className=' py-5 pl-4'>
        <div className='flex flex-col pb-3'>
          <h2 className='text-xl text-black font-semibold'>
          {courseData.instructor_name}
          </h2>
          <span className='text-lg '> ({courseData.instructor.title})</span>
        </div>
         <div className='flex items-start   gap-7'>
          <div className='w-[50%] border rounded-2xl p-4'><img className=' rounded-2xl' src={courseData.instructor_img} alt={courseData.instructor_img} /></div>
          <div>
         <ul className='flex flex-col text-base font-normal w-full gap-1'>
          <li className='flex gap-2 '>
            <span className='flex gap-2 items-center '><FaStar/>{courseData.instructor.rating} </span>
          </li>
          <li>
            <span  className='flex gap-2 items-center '><LiaCertificateSolid /> {courseData.instructor.reviews} </span>
          </li>
          <li><span  className='flex gap-2 items-center '><MdOutlinePeopleAlt />{courseData.instructor.students}</span></li>
          <li>
            <span  className='flex gap-2 items-center '><FaPlayCircle />{courseData.instructor.courses}</span>
          </li>
          <li className='mt-3'> <div className='flex gap-1 text-lg'>
          <span className='cursor-pointer'><FaFacebookF className=' bg-pink-400 text-white w-6 h-6 rounded-sm py-1 scale-100 cursor-pointer transition-all ease-out hover:scale-95'/></span>
          <span><BsTwitterX  className=' bg-pink-400 text-white w-6 h-6 rounded-sm py-1 scale-100 cursor-pointer transition-all ease-out hover:scale-95'/></span>
          <span><FaInstagram className=' bg-pink-400 text-white w-6 h-6 rounded-sm py-1 scale-100 cursor-pointer transition-all ease-out hover:scale-95'/>
</span>
          </div></li>
         </ul>
          
          </div>
         </div>
      <div className='gap-4 flex flex-col py-5'>
     <div className='flex flex-col gap-1 '>
              <h1 className='text-lg font-medium'>About the Instructor:</h1>
              <p className='font-normal '>
            {courseData.instructor.bio}
              </p>
            </div>
            <div className='flex flex-col gap-1 '>
              <h1 className='text-lg font-medium'>Teaching Style :</h1>
              <p className='font-normal '>
       {courseData.instructor.teaching}
              </p>
            </div>
            <div className='flex flex-col gap-1 '>
              <h2 className='text-lg font-medium'>Highlights:</h2>
              <ul className='flex flex-col list-disc list-outside pl-5'>
                {/* {courseData.instructor} */}
                <li>Designed apps & websites for international clients in tech and e-commerce</li>
                <li>Specialist in wireframing, user flows, and usability testing</li>
                <li>Featured in multiple design publications and online communities</li>
                <li>Mentored 5,000+ students worldwide through workshops and online classes</li>
            
              </ul>

            </div>
      </div>

      </div>
      ) : tab=== "review" ? ( 
      <div className='grid grid-cols-1 gap-5 justify-center items-center  py-10 w-full'>
      
      {courseData.reviews.map((rev)=>{return(
      <div className='flex flex-col gap-4 border py-5 px-3 w-full rounded-2xl shadow-xl'>
 <div className='flex gap-3'>
    <img className=' w-16 rounded-full' src={rev.img} alt={rev.img} />
  <div className='flex flex-col items-start  justify-start '>
    <span className='font-medium' >{rev.name}</span>
    <Rating  name="read-only" value={rev.rating} readOnly/>
  </div>
  <div>
  </div>
 </div>
<p>
 {rev.comment}
</p>
      </div> 
)})}
     
      </div>) : null}
     <div>

     </div>
</div>
        </div>
  </div>
  </div>

    <div className='flex flex-col items-start w-[60%] sticky top-0 self-start '>
  <div className=' shadow-lg rounded-lg rounded-r-none border-gray-200 font-medium p-3.5 border border-r-0 bg-gray-50 pl-5 w-full flex justify-between items-center'><h2 className='text-2xl inline text-gray-800 '>course content</h2> <span><RxCross2  className='text-lg mr-3.5 cursor-pointer hover:bg-gray-300 hover:rounded-full w-5 h-5'/>
</span></div>
      <div  className='p-3 pt-1  flex flex-col gap-1  overflow-y-auto'>
{courseData.syllabus.map((t, i) => {
  const moduleKey = `module${i + 1}`; 
  return (
    <div key={i}>
      {/* Module header */}
      <div
        onClick={() => toggleModule(moduleKey)}
        className="flex  justify-between items-center py-5 bg-pink-400 px-3 rounded-lg rounded-b-none text-white cursor-pointer"
      >
        <span className="flex items-center gap-2 text-lg font-medium">
          <TiArrowSortedDown
            className={`transition-transform duration-300 ${
              syllabus[moduleKey] ? "rotate-180" : "rotate-0"
            }`}
          />
          {t.module}
        </span>
        <span>({t.totalTime})</span>
      </div>
      {/* Lessons */}
      {syllabus[moduleKey] && (
        <div className='bg-pink-400 p-2 rounded-lg rounded-t-none'>
        <ul className="flex flex-col gap-2 bg-white rounded-lg">
          {t.lessons.map((lesson, j) => (
            <li
              key={j}
              className="flex justify-between rounded-xl hover:bg-gray-100 transition-all px-6 py-4 w-full"
            >
              <span className="flex items-center gap-2">
                <FaPlayCircle className="text-sm text-pink-500" />
                {lesson.title}
              </span>
              <span className="text-gray-500">{lesson.time}</span>
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
})}

          
  </div> 
  </div>
     </div>
    
       </div>
  
</div>
    </div>
  )
}

export default CoursePlayer