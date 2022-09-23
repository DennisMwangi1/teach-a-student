import React from 'react'
import student1 from './images/student1.jpg'
function Body() {
    return (
        <>
            <section className='section1'>
                <div>
                    <h1>An excellence center for education.</h1>
                    <p>Teach a student is the online learning platform that offers student learning by students for students</p>
                    <p>Have an enquiry?<br></br>Reach out to us via email below</p>
                    <input type='email' placeholder='Enter your email...' />
                    <input type='submit' value='Get Started' />
                </div>
                <div>
                    <img src={student1} />
                    <div>
                        {/* icon here */}
                        <p>Active students</p>
                    </div>
                    <div>
                        {/* icon here */}
                        <p>Members joined</p>
                    </div>
                </div>
            </section>

            <section className='section2'>
                <div>
                    {/* icon here */}
                    <p>Proffesional student teachers</p>
                </div>
                <div>
                    {/*  */}
                    <p>Students enrolled</p>
                </div>
            </section>

            <section className='section3'>
                <h2>Why choose Teach A Student?</h2>
                <p>We offer a wide range of tutoring options from teachers of the same age bracket as the student.<br></br>
                    This creates a condusive and less pressured environment for students to learn and ask all the questions they have to the teacher.</p>
                <div>
                    <div>
                        {/* icon here */}
                        <p>Connect with our student teachers</p>
                    </div>
                    <div>
                        {/* icon here */}
                        <p>Become a student member</p>
                    </div>
                    <div>
                        {/* icon here */}
                        <p>Become a teacher</p>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <h2>Analytics your daily,weekly and monthly activity</h2>
                    <p>We help track your progress as you have sessions with our student teachers</p>
                    {/* icon here (ticked box) */}
                    <p>Get updates</p>
                    {/* icon here (ticked box) */}
                    <p>Track activity</p>
                </div>
            </section>
        </>
    )
}

export default Body