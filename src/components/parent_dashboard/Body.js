import React, { useState, useEffect } from 'react'
import axios from "axios";

import 'react-circular-progressbar/dist/styles.css';
import family from './images/family1.png'
import Teacher from './Teacher';

function Body({parent}) {
    const [teachers, setTeachers] = useState([])
    console.log(parent)
    
    

    useEffect(() => {
       
        const loadTeachers = async () => {
            await axios.get("http://127.0.0.1:3000/teachers")
                .then((res) => {
                    setTeachers(res.data);
                })
                .catch((err) => { console.log(err.response.data.error) });

        };
        loadTeachers();

    }, [])

   
    return (
        <main className='grid grid-cols-3 '>

            <section className='  rounded-bl-3xl col-span-2 p-4 overflow-y-visible'>
                <div className='bg-slate-50 w-10/12 m-auto mt-12 pb-4 rounded-2xl drop-shadow-md relative'>
                    <h1 className='pt-8 pl-4 font-bold text-3xl tracking-wide font-serif'>Hello  {parent.first_name}!</h1>

                    <p className=' pl-12 font-bold text-lg tracking-wide italic font-serif'>It's good to see you.</p>
                    <img className='absolute -top-[2.9em] left-[18em] h-40 ' src={family} alt='' />
                </div>



                <h1 className='text-2xl font-bold tracking-wide mb-8 mt-12 font-serif'>Available Teachers</h1>
                <div className='flex justify-evenly font-bold mb-2 '>
                    <a href='/' className='text-lg hover:text-red-500 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 font-serif'>All teachers</a>
                    <a href='/' className='text-lg hover:text-red-500 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 font-serif'>Close to your location</a>
                </div>

                {/* render a component that will consist of teachers */}
                <div className=' overflow-hidden hover:overflow-y-scroll h-[40vh] bg-slate-50 rounded-2xl pb-10 drop-shadow-md'>
                    {teachers.map((teacher) => {
                        return <Teacher teacher={teacher} parent={parent} key={teacher.id } />
                    })}

                </div>


            </section>

            <section className='  rounded-br-3xl  '>

                <h1 className='text-center pt-2 font-bold mt-8 font-serif tracking-wide text-lg  '>Requested sessions</h1>
                <div className='bg-slate-50 w-10/12 m-auto mt-2 mb-2 h-[25vh] drop-shadow-md rounded-2xl overflow-hidden hover:overflow-y-scroll'>
                    {parent && parent.teachers.map((teacher) => (
                        <div className='bg-slate-300 m-2 mb-2 m-auto  rounded-2xl' key={teacher.id}>
                                <div className='pb-2'>
                                    <h1 className='font-black pt-4 pl-4 text-sm'>Teacher's Name:<br></br> {teacher.first_name} {teacher.last_name}</h1>
                                    <p className='italic font-light pl-2 text-sm'><span className='font-normal'>Location:</span><br></br> {teacher.location} </p>
                                </div>
                                
                            </div>
                    ))}
                </div>

                <h1 className='text-center pt-2 font-bold mt-8 font-serif tracking-wide text-lg '>Accepted sessions</h1>
                <div className='bg-slate-50 w-10/12 m-auto mt-2 mb-2 h-[25vh] drop-shadow-md rounded-2xl overflow-hidden hover:overflow-y-scroll'>
                </div>





            </section>
        </main>
    )
}

export default Body