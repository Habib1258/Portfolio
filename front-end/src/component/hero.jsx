import React from 'react'
import prof from '../assets/images/proc.png'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  return (
    <>
        <section className=' bg-black drop-shadow-2xl flex h-1/2 2xl:pl-[200px] place-content-center'>
          <div id="home" className='grid grid-cols-1 lg:flex h-1/2'>
                  <div className="my-2 pt-10 pb-5 lg:pb-10 md:my-2 lg:pt-24">
                    <h1 className="text-white ml-8 lg:ml-24  font-cambria text-sm lg:text-3xl "><span className="text-lime-400">Hello, </span><br/>Welcome to My Portfolio</h1>
                    <h3 className="text-slate-200 mx-8 lg:mx-24 font-cambria text-sm lg:text-3xl  ">I'm <span className="text-lime-400">Abdesselem Mustpha El habib</span> <br></br>
                        a web developper, <br/>  a network engineer,<br/>and a Graphic designer.</h3>
                  </div>
                  <img className="mt-4 mx-6 lg:pt-10 h-auto w-auto lg:w-3/6 lg:h-2/3 lg:mr-28 lg:mt-5" src={ prof } alt="" />
          </div>   
          <div className='w-24 h-24 lg:w-72 lg:h-72  bg-gradient-to-r from-white to-lime-400 shadow-xl shadow-indigo-500 rounded-full rotate-12 z-0 absolute top-64 right-24 lg:top-28 lg:right-64 2xl:top-40 2xl:right-[900px] opacity-70 lg:opacity-10 blur-3xl'>

          </div>
        </section>

    </>

  )
}

export default Hero