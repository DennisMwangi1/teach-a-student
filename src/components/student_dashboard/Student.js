import React from 'react'
import Nav from './nav/Nav'

import MainBody from './main/Body'

function Student({studentDashboard,setStudentDashboard}) {
  return (
    <div className='bg-white  w-9/12 m-auto   drop-shadow-md rounded-3xl '>
      <Nav setStudentDashboard={setStudentDashboard} studentDashboard={studentDashboard}/>
      <MainBody />
      
    </div>
  )
}

export default Student