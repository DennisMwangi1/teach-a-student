import React from 'react'

function Request({ parent, teacher }) {
    
    function handleAccept() {
        fetch("http://127.0.0.1:3000/acceptsession", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    teacher_id: teacher.id,
                }),
            })
                .then(() => {
                    // setRequested(true)
                    // setRequestSession(false)
                })
    }
    return (
        <div className='bg-slate-300 m-2 mb-2 m-auto  rounded-2xl' key={parent.id}>
            <div className='pb-2'>
                <h1 className='font-black pt-4 pl-4 text-sm'>Parent's Name: {parent.first_name} {parent.last_name}</h1>
                <p className='italic font-light pl-2 text-sm'><span className='font-normal'>Location:</span>{parent.location} </p>
                <button className='bg-sky-300 rounded-full p-1 ml-40 text-sm ' onClick={()=>handleAccept()}>Accept</button>
            </div>

        </div>
    )
}

export default Request