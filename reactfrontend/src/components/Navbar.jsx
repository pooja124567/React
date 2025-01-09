import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='border-2 border-blue-500 h-[6rem] flex justify-between items-center px-4'>
        <div className="flex gap-16 h-full">
            <ul className='text-xl flex gap-40 h-full items-center justify-center'>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/about'>About</Link></li>
                <li><Link to = '/contact'>Contact</Link></li>
                <li><Link to = '/service'>service</Link></li>
                

            

            </ul>
            <div className="flex items-center gap-2">
           <Link to =  '/login'> <button className="bg-red-500 text-white py-2 px-4 rounded-md">Login</button></Link>
           <Link to = '/signpage'><button className="bg-blue-500 text-white py-2 px-4 rounded-md">Signup</button></Link> 

            </div>
        </div>
    </nav>
  )
}

export default Navbar







