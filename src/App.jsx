import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter , Route ,Router, Routes } from 'react-router-dom'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
import CoursePlayer from './Pages/CoursePlayer'
import Login from './AuthPages/Login'
const App = () => {
  return (
    <div className='bg-[#95b1ee] w-full h-screen'>
    
    <BrowserRouter>
     <Navbar/>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/courses' element={<Courses/>}/>
   <Route path='/courses/:course_name' element={<CourseDetails/>}/>
     <Route path='/courses/lecture/:course_name' element={<CoursePlayer/>}/>
     <Route path='/login' element={<Login/>}/>
 </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App