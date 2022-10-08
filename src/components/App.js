import '../App.css';
// import Body from './landing-page/Body';
// import Footer from './landing-page/Footer';
// import Navbar from './landing-page/navbar/Navbar';
import Student from './student_dashboard/Student';

function App() {
  return (
    // <div className='home bg-gradient-to-b from-yellow-200 via-pink-400 to-yellow-300' >
    //   <Navbar className="fixed top-0 left-0 right-0"/>
    //   <Body />
    //   <Footer/>
    // </div>
    <div className='bg-slate-200 pt-10 pb-10'>
      <Student/>
    </div>
  );
}

export default App;
