import React from 'react'
import icon from '../images/icon.png'
import books from '../images/books.png'
import teacher from '../images/face.jpg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Body({student}) {
 
    console.log(student)
    const date =new Date().toLocaleString()
    const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    return (
        <main className='grid grid-cols-3 '>

            <section className='  rounded-bl-3xl col-span-2 p-4 overflow-y-visible'>
                <div className='bg-slate-300 w-10/12 m-auto mt-12 h-[20vh] rounded-2xl drop-shadow-md relative'>
                    <h1 className='pt-8 pl-4 font-bold text-3xl tracking-wide'>Hello {student.first_name}!</h1>
                    <p className=' pl-12 font-bold text-lg tracking-wide italic'>It's good to see you</p>
                    <img className='absolute -bottom-2 left-[18em] h-[200px] w-[200px]' src={icon} alt='' />
                </div>

                <div className='bg-slate-300 w-10/12 m-auto mt-10 mb-10  rounded-2xl drop-shadow-md flex justify-around'>
                    <img className='rounded-full h-14 mt-6' src={teacher} alt='' />
                    <div>
                        <h1 className='font-black pt-4'>Today is {days[new Date().getDay()]} !!</h1>
                        <p className='pt-2'>Almost time to call it a week</p>
                        <h1 className='font-black pt-2 pb-2'>{date }</h1>
                    </div>
                    <div className='w-3/12'>
                        <CircularProgressbar className='h-[70px]  mt-2 mb-2   ' value={new Date().getDay() * (100/7)} text={`Done ${Math.round(new Date().getDay() * 100/7)}%`} />
                    </div>
                    
                </div>

                <h1 className='text-2xl font-bold tracking-wide mb-8 '>Courses</h1>
                <div className='flex justify-evenly font-bold mb-2 '>
                    <a href='/' className='hover:text-red-500 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110'>All classes</a>
                    <a href='/' className='hover:text-red-500 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110'>Upcoming classes</a>
                    <a href='/' className='hover:text-red-500 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110'>Past classes</a>
                </div>

                {/* render a component that will consist of the students upcoming sessions */}
                <div className=' overflow-hidden hover:overflow-y-scroll h-[40vh] bg-slate-300 rounded-2xl pb-10 drop-shadow-md'>
                     {student && student.teachers.map((teacher) => {
                        return (
                                 <div key={teacher.id} className='bg-slate-100 w-10/12 m-auto mt-10  rounded-2xl  flex justify-around'>
                        {/* <img className='rounded-full h-14 mt-2' src={teacher} alt='' /> */}
                        <div>
                            <h1 className='font-black pt-4'>Name: {teacher.first_name} {teacher.last_name }</h1>
                                    <p className='italic font-light'>From: {teacher.location}</p>
                                    <p className='italic font-bold font-serif'>Strong subjects:</p>
                                    <ul className='flex  '>
                                    {teacher.strong_subjects.map((subject) => (
                                        
                                        <li key={subject} className='text-sm italic font-normal font-serif mt-[2px] mb-2 pl-2'>{subject}</li>
                                    ))}
                                    </ul>
                        </div>
                        <div className='w-2/12'>
                            <CircularProgressbar className='h-[55px]  mt-2 mb-2 rounded-full  ' value={teacher.age} text={`Age ${teacher.age}`} />
                        </div>
                        <div>
                            <button className='bg-sky-400 mt-4 rounded-md p-2' >View</button>
                        </div>
                    </div> 
                        )
                    
                     })} 
                    {student.teachers.length<1 && <div>
                        <h1 className='text-center mt-16 ml-[6em] font-black text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block'><span className='relative text-white p-2 '>OOPPS!!No sessions available</span></h1>
                        <h1 className='pt-10 text-center italic font-bold text-lg '>Please ask your parent to login or register to be able to book sessions for you.</h1>
                    </div>}

                </div>


            </section>

            <section className='  rounded-br-3xl  '>
                <div className='grid grid-cols-2'>
                    <div className='bg-slate-300 w-10/12 m-auto mt-10 h-[15vh] drop-shadow-md rounded-2xl flex'>
                        <h1 className='font-bold text-6xl tracking-[-12px] pr-5 pt-4 pl-2'>5</h1>
                        <h1 className='pt-6 font-light italic'>Sessions completed</h1>
                    </div>
                    <div className='bg-slate-300 w-10/12 m-auto mt-10 h-[15vh] drop-shadow-md rounded-2xl flex'>
                        <h1 className='font-bold text-6xl tracking-[-12px] pr-5 pt-4 pl-2'>8</h1>
                        <h1 className='pt-6 font-light italic'>Sessions in progress</h1>
                    </div>
                </div>

                <div className='bg-slate-300 w-10/12 m-auto mt-10 h-[50vh] drop-shadow-md rounded-2xl'>
                    <h1 className='text-center tracking-wide text-lg font-black pt-2'>Profile Section</h1>
                    <p className='p-[5px] font-semibold font-serif '>Firts Name:<span className='italic font-light pl-2'>{student.first_name }</span></p>
                    <p className='p-[5px] font-semibold font-serif '>Last Name:<span className='italic font-light pl-2'>{student.last_name }</span></p>
                    <p className='p-[5px] font-semibold font-serif '>User Name:<span className='italic font-light pl-2'>{student.user_name }</span></p>
                    <p className='p-[5px] font-semibold font-serif '>School:<span className='italic font-light pl-2'>{student.school }</span></p>
                    <p className='p-[5px] font-semibold font-serif '>Form:<span className='italic font-light pl-2'>{student.form }</span></p>
                    <p className='p-[5px] font-semibold font-serif '>Average Grade:<span className='italic font-light pl-2'>{student.avg_grade }</span></p>
                    <p className='p-[5px] font-semibold font-serif '>Target Grade:<span className='italic font-light pl-2'>{student.trgt_grade }</span></p>
                </div>

                <div className='bg-slate-300 w-10/12 m-auto mt-10 h-[20vh] drop-shadow-md rounded-2xl'>
                    <div className='flex pt-6 pl-12'>
        <img src={books } alt="" className='h-6' />
        <h1 className='text-black italic pl-2 font-black font-mono '>Teach-A-Student</h1>
                    </div>
                    <h1 className='text-black italic text-center pt-4 font-black font-mono text-pink-500 '>Spread the word.We empower,change and transform</h1>
                </div>

            </section>
        </main>
    )
}

export default Body