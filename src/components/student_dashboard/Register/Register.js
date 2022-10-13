import React, { useState } from 'react'
import books from '../images/books.png'

function Register({ regLog, setRegLog, setStudent }) {
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [username, setUsername] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [form, setForm] = useState('')
  const [averageGrade, setAverageGrade] = useState('')
  const [targetGrade, setTargetGrade] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://127.0.0.1:3000/studentsignup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: firstname,
        last_name: lastname,
        user_name: username,
        school: schoolName,
        form: form,
        avg_grade: averageGrade,
        trgt_grade: targetGrade,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((student) => {
          setStudent(student)
          localStorage.setItem('STUDENT', JSON.stringify(student.id))
        })
        
        
      } else {
        res.json().then((errorData) => setErrors(errorData.error))
      }
    })
  }

  return (
    <div className="bg-slate-400 rounded-3xl rounded-tl-3xl w-9/12 m-auto mt-[-28px] ">
      <div className="flex pt-2 pl-6 bg-black text-white pb-10  rounded-tr-3xl rounded-tl-3xl">
        <img src={books} alt="" className="h-8" />
        <h1 className="text-white italic pl-2 font-black font-mono">
          Teach-A-Student
        </h1>
        <h1 className="pl-[3em] text-3xl pt-8 font-bold font-serif">
          Student Registration Form
        </h1>
      </div>
      {errors.length > 0 && (
        <ul style={{ color: 'red' }} className='pl-4'>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <form className="pt-10 text-center flex p-2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={firstname}
            onChange={(e) => setfirstname(e.target.value)}
            required
          />
          <br></br>

          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={lastname}
            onChange={(e) => setlastname(e.target.value)}
            required
          />
          <br></br>

          <label htmlFor="user_name">User Name:</label>
          <input
            type="text"
            name="user_name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br></br>
        </div>
        <div className="">
          <label htmlFor="school_name">School Name:</label>
          <input
            type="text"
            name="school_name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            required
          />
          <br></br>

          <label htmlFor="form">Form/Class:</label>
          <input
            type="text"
            name="form"
            value={form}
            onChange={(e) => setForm(e.target.value)}
          />
          <br></br>

          <label htmlFor="avg_grade">Average Grade:</label>
          <input
            type="text"
            name="avg_grade"
            value={averageGrade}
            onChange={(e) => setAverageGrade(e.target.value)}
            required
          />
          <br></br>
        </div>
        <div className="">
          <label htmlFor="trgt_grade">Target Grade:</label>
          <input
            type="text"
            name="trgt_grade"
            value={targetGrade}
            onChange={(e) => setTargetGrade(e.target.value)}
            required
          />
          <br></br>

          <label htmlFor="password">Password: </label>
          <br></br>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br></br>

          <label htmlFor="confirm_password">Confirm Password:</label>
          <input
            type="password"
            name="confirm_password"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <br></br>
        </div>
        <div>
          <input
            type="submit"
            value="Register"
            className="mt-60 bg-black p-2 cursor-pointer font-bold text-white rounded-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300"
          />
          <br></br>
        </div>
      </form>
      <div>
        <p className="pl-8 font-light text-lg tracking-wide italic">
          Already have an account?
        </p>
        <button
          className="pl-24 text-blue-500 font-semibold text-lg hover:text-purple-500"
          onClick={() => setRegLog(!regLog)}
        >
          Log In
        </button>
      </div>
    </div>
  )
}

export default Register
