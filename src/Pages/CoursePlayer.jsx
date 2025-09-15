import React from 'react'
import featureCourses from '../data/course'
import { useParams } from 'react-router-dom'

const CoursePlayer = () => {
  const  {course_name} = useParams()
    const courseData = featureCourses.find((c)=> c.course_name==course_name)
  return (
    <div className='bg-white w-[100vw] h-full capitalize font-[Outfit] p-5'>
<div>
    <div className='grid grid-cols-2'>
     <div>
        <span className='flex flex-col gap-0'>
        <span className='text-gray-800 normal-case font-semibold text-base'>
     Name of this module 
        </span>
        <h2 className='text-2xl font-semibold'>{courseData.course_name}</h2>
        </span>
 <iframe width="560" height="315" src="https://www.youtube.com/embed/7IzSPp8gmeA?si=KODR5_EQ5cIx0gQG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </div>
    </div>
  
</div>
    </div>
  )
}

export default CoursePlayer