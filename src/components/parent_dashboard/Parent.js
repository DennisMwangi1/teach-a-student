import React from 'react'
import Body from '../parent_dashboard/Body'
import Nav from '../parent_dashboard/Nav'

function Parent({setStudentDashboard,studentDashboard}) {
  return (
      <div className='bg-gray-300  w-9/12 m-auto   drop-shadow-md rounded-3xl '>
      <Nav setStudentDashboard={setStudentDashboard} studentDashboard={studentDashboard } />
          <Body/>
    </div>
  )
}

export default Parent