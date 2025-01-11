import React from 'react'
import { FaPenSquare } from "react-icons/fa"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom'


const Signup = () => {
  const[ischecked, setIsChecked] = useState(false);

    const handleCheckbox = (event)=>{
        setIsChecked(event.target.checked);
    };


  return (
    <div className='h-[100vh] w-full bg-slate-200 flex items-center justify-center'>
      <div className='h-[85%] w-[60%] shadow-pink-700  shadow-2xl bg-pink-400 rounded-md flex items-center justify-center flex-col gap-6'>
        <h1 className='text-4xl font-bold'>Sign up</h1>
        <div><FaPenSquare className='size-16 text-slate-800' /></div>

        <div className='relative'>
          <span className='absolute p-1 text-slate-700'><FaUser /></span>
          <input type="text" placeholder='Full Name' className='px-9' />
        </div>
        <div class='relative'>
          <span className='absolute p-1 text-slate-700'><MdEmail /></span>
          <input type="Email" placeholder='Email Address' className='px-9' />

        </div>

        <div className='relative'>
          <span className='absolute  p-1 text-slate-700'><RiLockPasswordLine/></span>
          <input type="password" placeholder='Password' className='px-9' />
        </div>
        <div className='relative'>
          <span className='absolute  p-1 text-slate-700'><FaSquarePhoneFlip/></span>
          <input type="number" placeholder='Phone' className='px-9' />
        </div>
        <div className='flex flex-row gap-9 text-sm text-slate-600'>
          <label className='flex gap-1 items-center'>
            <input type="checkbox"
             checked={ischecked}
              onChange={handleCheckbox} className='size-3'
            />
            I accept all the terms and conditions.
          </label>
          
        </div>
        <button className='bg-slate-500 rounded-lg text-white hover:bg-blue-800 w-[9rem] '>CreateAccount</button>
        <footer className='w-[15rem]'>
          <hr />
          <p className='flex items-center justify-center gap-3 bg-slate-800'>Alreay have an account? <Link to="/Login" className='hover:scale-125 transition-transform'></Link> </p>

        </footer>
















      </div>
    </div>
  )
}





export default Signup