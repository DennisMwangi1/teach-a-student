import React, { useEffect, useState } from 'react'
import Body from '../parent_dashboard/Body'
import Nav from '../parent_dashboard/Nav'
import Parentlogin from './login/Parentlogin'
import Parentregister from './register/Parentregister'

function Parent({ setStudentDashboard, studentDashboard }) {
  const [parent,setParent]=useState(null)
  const [regLog, setRegLog] = useState(true)
  

  useEffect(() => {
      const data = localStorage.getItem('TEACH-A-STUDENT-PARENT')
    if (data ) {
      setParent(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('TEACH-A-STUDENT-PARENT', JSON.stringify(parent))
    
  }, [parent])
  return (
    <>
      {parent?
      <div className='bg-gray-300  w-9/12 m-auto   drop-shadow-md rounded-3xl '>
        <Nav setStudentDashboard={setStudentDashboard} studentDashboard={studentDashboard } />
        <Body parent={parent} />
      </div> 
      :
    <div>
      {regLog ? <Parentlogin regLog={regLog} setRegLog={setRegLog} setParent={setParent } setStudentDashboard={setStudentDashboard} studentDashboard={studentDashboard } /> :<Parentregister regLog={regLog} setRegLog={setRegLog} setParent={setParent } />}
     </div>
      }
      
    </>
  )
}

export default Parent