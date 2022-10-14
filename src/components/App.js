import {useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../App.css';
import Parent from './parent_dashboard/Parent';
import Body from './landing-page/Body';
import Footer from './landing-page/Footer';
import Navbar from './landing-page/navbar/Navbar';
import Student from './student_dashboard/Student';
import Teacher from './teacher_dashboard/Teacher';

function App() {
  const [studentDashboard, setStudentDasboard] = useState(true)

  




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className= 'home bg-gradient-to-b from-yellow-200 via-pink-400 to-yellow-300'>
              <Navbar className="fixed top-0 left-0 right-0"  />
              <Body />
              {/* <Footer /> */}
            </div>}>

          </Route>

          <Route path='/studentdashboard' element={
            <div className='bg-slate-100 pt-10 pb-10 '>
              {studentDashboard ?
                <Student setStudentDashboard={setStudentDasboard} studentDashboard={studentDashboard} /> :
                <Parent setStudentDashboard={setStudentDasboard} studentDashboard={studentDashboard} />

              }
            </div>}>
            
          </Route>
          <Route path='/teacherdashboard' element={
            <div className='bg-slate-100 pt-10 pb-10 '>
              <Teacher/>
            </div>
          }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
