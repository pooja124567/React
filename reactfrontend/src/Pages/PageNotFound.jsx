import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
  return (
    <>
    <div className='flex h-[100vh] w-full justify-center items-center flex-col gap-4'>
        <h1 className='text-6xl font-bold'>Page Not Found</h1>

       <Link to = '/'><button className='p-2 px-4 bg-blue-800 rounded-md'>go to home</button></Link>
      

    </div>
    </>
  )
}

export default PageNotFound