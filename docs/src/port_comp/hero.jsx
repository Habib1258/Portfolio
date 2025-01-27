import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <>
        <section className='bg-custom-dark text-white pt-16 lg:pt-24 lg:pl-48'>
              <div >
                  <div className='flex pb-2 pl-6'>
                        <Link to="/" className='flex'>
                            <IoMdArrowBack className='mr-2 text-sm lg:text-2xl text-lime-400' />
                            <h1 className='text-lime-400 text-sm lg:text-xl underline underline-offset-4'>Habib Mustapha</h1>
                        </Link>
                </div>
                <h1 className='text-white text-2xl lg:text-6xl pl-6 pb-20 font-bold'>All Projects </h1>
            </div>
        </section>
      </>
  )
}

export default Hero