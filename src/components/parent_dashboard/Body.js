import React, { useState, useEffect } from 'react'
import axios from "axios";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Body() {
    const [parent, setParent] = useState([])
    const [teachers, setTeachers] = useState([])
    // console.log(parent)
    useEffect(() => {
        const loadParent = async () => {
            await axios.get("http://127.0.0.1:3000/parents/5")
                .then((res) => {
                    setParent(res.data);
                })
                .catch((err) => { console.log(err.response.data.error) });

        };
        const loadTeachers = async () => {
            await axios.get("http://127.0.0.1:3000/teachers")
                .then((res) => {
                    setTeachers(res.data);
                    // console.log(res.data)
                })
                .catch((err) => { console.log(err.response.data.error) });

        };
        loadParent();
        loadTeachers();

    }, [])

    return (
        <main className='grid grid-cols-3 '>

            <section className='  rounded-bl-3xl col-span-2 p-4 overflow-y-visible'>
                <div className='bg-slate-50 w-10/12 m-auto mt-12 pb-4 rounded-2xl drop-shadow-md relative'>
                    <h1 className='pt-8 pl-4 font-bold text-3xl tracking-wide font-serif'>Hello Mr {parent.last_name}!</h1>

                    <p className=' pl-12 font-bold text-lg tracking-wide italic font-serif'>It's good to see you.</p>
                    {/* <img className='absolute -bottom-2 left-[18em] h-[200px] w-[200px]' src={icon} alt='' /> */}
                </div>



                <h1 className='text-2xl font-bold tracking-wide mb-8 mt-12 font-serif'>Available Teachers</h1>
                <div className='flex justify-evenly font-bold mb-2 '>
                    <a href='/' className='text-lg hover:text-red-500 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 font-serif'>All teachers</a>
                    <a href='/' className='text-lg hover:text-red-500 transition ease-in-out delay-0  hover:-translate-y-1 hover:scale-110 font-serif'>Close to your location</a>
                </div>

                {/* render a component that will consist of teachers */}
                <div className=' overflow-hidden hover:overflow-y-scroll h-[40vh] bg-slate-50 rounded-2xl pb-10 drop-shadow-md'>
                    {teachers.map((teacher) => {
                        return (
                            <div className='bg-slate-100 w-10/12 m-auto mt-10  rounded-2xl  flex justify-around' key={teacher.id}>
                                <div>
                                    <h1 className='font-black pt-4'>Name: {teacher.first_name} {teacher.last_name}</h1>
                                    <p className='italic font-light'>Location: {teacher.location} </p>
                                </div>
                                <div className='w-2/12'>
                                    <CircularProgressbar className='h-[55px]  mt-2 mb-2 rounded-full  ' value={teacher.age} text={`Age: ${teacher.age}`} />
                                </div>
                                <div>
                                    <button className='bg-sky-400 mt-4 rounded-md p-2' >View</button>
                                </div>
                            </div>
                        )
                    })}

                </div>


            </section>

            <section className='  rounded-br-3xl  '>

                <h1 className='text-center pt-2 font-bold mt-8 font-serif tracking-wide text-lg '>Requested sessions</h1>
                <div className='bg-slate-50 w-10/12 m-auto mt-2 mb-2 h-[25vh] drop-shadow-md rounded-2xl overflow-hidden hover:overflow-y-scroll'>
                </div>

                <h1 className='text-center pt-2 font-bold mt-8 font-serif tracking-wide text-lg '>Accepted sessions</h1>
                <div className='bg-slate-50 w-10/12 m-auto mt-2 mb-2 h-[25vh] drop-shadow-md rounded-2xl overflow-hidden hover:overflow-y-scroll'>
                </div>





            </section>
        </main>
    )
}

export default Body