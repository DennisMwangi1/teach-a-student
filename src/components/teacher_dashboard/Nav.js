import React from 'react'
import books from './images/books.png'

function Nav() {
 function logout() {
    localStorage.removeItem('TEACH-A-STUDENT-TEACHER');
    window.location.reload()
    
  }
  return (
    <div className='bg-slate-400 text-white w-9/12 m-auto pb-10  rounded-tr-3xl rounded-tl-3xl '>
      <div className='flex pt-2 pl-6'>
        <img src={books } alt="" className='h-6' />
        <h1 className='text-white italic pl-2 font-black font-mono '>Teach-A-Student</h1>
      </div>
      
      <div className='flex justify-between mt-2'>
        <h1 className=' text-black  pt-2 pl-6 text-[26px] font-serif font-bold tracking-wide'>Teacher Dashboard</h1>
        <div >
          <button className='mr-16 bg-slate-50 p-2 font-bold text-black rounded-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white duration-300' onClick={()=>logout()} >Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Nav