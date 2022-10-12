import React, { useState } from 'react'
import books from '../images/books.png'

function Parentregister({setRegLog,regLog}) {
    
    const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [location, setLocation] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [errors, setErrors] = useState([])

  function handleSubmit(e) {
    e.preventDefault()
    // fetch('http://127.0.0.1:3000/signup', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     first_name: firstname,
    //     last_name: lastname,
    //     user_name: username,
    //     school: schoolName,
    //     form: form,
    //     avg_grade: averageGrade,
    //     trgt_grade: targetGrade,
    //     password: password,
    //     password_confirmation: passwordConfirmation,
    //   }),
    // }).then((res) => {
    //   if (res.ok) {
    //     res.json().then((student) => setStudent(student))
        
    //   } else {
    //     res.json().then((errorData) => setErrors(errorData.error))
    //   }
    // })
  }





  return (
    <div className="bg-slate-400 rounded-3xl rounded-tl-3xl  m-auto mt-[-28px] ">
      <div className="flex pt-2 pl-6 bg-black text-white pb-10  rounded-tr-3xl rounded-tl-3xl">
        <img src={books} alt="" className="h-8" />
        <h1 className="text-white italic pl-2 font-black font-mono">
          Teach-A-Student
        </h1>
        <h1 className="pl-[3em] text-3xl pt-8 font-bold font-serif">
          Parent Registration Form
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
         

          <label htmlFor="form">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>

          <label htmlFor="id">ID Number:</label>
          <input
            type="text"
            name="id"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
          />
                  <br></br>
                  <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          <br></br>
        </div>
        <div className="">
          

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
                  <input
            type="submit"
            value="Register"
            className=" bg-black p-2 cursor-pointer font-bold text-white rounded-xl transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300"
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

export default Parentregister