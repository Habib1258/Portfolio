import { Link } from 'react-router-dom';
import logo from '../assets/images/logoc.png';

const Navbar = () => {
     
  return (
    <>
      <nav className='bg-black flex '>
        <Link className='cursor-pointer' to="/"><img className="h-auto w-36 lg:w-64 px-2 pt-4" src={ logo } alt="habib's logo" /></Link>
            <div className="list-none w-5/6">
                <ul className="w-full lg:w-5/6 flex pt-6  gap-2 md:gap-8 place-content-center ">
                    <Link className='cursor-pointer' to="/"><li className=" lg:py-6 lg:px-2 md:px-4 place-content-center 2xl:px-7 text-xs lg:text-xl 2xl:text-3xl text-end space-x-5 text-white hover:text-lime-400 hover:underline underline-offset-8 ">Home</li></Link>
                    <Link className='cursor-pointer' to="/Portfolio"><li className=" lg:py-6 lg:px-2 md:px-4 place-content-center 2xl:px-7 text-xs lg:text-xl 2xl:text-3xl  text-end space-x-5 text-white hover:text-lime-400 hover:underline underline-offset-8">Portfolio</li></Link>
                    <Link className='cursor-pointer' to="/skills"><li className=" lg:py-6 lg:px-2 md:px-4 place-content-center 2xl:px-7 text-xs lg:text-xl 2xl:text-3xl  text-end space-x-5 text-white hover:text-lime-400 hover:underline underline-offset-8">Skills</li></Link>
                    <Link className='cursor-pointer' to="/contact"><li className=" lg:py-6 lg:px-2 md:px-4 place-content-center 2xl:px-7 text-xs lg:text-xl 2xl:text-3xl  text-end space-x-5 text-white hover:text-lime-400 hover:underline underline-offset-8">Contact</li></Link>
                </ul>
            </div>
      </nav>
    </>
  )
}

export default Navbar