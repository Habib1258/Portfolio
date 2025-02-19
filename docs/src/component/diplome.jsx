import React from 'react'
import ccna from '../assets/images/ccna.jpg'
import licence from '../assets/images/dip.jpg'

const Diplome = () => {
  return (
    <>
        <section className="bg-custom-gray-dark drop-shadow-2xl shadow-lime-400	 pb-1 lg:pb-16 w-full mx-auto overflow-x-hidden px-auto">
            <h1 className='text-2xl text-slate-100 font-bold ml-12 py-12 underline underline-offset-16 lg:ml-48 lg:text-4xl'>My Education :</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 2xl:px-48 '>
                <div className='grid place-content-center'>
                    <img src={ccna} className='w-48 h-48 pt-6 lg:w-96 lg:h-96 drop-shadow-2xl' alt="" />
                    <h1 className="text-white text-xl mx-auto text-center pt-7 mb-28 lg:text-3xl">Cisco Certified Network <br />Associate</h1>
                </div>
                <div className='grid place-content-center'>
                    <img src={licence} className='w-48 h-48 pt-6 lg:w-96 lg:h-96 drop-shadow-2xl' alt="" />
                    <h2 className="text-white text-xl text-center pt-7 mb-28 lg:text-3xl">Bachelor's degree</h2>
                </div>
            </div>
        </section>
    </>
  )
}

export default Diplome