import React, { useState } from 'react'
import Body from '../parent_dashboard/Body'
import Nav from '../parent_dashboard/Nav'
import Parentlogin from './login/Parentlogin'
import Parentregister from './register/Parentregister'

function Parent({ setStudentDashboard, studentDashboard }) {
  const [regLog, setRegLog] = useState(true)
  return (
      <div className='bg-gray-300  w-9/12 m-auto   drop-shadow-md rounded-3xl '>
      {/* <Nav setStudentDashboard={setStudentDashboard} studentDashboard={studentDashboard } />
          <Body/> */}
      {regLog?<Parentlogin regLog={regLog} setRegLog={setRegLog}/> :<Parentregister regLog={regLog} setRegLog={setRegLog}/>}
     
      
    </div>
  )
}

export default Parent