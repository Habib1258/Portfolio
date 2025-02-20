import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from 'react-router-dom';


const Web = () => {
  return (
    <>
      <section className='bg-custom-dark text-white pt-24  pl-10 lg:pl-48'>
                  <div >
                      <div className='flex pb-2 pl-0'>
                            <Link to="/" className='flex'>
                                <IoMdArrowBack className='mr-2 text-2xl text-lime-400' />
                                <h1 className='text-lime-400 text-xl underline underline-offset-4'>Habib Mustapha</h1>
                            </Link>
                    </div>
                    <h1 className='text-white text-5xl lg:text-6xl pl-0 lg:pl-6 pb-20 font-bold'>My Skills </h1>
                </div>
        </section>
      <section >
          <div className='w-[600px] h-72   bg-gradient-to-r from-cyan-500 to-purple-500 shadow-xl shadow-indigo-500 rounded-xl rotate-45 z-0 absolute  top-96 right-96 2xl:top-[400px] 2xl:right-[1400px] opacity-20 blur-3xl'>

          </div>
          
        <div className='w-72 h-72   bg-gradient-to-r from-cyan-500 to-purple-500 shadow-2xl shadow-indigo-500 rounded-full -rotate-45 z-0 absolute  top-[1800px] left-96 opacity-20 blur-3xl'>

        </div>
          <section className='bg-custom-dark  pb-36 pl-10 lg:pl-48 grid grid-cols-1 place-content-center 2xl:px-[500px]'>
            <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>My Web developement skills :</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
              <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
                <div className='flex'>
                  <FontAwesomeIcon icon={faHtml5} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>HTML:5</h1>
              </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-5/6 rounded-3xl mb-6 animate-growWidthMax'>
                  
                  </div>
                </div>
              </div>
              <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
                <div className='flex'>
                  <FontAwesomeIcon icon={faCss3} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>CSS</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                      
                  </div>
                </div>
              </div>
              <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
                <div className='flex'>
                  <FontAwesomeIcon icon={faReact} className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>React.js</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-4/6 rounded-3xl mb-6 animate-growWidthMiddle'>
                      
                  </div>
                </div>
              </div>
              <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
                <div className='flex'>
                  <RiTailwindCssFill className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>tailwind</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-5/6 rounded-3xl mb-6 animate-growWidthMax'>
                      
                  </div>
                </div>
              </div>
              <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
                <div className='flex'>
                  <SiDjango className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                  <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>django</h1>
                </div>
                <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                  <div className='bg-lime-400 h-3 w-3/5 rounded-3xl mb-6 animate-growWidthM'>
                      
                  </div>
                </div>
              </div>
              
            </div>
        </section>
        <div className='w-[500px] h-72   bg-gradient-to-r from-cyan-500 to-purple-500 shadow-xl shadow-indigo-500 rounded-xl rotate-12 z-0 absolute  top-[2800px] right-[1200px] opacity-25 blur-3xl'>

        </div>
      </section>
    </>
  )
}

export default Web