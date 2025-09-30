import React from 'react'
import login from '../assets/login.png'
const Login = () => {
  return (
    <div className='w-full  h-[90vh]  home-bg flex font-[Outfit]'>
       <div className='home-bg  w-[40vw]  p-10'>
                   <div className='p-8 w-[100%] border rounded-2xl glass-card'>
         <form action="get" className='flex flex-col gap-5 '>
            <input type="text" className='border-1  py-2 rounded-lg px-5 outline-0' placeholder='Email'/>
            <input type="password" className='border-1  py-2 rounded-lg px-5 outline-0'  name="password" placeholder='Password' id="" />
            <button className=' px-5 py-2 bg-blue-900 outline-0 border-0 text-white text-lg font-semibold rounded-lg cursor-pointer hover:bg-blue-300 hover:scale-95 transition-all'>Continue</button>
            <span className='text-lg font-light  text-gray-400'> Don't have an account ?<span><a href="/span" className='text-blue-300 font-medium underline pl-1'>Sign Up</a></span></span>
         </form>
         </div>
       </div>
       <div className='w-[60vw] p-10 flex justify-center items-start bg-white rounded-bl-4xl rounded-tl-4xl'>
        <div className='flex flex-col justify-center items-center gap-5' >
           <span className='px-28'><h2 className='text-3xl p-3 text-center font-medium font-[Outfit]'>Log in to continue your learning journey</h2></span>
                 <img src={login} alt={login} className='w-[39vw] ' />

         </div>
       </div>
    </div>
  )
}

export default Login