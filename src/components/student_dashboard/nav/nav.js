import React from 'react'

function aside() {
  return (
    <div className='bg-zinc-900 text-white  rounded-tr-3xl rounded-tl-3xl h-[20vh]'>
      <h1 className='pt-2 pl-4 italic'>Teach-A-Student</h1>
      <div className='flex justify-between'>
        <h1 className='pt-2 pl-6 text-xl font-bold tracking-wide'>Student Dashboard</h1>
        <div >
          <button className='mr-16 bg-slate-500 p-2 font-bold rounded-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300'>Parent Login</button>
          <button className='mr-16 bg-slate-500 p-2 font-bold rounded-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300'>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default aside