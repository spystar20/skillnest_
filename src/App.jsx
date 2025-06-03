import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter , Route ,Router, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='bg-[#95b1ee] w-full h-screen'>
     <Navbar/>
    <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/about' element={<About/>}/>
 </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App