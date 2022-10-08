import React, { useEffect, useState } from 'react'
import icon from '../images/icon.png'
import teacher from '../images/face.jpg'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Body() {
    const [birds,setBirds] = useState([])
    useEffect(() => {
        fetch('https://cryptic-spire-94355.herokuapp.com/birds')
            .then(res => res.json())
            .then(data => setBirds(data))
    }, [])

    const percentage = 66
    return (
        <main className='grid grid-cols-3 '>

            <section className='  rounded-bl-3xl col-span-2 p-4 overflow-y-visible'>
                <div className='bg-slate-300 w-10/12 m-auto mt-12 h-[20vh] rounded-2xl drop-shadow-md relative'>
                    <h1 className='pt-8 pl-4 font-bold text-3xl tracking-wide'>Hello Dennis!</h1>
                    <p className=' pl-12 font-bold text-lg tracking-wide italic'>It's good to see you again</p>
                    <img className='absolute -bottom-2 left-[18em] h-[200px] w-[200px]' src={icon} alt='' />
                </div>

                <div className='bg-slate-300 w-10/12 m-auto mt-10 mb-10  rounded-2xl drop-shadow-md flex justify-around'>
                    <img className='rounded-full h-14 mt-2' src={teacher} alt='' />
                    <div>
                        <h1 className='font-black pt-4'>Current class</h1>
                        <p className='italic font-light'>By alexander Costa </p>
                    </div>
                    <div className='w-2/12'>
                        <CircularProgressbar className='h-[55px]  mt-2 mb-2 rounded-full  ' value={percentage} text={`${percentage}%`} />
                    </div>
                    <div>
                        <button className='bg-sky-400 mt-4 rounded-md p-2' >Continue</button>
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
                    {birds.map((bird) => {
                        return (
                                 <div className='bg-slate-100 w-10/12 m-auto mt-10  rounded-2xl  flex justify-around'>
                        <img className='rounded-full h-14 mt-2' src={teacher} alt='' />
                        <div>
                                    <h1 className='font-black pt-4'>{bird.name }</h1>
                            <p className='italic font-light'>By alexander Costa </p>
                        </div>
                        <div className='w-2/12'>
                            <CircularProgressbar className='h-[55px]  mt-2 mb-2 rounded-full  ' value={percentage} text={`${percentage}%`} />
                        </div>
                        <div>
                            <button className='bg-sky-400 mt-4 rounded-md p-2' >Continue</button>
                        </div>
                    </div> 
                        )
                    
                    })}

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
                </div>

                <div className='bg-slate-300 w-10/12 m-auto mt-10 h-[20vh] drop-shadow-md rounded-2xl'></div>

            </section>
        </main>
    )
}

export default Body