import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter , Route ,Router, Routes } from 'react-router-dom'
import Courses from './Pages/Courses'
import CourseDetails from './Pages/CourseDetails'
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
 </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App