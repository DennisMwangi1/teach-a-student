import React from 'react'
import student1 from './images/student1.png'
import books from './images/books.png'
import book from './images/book.jpg'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import AnimatedText from 'react-animated-text-content';
function Body() {
    return (
        <main>
            <section className='flex  '>
                <div className=''>
                    
                    <h1 className='text-6xl font-sans font-black break-normal mt-40 ml-6 '>An <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative inline-block '>
                        <span className="relative text-white">excellence</span></span> <br></br> center for education.</h1>
                    <AnimatedText
                        type="words" 
                        animation={{
                            x: '200px',
                            y: '-20px',
                            scale: 1.1,
                            ease: 'ease-in-out',
                        }}
                        animationType="float"
                        interval={0.06}
                        duration={0.8}
                        tag="p"
                        className="animated-paragraph mt-6 ml-6 text-xl text-center tracking-wider italic"
                        includeWhiteSpaces
                        threshold={0.1}
                        rootMargin="20%"
                    >
                        Teach a student  offers student learning by students for students.
                    </AnimatedText>
                    <p className='mt-6 ml-6 text-lg text-center tracking-wide '>Enter your E-mail below to get started<br></br>and receive a brochure of our services.</p>
                    <form>
                        <input className=' text-base p-[12px] mr-0 ml-40 mt-6 rounded-full rounded-r-none  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                    invalid:border-yellow-500 invalid:text-slate-600
                    focus:invalid:border-yellow-500 focus:invalid:ring-yellow-500 ' type='email' placeholder='Enter your email...' />
                        <button className='text-base p-[11px] pb-[13px] mt-6 ml-0 rounded-full rounded-l-none bg-yellow-300 font-light hover:bg-yellow-400 ' value='Get Started'>Get Started</button>
                    </form>
                </div>
                <div className='relative  p-60 '>
                    <img className=' mt-10 border-dotted border-4 h-60 rounded-full absolute top-10 right-[16em] ' src={student1} alt='' />
                    <img className=' mt-10 border-dotted border-4 h-60 top-60 left-[20.1em] rounded-full absolute ' src={student1} alt='' />
                    <img className=' mt-10 border-dotted border-4 h-40  left-[12em] bottom-[5.2em] rounded-full absolute p-[1px] border-pink-400 ' src={book} alt='' />

                    <div className='absolute left-80 top-[8em]'>
                        <div className="mt-3 flex -space-x-2 ">
                            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                        </div>
                        <p className='italic tracking-wider '> <span className='ml-8 text-xl font-black'>100+ </span> <br></br>Active Students</p>
                    </div>
                    <div className='absolute bottom-2 left-14 '>

                        <div className='flex '>
                            <div class="z-40 absolute bottom-14  bg-sky-500 p-3 rounded-full">05</div>
                            <div className="z-30 absolute bottom-14 left-8 bg-red-500 p-3 rounded-full">04</div>
                            <div className="z-20 absolute bottom-14 left-[65px] bg-blue-500 p-3 rounded-full">03</div>
                        </div>

                        <p className='italic tracking-wider'> <span className='ml-12 text-xl font-black'>1K+ </span> <br></br>Members joined</p>
                    </div>
                </div>
            </section>

            <AnimationOnScroll animateIn="animate__bounceIn" animateOnce={true}>
                <section className='section2 flex justify-around mt-[120px]'>


                    <div className='flex '>
                        <img className='h-14  rounded-full bg-yellow-100 ' src={books} alt='' />
                        <p className='mt-2 ml-8 text-xl'>50+ Professional and expert<br></br> student teachers</p>
                    </div>

                    <div className='flex '>
                        <img className=' h-14  rounded-full bg-yellow-100 ' src={books} alt='' />
                        <p className='mt-2 ml-6 text-xl'>100+ Students rate <br></br> and review</p>
                    </div>

                </section>
            </AnimationOnScroll>

            <section className='mt-20'>
                <h2 className='text-center text-4xl font-bold tracking-wide'>Why choose Teach-A-Student?</h2>
                <p className='text-center mt-4 text-base italic tracking-wider'>We offer a wide range of tutoring options from teachers of the same age bracket as the student.<br></br>
                    This creates a condusive and less pressured environment for students to learn and ask all the questions they have to the teacher.</p>
                <div className='flex mt-20  justify-evenly'>
                <AnimationOnScroll animateIn="animate__fadeInLeftBig" animateOnce={true}>
                    <div className='flex-column  '>
                        <img className=' h-28 ml-[110px] rounded-full bg-yellow-100 ' src={books} alt='' />
                        <p className='mt-2  text-xl font-medium mb-2'>Connect with our student teachers</p>
                        <small className=' text-center italic font-light text-sm '>Connect and interact with student teachers with ease.<br></br>Learn and understand fundamental concepts at you individual pace</small>
                        </div>
                    </AnimationOnScroll>
                    
                    <AnimationOnScroll animateIn="animate__jello" animateOnce={true}>
                    <div className='flex-column justify-center  '>
                        <img className=' h-28 ml-[110px] rounded-full bg-yellow-100 ' src={books} alt='' />
                        <p className='mt-2 ml-6 text-xl'>Become a Student member</p>
                        <small className=' text-center italic font-light text-sm '>Join our large number of students benefiting from this<br></br> program.Education is key</small>
                    </div>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInRightBig" animateOnce={true}>
                    <div className='flex-column justify-center '>
                        <img className=' h-28 ml-[110px] rounded-full bg-yellow-100 ' src={books} alt='' />
                        <p className='mt-2 ml-6 text-xl'>Become a Student teacher</p>
                        <small className=' text-center italic font-light text-sm'>Join our group of student teachers empowering young minds<br></br> in the community around them</small>
                    </div>
                    </AnimationOnScroll>
                </div>
            </section>
           
        </main>
    )
}

export default Body