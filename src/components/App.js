import { useState } from 'react';
import '../App.css';
import Parent from './parent_dashboard/Parent';
// import Body from './landing-page/Body';
// import Footer from './landing-page/Footer';
// import Navbar from './landing-page/navbar/Navbar';
import Student from './student_dashboard/Student';

function App() {
  const [studentDashboard, setStudentDasboard] = useState(true)
  return (
    <>
     {/* <div className='home bg-gradient-to-b from-yellow-200 via-pink-400 to-yellow-300' >
       <Navbar className="fixed top-0 left-0 right-0"/>
       <Body />
       <Footer/>
     </div> */}
    <div className='bg-slate-100 pt-10 pb-10'>
      {studentDashboard ?
        <Student setStudentDashboard={setStudentDasboard} studentDashboard={studentDashboard}/> :
        <Parent setStudentDashboard={setStudentDasboard} studentDashboard={studentDashboard} />

      }
      {/* <Student/> */}
      </div>
    </>
  );
}

export default App;
