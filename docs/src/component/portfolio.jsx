import React from 'react'
import {Link } from 'react-router-dom'
import saidal from '../assets/images/dash.jpg'
import buybay from '../assets/images/buybay.png'
import odelice from '../assets/images/od1.jpg'
import car from '../assets/images/car1.png'
import dashboard from '../assets/images/dashboard.png'

const portfolio = () => {
  return (
    <>
        <section id="portfolio" className="bg-custom-dark pt-6 pb-32  2xl:px-96 lg:pt-16 w-full mx-auto overflow-x-hidden px-auto">
            <h1 className="text-2xl text-lime-400 mx-12 lg:text-4xl lg:ml-64 underline underline-offset-16">Portfolio</h1>
            <div className='justify-center  lg:ml-0'>
                <div className="pb-7 mx-16 mt-16 grid grid-cols-2 gap-y-2 gap-x-2 grid-flow-row lg:mx-64 lg:pb-16 md:grid-cols-2 lg:grid-cols-3 lg:px-[700]">
                    <div className="w-28 h-24 lg:w-80 lg:h-64">
                        <img className="w-28 h-24 lg:w-80 lg:h-64 drop-shadow-2xl" src={saidal} alt="" />
                    </div>
                    <div className="w-28 h-24 lg:w-80">
                        <img className="w-28 h-24 lg:w-80 lg:h-64 drop-shadow-2xl" src={buybay} alt="" />
                    </div>
                    <div className="w-28 h-24 lg:w-80">
                        <img className="w-28 h-24 lg:w-80 lg:h-64 drop-shadow-2xl" src={odelice} alt="" />
                    </div>
                    <div className="w-28 h-24 lg:w-80">
                        <img className="w-28 h-24 lg:w-80 lg:h-64 drop-shadow-2xl" src={car} alt="" />
                    </div>
                    <div className="w-28 h-24 lg:w-80">
                        <img className="w-28 h-24 lg:w-80 lg:h-64 drop-shadow-2xl" src={dashboard} alt="" />
                    </div>
                </div>
                <div className='flex items-center justify-center pt-24'>
                    <Link to="/Portfolio"><button className='text-center rounded w-32 text-black py-2 px-2 hover:outline outline-offset-2 hover:outline-2 hover:outline-lime-400  hover:bg-lime-400 bg-lime-700'>
                    View more</button></Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default portfolio