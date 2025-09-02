import { create } from "zustand";
import Course from '../data/course'
export const useCourseStore = create((set)=>({

    selectCourse:'',selectSubCategories:'',price:'',rating:'',search:'',sortBy:{},comingSoon:false,
    setFilter :(key,value) =>set((state) =>({
        ...state, [key]:value
    })),

    handleCategories : (category) => set((state)=>{
        const hasCourse = Course.some(c => c.category ===category)
        if(!hasCourse) {return {comingSoon:true ,selectCourse :''}}else{return{
             comingSoon:false ,selectCourse :category
        }}
    }),
 handleSubCategories  :(category) => set((state)=>{
        const hasCourse = Course.some(c => c.subcategory===category)
        if(!hasCourse) {return {comingSoon:true ,selectSubCategories :''}}else{return{
             comingSoon:false ,selectSubCategories :category
        }}
    }),
  
     handleSearch : (param) => set((state) => {
         const hasCourses = Course.some((course) => {
      const searchFields = `${course.category}${course.subcategory}${course.instructor_name}${course.course_desc}${course.price}${Number(course.duration)}`.toLowerCase()
      return searchFields.includes(param.toLowerCase())
    })
    if (!hasCourses) {
      return  {comingSoon:true ,search:''}}else {return{
     comingSoon:false,
      search: param
    }}
     }),
   handleSort :(type) => set({
sortBy :type
   })

  
}))