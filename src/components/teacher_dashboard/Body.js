import React from 'react'
import books from './images/books.png'
import Request from './Request'

function Body({ teacher }) {
    // console.log(teacher)
  return (
     <main className='grid grid-cols-3 w-9/12 m-auto bg-slate-200'>

            <section className='  rounded-bl-3xl col-span-2 p-4 overflow-y-visible'>
                <div className='bg-slate-50 w-10/12 m-auto mt-12 pb-4 rounded-2xl drop-shadow-md relative'>
                  <h1 className='pt-8 pl-4 font-bold text-3xl tracking-wide font-serif'>Hello Teacher {teacher.first_name }!</h1>

                    <p className=' pl-12 font-bold text-lg tracking-wide italic font-serif'>It's good to see you mwalimu.</p>
                    {/* <img className='absolute -bottom-2 left-[18em] h-[200px] w-[200px]' src={icon} alt='' /> */}
                </div>



                <h1 className='text-2xl font-bold tracking-wide mb-8 mt-14 font-serif'>Upcoming tutoring sessions</h1>
                <div className='flex justify-evenly font-bold mb-2 '>
                </div>

                {/* render a component that will consist of teachers */}
                <div className=' overflow-hidden hover:overflow-y-scroll h-[40vh] bg-slate-50 rounded-2xl pb-10 drop-shadow-md'>
                    {teacher && teacher.students.map((student) => {
                        return (
                            <div className='bg-slate-100 w-10/12 m-auto mt-10  rounded-2xl  flex justify-around' key={student.id}>
                                <img src={books} alt='' className='h-8 mt-4'/>
                                <div>
                                    <h1 className='font-black pt-4'>Student Name: {student.first_name} {teacher.last_name}</h1>
                                    <p className='italic font-light'>Student's school: {student.school} </p>
                                    <p className='italic font-light'>Student's Average Grade: {student.avg_grade} </p>
                                    <p className='italic font-light'>Student's Target Grade: {student.trgt_grade} </p>
                                </div>
                                
                                <div>
                                    <button className='bg-sky-400 mt-4 rounded-md p-[2px] text-sm' >View student</button>
                                </div>
                            </div>
                        )
                    })}
                  {teacher.students.length<1 && <div>
                        <h1 className='text-center mt-16 ml-[6em] font-black text-2xl before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-black relative inline-block'><span className='relative text-white p-2 '>OOPPS!!No sessions available</span></h1>
                        <h1 className='pt-10 text-center italic font-bold text-lg '>Dont worry.Parents will request sessions from you in no time!</h1>
                    </div>}

                </div>


            </section>

            <section className='  rounded-br-3xl  '>

                <h1 className='text-center pt-2 font-bold mt-8 font-serif tracking-wide text-lg '>Requested sessions</h1>
                <div className='bg-slate-50 w-10/12 m-auto mt-2 mb-2 h-[50vh] drop-shadow-md rounded-2xl overflow-hidden hover:overflow-y-scroll'>
                    {teacher && teacher.parents.map((parent) => (
                        <Request parent={parent} teacher={teacher } />
                    ))}
                  {teacher.parents.length<1 && <div>
                        <h1 className='pt-10  italic font-bold text-lg '>Session requests will show here</h1>
                    </div>}
                </div>






            </section>
        </main>
  )
}

export default Body