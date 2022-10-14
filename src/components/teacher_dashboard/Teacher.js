import React, { useEffect, useState } from 'react'
import TeacherLogin from './login/Teacherlogin'
import Body from './Body'
import Nav from './Nav'
import Teacherregister from './register/Teacherregister'

function Teacher() {
    const [login, setLogin] = useState(true)
    const [teacher, setTeacher] = useState(null)
    
    useEffect(() => {
      const data = localStorage.getItem('TEACH-A-STUDENT-TEACHER')
    if (data ) {
      setTeacher(JSON.parse(data))
    }
  },[])

  useEffect(() => {
    localStorage.setItem('TEACH-A-STUDENT-TEACHER', JSON.stringify(teacher))
    
  }, [teacher])
  return (
      <div>
          {teacher?<div>
              <Nav />
        <Body teacher={teacher } />
          </div> :
          <div>
          {login ? <TeacherLogin login={login } setLogin={setLogin} setTeacher={setTeacher} />:
                      <Teacherregister login={login} setLogin={setLogin} setTeacher={setTeacher} />}
              </div>}
    </div>
  )
}

export default Teacher