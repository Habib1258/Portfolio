import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6"

const About = () => {
  return (
    <>
      <section className='w-full mx-auto overflow-x-hidden px-auto'>
        <section className=" h-96 bg-custom-dark place-items-center 2xl:px-96">
            <div className='mx-16 relative lg:mx-96 lg:mr-96 place-items-center'>
                <ul className="flex bg-lime-600 py-3 px-1 gap-6 lg:gap-16 justify-center rounded-xl ">
                        <Link to="https://github.com/Habib1258" target="_blank"><FaGithub className='text-2xl text-white lg:ml-10 lg:text-5xl' /></Link>
                        <Link to="https://web.facebook.com/habib.mustapha.9210" target="_blank"><FaFacebookF className='text-2xl text-white lg:ml-10 lg:text-5xl' /></Link>
                        <Link to="https://www.linkedin.com/in/habib-mustapha-ab587a1b3/" target="_blank"><FaLinkedinIn className='text-2xl text-white lg:ml-10 lg:text-5xl' /></Link>
                        <Link to="https://x.com/abdesselemmust1?s=21" target="_blank"><FaXTwitter className='text-2xl text-white lg:ml-10 lg:text-5xl' /></Link>
                </ul>
        </div>
              
            <div className="text-lime-400 mx-8 mt-16 mb-64 lg:mx-48 ">
                <h2 className='text-2xl underline underline-offset-8 mb-16 decoration-lime-400 leading-6 md:text-4xl'>About Me</h2>
                <h2 className='text-slate-200 my-6 indent-16 text-sm md:text-xl '>My name is Mustapha El Habib Abdesselem. 
                    I attended Abderrahman Mira University for 2 years and M'hamed Bougara University for 1 year, 
                    where I gained programming skills in Python and C++. Additionally, I completed a networking course at ICT Towers and passed my CCNA exam. Along this journey, 
                    I discovered that I am a fast learner who thrives on challenges.</h2>
            </div>
        </section>
        </section>
    </>
  )
}

export default About