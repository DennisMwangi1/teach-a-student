import React from 'react'
// import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
          <h2>Teach a student</h2> 
          <a href='/'>Home</a>
          <a href='/dashboard'>Parent/Student Dashboard</a>
          <a href='/'>Teacher dashboard</a>
      <button>Log in</button>
      <button>Sign up</button>
          
    </div>
  )
}

export default Navbar