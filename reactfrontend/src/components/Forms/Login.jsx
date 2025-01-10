import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";



const Login= () => {



  return (
    <div className='h-[100vh] bg-blue-500 flex flex-col justify-center items-center gap-4'>


      <h1 className='text-4xlfont-bold'>Login Form</h1>
      <span><FaRegUserCircle/></span>
      <form className='p-4 gap-5  flex flex-col w-[26rem] rounded-lg shadow-2xl'>
      <input className=' outline-none p-2 font-bold w-full border-2 border-black' type="Username" placeholder="Username:" /> 
      <input className=' outline-none p-2 font-bold w-full border-2 border-black' type="Password" placeholder="Password:" />
      <p className='cursor-pointer text-red-600 ' >Remember Me </p>
      <button type='submit' className='p-2 px-4  bg-slate-400 rounded-md text-white hover:bg-slate-400'>Login</button>
     < p className='cursor-pointer text-red-600'>Don't have an account? Register</p>

      </form>
      
      

    </div>
  )
}

export default Login