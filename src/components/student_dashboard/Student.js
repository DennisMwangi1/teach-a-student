import React, { useEffect, useState } from 'react'
import Nav from './nav/Nav'

import MainBody from './main/Body'
import Register from './Register/Register'
import Login from './Login/Login'

function Student({ studentDashboard, setStudentDashboard }) {
  const [regLog, setRegLog] = useState(true)
  const [student, setStudent] = useState(null)
  console.log(student)

  useEffect(() => {
      const data = localStorage.getItem('TEACH-A-STUDENT-STUDENT')
    if (data ) {
      setStudent(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('TEACH-A-STUDENT-STUDENT', JSON.stringify(student))
    
  }, [student])


  useEffect(() => {
    fetch("http://127.0.0.1:3000/me")
      .then((res) => {
        if (res.ok) {
        res.json().then((student)=>setStudent(student))
      }
    })
  },[])

 
  return (
    <>
      {student ?
        <div className='bg-white  w-9/12 m-auto   drop-shadow-md rounded-3xl '>
          <Nav setStudentDashboard={setStudentDashboard} studentDashboard={studentDashboard} />
          <MainBody student={student } />

        </div>
        :
        <div>
          {regLog ? <Login regLog={regLog} setRegLog={setRegLog} setStudent={setStudent} /> : <Register regLog={regLog} setRegLog={setRegLog} setStudent={setStudent} />}
        </div>

      }


    </>
  )
}

export default Student