import React, { useState } from 'react'
// import books from '../images/books.png'
import parent from '../images/parent.png'

function Parentlogin({regLog,setRegLog,setParent,setStudentDashboard, studentDashboard }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error,setError]= useState([])
  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/parentlogin', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user_name: username,
        password
      })
    }).then((res) => {
      if (res.ok) {
        res.json().then((parent)=>setParent(parent))
      } else {
        res.json().then((errorData)=>setError(errorData.error))
      }
    })

    setUsername('')
    setPassword('')
    e.target.reset()
    
  }

  
  return (
    <div className='h-[75vh]  w-8/12 m-auto grid grid-cols-2 rounded-md'>
      <div className=' pt-20 pl-20 rounded-tl-3xl rounded-bl-3xl bg-black'>
        <h1 className=''>Parent Login</h1>
        <img src={parent} alt="" className='h-[7em] m-auto pr-20' />
        <h1 className='text-white italic pl-2 pt-8 text-3xl font-black font-mono'>Teach-A-Student Parent</h1>
        <p className='text-white text-center  w-3/4 pt-2 italic font-light'>Student learning by students for students</p>
      </div>
      <div className='pt-[6em] pl-14 bg-slate-400 rounded-tr-3xl rounded-br-3xl'>
        {error.length > 0 && (
              <p className='text-red-500 pb-4 font-bold italic' key={error}>{error}</p>
        )}
        <form onSubmit={handleSubmit} className=''>
          <label htmlFor='username' className=' ' required>User Name:</label>
          <input type='text' value={username} onChange={(e)=>setUsername(e.target.value) } /><br></br>
          <label htmlFor='password' className='' required>Password: </label>
          <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)} /><br></br>
          
          <input type="submit" value="Log in"  className='float-right bg-white p-2 cursor-pointer font-bold text-black rounded-xl transition ease-in-out delay-50 hover:bg-black hover:text-white hover:-translate-y-1 hover:scale-110  duration-300'/><br></br>
        </form>

        <div>
        <p className='pt-4 font-light  tracking-wide italic'>Don't have an account?</p>
        <button className=' text-blue-500 font-semibold text-lg hover:text-purple-500' onClick={() => setRegLog(!regLog)}>Register</button>
        </div>
        <div className='pt-4'>
          <p className='font-light'>Back to <span className='font-semibold text-white hover:text-black hover:cursor-pointer' onClick={()=>setStudentDashboard(!studentDashboard)}>StudentDashboard</span>...</p>
        </div>
      </div>
    </div>
  )
}

export default Parentlogin