import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { useState } from 'react';




const Login= () => {
  const [ischecked, setIsChecked] = useState(false);

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const[showpassword, setShowPassword] = useState(false);

  const handletogglePassword = () =>{
    setShowPassword(!showpassword);
  };



  return (
    <div className='h-[100vh] w-full bg-slate-200 flex items-center justify-center'>
       <div className='h-[85%] w-[60%] shadow-blue-700  shadow-2xl bg-blue-400 rounded-md flex items-center justify-center flex-col gap-6'>
      <h1 className='text-4xl font-bold'>Login Form</h1>
      <div><FaUserCircle className='size-16 text-slate-800'/></div>
      <form className='p-4 gap-5  flex flex-col w-[26rem] rounded-lg shadow-2xl'>
        <div className='relative'>
        <span className='absolute p-1 text-slate-700'><FaUser/></span>
      <input type="text" placeholder='Username' className='px-9' /> 
      </div>
      <div className='relative flex items-center'>
      <span className='absolute  p-1 text-slate-700'><RiLockPasswordLine /></span>
      <input type="password" placeholder='Password' className='px-9' />
      </div>
      <div className='flex flex-row gap-9 text-sm text-slate-600'>
        <label className='flex  items-center'>
          <input type="checkbox"
          checked={ischecked} 
          onChange={handleCheckbox} className='size-4 '
          />
          Remember Me
        </label>
        <p>Forgot Password</p>
      </div>
      <button className='bg-slate-500 rounded-lg text-white hover:bg-blue-800 w-[5rem] '>Login</button>
      <footer className='w-[15rem]'>
        <hr/>
        <p className='flex items-center justify-center gap-3 bg-slate-800'>Don't have an account? </p>

      </footer>

    

      

      

          
      
      
      

      </form>
      
      

    </div>
    </div>
  )
}

export default Login