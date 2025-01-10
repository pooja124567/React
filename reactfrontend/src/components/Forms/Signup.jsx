import React from 'react'

const Signup = () => {
  return (
    <div className='h-[100vh] bg-pink-500 flex flex-col justify-center items-center gap-4'>


      <h1 className='text-4xlfont-bold'>Sign Up</h1>
      <form className='p-4 gap-5  flex flex-col w-[26rem] rounded-lg shadow-2xl'>
      <input className=' outline-none p-2 font-bold w-full border-2 border-black' type="Name" placeholder="Name:" />
      <input className=' outline-none p-2 font-bold w-full border-2 border-black' type="Email" placeholder="Email:" />
      <input className=' outline-none p-2 font-bold w-full border-2 border-black' type="Password" placeholder="Password:" />
      <p className='cursor-pointer text-green-800 ' >Remember Me </p>
      <button type='submit' className='p-2 px-4  bg-slate-400 rounded-md text-white hover:bg-slate-400'>Signup</button>
     < p className='cursor-pointer text-green-800'>I accept all the terms and conditions</p>

      </form>
      
      

    </div>
    
  )
}

export default Signup