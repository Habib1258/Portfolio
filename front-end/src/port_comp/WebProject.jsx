import Project from './project'
import saidal from '../assets/images/dash.jpg'
import buybay from '../assets/images/buybay.png'
import odelice from '../assets/images/od1.jpg'
import car from '../assets/images/car1.png'
import { Link } from 'react-router-dom'
import { FaCode } from "react-icons/fa6";

const WebProject = () => {
  return (
    <>
          <section className='bg-custom-dark w-full text-slate-300 py-3 lg:py-6 px-8 lg:px-48 place-content-center 2xl:px-[500px] lg:pb-20 '>
              <h1 className='float-left text-lg lg:text-3xl font-bold'>Web Projects</h1>
              <div className='grid w-full'>     
                  <Project>
                          <img src={ saidal} className='w-28 h-28 lg:w-72 lg:h-48 mt-4 mx-20 lg:ml-16 lg:rounded-lg drop-shadow-2xl ' alt='Project 1' />
                          <div className='pl-4 text-center'>
                            <h1 className='text-lg lg:text-3xl pt-4 pb-4 text-lime-400 underline underline-offset-8'> saidal website</h1>
                            <p className='text-sm lg:text-xl text-left pt-4 lg:pt-10'></p>
                          </div>
                          <div className=' lg:mt-20 '>
                            <Link to="https://github.com/Habib1258/Saidal-PFE" className='bg-lime-600 rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-lime-900 hover:outline-double outline-offset-4 outline-lime-400'>
                            <FaCode  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /></Link>
                          </div>
                  </Project>
                  <Project>
                    <img src={buybay} className='w-28 h-28 lg:w-72 lg:h-48 mt-4 mx-20 lg:ml-16 lg:rounded-lg drop-shadow-2xl' alt='Project 1' />
                    <div className='pl-4 text-center'>
                      <h1 className='text-lg lg:text-3xl pt-4 pb-4 text-lime-400 underline underline-offset-8'>Buybay WebSite</h1>
                      <p className='text-sm lg:text-xl text-left lg:pt-10'>Buybay is an e-commerce platform that facilitates consumer-to-consumer. </p>
                    </div>
                    <div className='justify-center items-center lg:mt-20 '>
                      <Link to="https://github.com/Habib1258/Buybay" className='bg-lime-600 rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-lime-900 hover:outline-double outline-offset-4 outline-lime-400'>
                      <FaCode  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /></Link>
                    </div>
                  </Project>
                  <Project>
                    <img src={odelice} className='w-28 h-28 lg:w-72 lg:h-48 mt-4 mx-20 lg:ml-16 lg:rounded-lg drop-shadow-2xl' alt='Project 1' />
                    <div className='pl-4 text-center'>
                      <h1 className='text-lg lg:text-3xl pt-4 pb-4 text-lime-400 underline underline-offset-8'>Odelice WebSite</h1>
                      <p className='text-sm lg:text-xl text-left lg:pt-10'>o'delice is a Pizzieria website that helps consumer to see or contact pizzeria admin through its website.</p>
                    </div >
                    <div className='justify-center items-center mt-10 lg:mt-24 '>
                      <Link to="https://github.com/Habib1258/o-delice-web" className='bg-lime-600 rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-lime-900 hover:outline-double outline-offset-4 outline-lime-400'>
                      <FaCode  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /></Link>
                    </div>
                </Project>
                
                  <Project>
                    <img src={car} className='w-28 h-28 lg:w-72 lg:h-48 mt-4 mx-20 lg:ml-16 lg:rounded-lg drop-shadow-2xl' alt='Project 1' />
                    <div className='pl-4 text-center'>
                      <h1 className='text-lg lg:text-3xl pt-4 pb-4 text-lime-400 underline underline-offset-8'>Car Location WebSite</h1>
                      <p className='text-sm lg:text-xl text-left lg:pt-10'>Car Rental website! This platform provides an easy and convenient way to rent a wide range of vehicles for your travel needs.</p>
                    </div>
                    <div className='justify-center items-center mt-10 lg:mt-24 '>
                      <Link to="https://github.com/Habib1258/Car-rental-web" className='bg-lime-600 rounded mx-20 mb-4 p-2 flex w-28 lg:w-48 text-sm lg:text-xl text-center justify-center gap-4 hover:bg-lime-900 hover:outline-double outline-offset-4 outline-lime-400'>
                      <FaCode  className='lg:font-bold pt-0 lg:pt-1 text-sm lg:text-2xl' /></Link>
                    </div>
                </Project>
            </div>
        </section>
    </>
  )
}

export default WebProject