import React from 'react'
import { NavLink } from 'react-router-dom'
import books from '../images/books.png'

function Navbar() {
  return (
    <div className='relative '>
      <div className='flex justify-between backdrop-opacity-50  bg-white/30 pb-12'>
        <div className='flex'>
          <img src={books} alt='' className='h-24 mt-[-1em]'/>
        <h1 className='text-3xl font-black font-mono  pt-4 '> Teach-A-Student</h1> 
        </div>
        <div className='pt-12 mr-28 '>
        <NavLink to='/studentdashboard'> <button className='mr-20 bg-yellow-300  p-2 rounded-full font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-pink-500 to-yellow-500 duration-300'>Sign up to be a Student</button></NavLink>
        <NavLink to='/teacherdashboard'><button className='bg-yellow-300  p-2 rounded-full font-serif transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r from-pink-500 to-yellow-500 duration-300'>Sign up to be a Teacher</button></NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar