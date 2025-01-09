import React from 'react'

const Navbar = () => {
  return (
    <nav className='border-2 border-red-500 h-[6rem] flex justify-between items-center px-4'>
        <div className="flex gap-16 h-full">
            <ul className='text-xl flex gap-40 h-full items-center justify-center'>
                <li>Home</li>
                <li>About </li>
                <li>Contact</li>
                <li>Service</li>
            </ul>
            <div className="flex items-center gap-2">
            <button className="bg-red-500 text-white py-2 px-4 rounded-md">Login</button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">Signup</button>

            </div>
        </div>
    </nav>
  )
}

export default Navbar







