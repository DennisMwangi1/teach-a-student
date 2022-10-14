import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';

function Teacher({ teacher, parent }) {
    const [requestSession, setRequestSession] = useState(false)
    const [requested, setRequested] = useState(false)
    const [filled, setFilled] = useState(true)
    const [date, setDate] = useState('')
    const [startTime, setStartTime] = useState('')
    const [finishTime, setFinishTime] = useState('')

    // console.log(parent.student)

    function handleRequestSession(e) {
        e.preventDefault()
        if (startTime === '' || finishTime === "" || date === "") {
            setFilled(false)
        } else {
            fetch("http://127.0.0.1:3000/requestsession", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    start_time: startTime,
                    end_time: finishTime,
                    date: date,
                    parent_id: parent.id,
                    teacher_id: teacher.id,
                    student:parent.student.id

                }),
            })
                .then(() => {
                    setRequested(true)
                    setRequestSession(false)
                })
        }
    }


    return (
        <>
            <div className='bg-slate-100 w-10/12 m-auto mt-10  rounded-2xl  flex justify-around' key={teacher.id}>
                <div>
                    <h1 className='font-black pt-4'>Name: {teacher.first_name} {teacher.last_name}</h1>
                    <p className='italic font-light'>Location: {teacher.location} </p>
                </div>
                <div className='w-2/12'>
                    <CircularProgressbar className='h-[50px]  mt-2 mb-2 rounded-full  ' value={teacher.age} text={`Age: ${teacher.age}`} />
                </div>
                <div>
                    <button className={requested ? 'disabled' : 'bg-sky-400 mt-4 rounded-md p-[2px] text-sm hover:bg-pink-300'} onClick={(e) => setRequestSession(!requestSession)} value={teacher.id} >{requested?"Session Requested":"Request session"}</button>
                </div>
            </div>
            {requestSession ?
                <>
                    {filled ? null : <p style={{ "color": "red" }} className='text-center'>Please fill in date, start time and finish time</p>}

                    <form className='ml-20 bg-slate-300 w-7/12 pl-4' onSubmit={handleRequestSession} >
                        <label htmlFor='date'>Enter session date and time:</label><br></br>
                        <input type="date" name='date' min="2022-09-08" max="2022-12-29" onChange={(e) => setDate(e.target.value)} /><br></br>

                        <label htmlFor='start'>Enter start time</label><br></br>
                        <input type="time" onChange={(e) => setStartTime(e.target.value)} /><br></br>

                        <label htmlFor='start'>Enter Finish time</label><br></br>
                        <input type="time" onChange={(e) => setFinishTime(e.target.value)} /><br></br>

                        <input type="submit" value="Request" className='bg-sky-500 p-1' />



                    </form>
                </>
                : null}

        </>
    )
}

export default Teacher