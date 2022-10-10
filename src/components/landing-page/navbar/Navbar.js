import React from 'react'
// import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='relative '>
    <div className='navbar backdrop-opacity-50  bg-white/30 pb-12'>
      
          <span className='text-3xl font-black font-mono mt-6 ml-0 '> Teach-A-Student</span> 
        <button className='bg-yellow-300  p-2 rounded-md font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-500 to-green-500 duration-300' >Log in as Student</button>
        <button className='bg-yellow-300  p-2 rounded-md font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-sky-500 to-green-500 duration-300' >Log in as Teacher</button>
        <button className='bg-yellow-300  p-2 rounded-full font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-pink-500 to-yellow-500 duration-300'>Sign up to be a Student</button>
        <button className='bg-yellow-300  p-2 rounded-full font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-pink-500 to-yellow-500 duration-300'>Sign up to be a Teacher</button>
        
      </div>
    </div>
  )
}

export default Navbar