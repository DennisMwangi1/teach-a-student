import React from 'react'
import books from '../images/books.png'

function Nav({ studentDashboard, setStudentDashboard }) {
  
  function logout() {
    localStorage.removeItem('TEACH-A-STUDENT-STUDENT');
    window.location.reload()
    
  }

  return (
     <div className='bg-black text-white pb-10  rounded-tr-3xl rounded-tl-3xl '>
      <div className='flex pt-2 pl-6'>
        <img src={books } alt="" className='h-6' />
        <h1 className='text-white italic pl-2 font-black font-mono'>Teach-A-Student</h1>
      </div>
      
      <div className='flex justify-between mt-2'>
        <h1 className=' text-white  pt-2 pl-6 text-[26px] font-sans font-bold tracking-wide'>Student Dashboard</h1>
        <div >
          <button className='mr-16 bg-slate-500 p-2 text-white font-bold rounded-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300' onClick={()=>setStudentDashboard(!studentDashboard)}>Parent Login</button>
          <button className='mr-16 bg-slate-500 p-2 font-bold text-white rounded-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300' onClick={(e) =>logout()} >Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Nav