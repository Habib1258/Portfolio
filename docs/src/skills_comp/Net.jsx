import React from 'react'
import { MdNetworkWifi3Bar } from "react-icons/md";
import { SiOpensourcehardware } from "react-icons/si";
import { PiShareNetworkLight } from "react-icons/pi";
import { IoLayers } from "react-icons/io5";


const Net = () => {
  return (
      <>
        <section className='bg-custom-dark text-white pb-36 pl-10 lg:pl-48 grid grid-cols-1 place-content-center 2xl:px-[500px]'>
          <h1 className='float-left text-2xl lg:text-3xl  font-bold text-slate-400 pb-10'>My Networking skills :</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
              <div className='flex'>
                <IoLayers className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>OSI Model</h1>
              </div>
              <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                    
                </div>
              </div>
            </div>
            <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
              <div className='flex'>
                <PiShareNetworkLight className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Routing protocols</h1>
              </div>
              <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                    
                </div>
              </div>
            </div>
            <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
              <div className='flex'>
                <h1 className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl font-bold'>@</h1>
                <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>IPV4/IPV6</h1>
              </div>
              <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                    
                </div>
              </div>
            </div>
            <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
              <div className='flex'>
                <PiShareNetworkLight className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Switching protocols</h1>
              </div>
              <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-10/12 rounded-3xl mb-6 animate-growWidthMax'>
                    
                </div>
              </div>
            </div>
            <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
              <div className='flex'>
                <MdNetworkWifi3Bar className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>WAN/LAN technologies</h1>
              </div>
              <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-8/12 rounded-3xl mb-6 animate-growWidthMiddle'>
                    
                </div>
              </div>
            </div>
            <div className=' mr-12 border-2 border-lime-400 rounded-2xl'>
              <div className='flex'>
                <SiOpensourcehardware  className='mt-6 ml-7 lg:ml-14 text-lime-700 text-3xl'/>
                <h1 className='text-2xl text-slate-300 pl-4 py-6 rounded'>Hardware configuration</h1>
              </div>
              <div className='bg-slate-200 w-40 lg:w-2/3 rounded-3xl ml-6 lg:ml-12'>
                <div className='bg-lime-400 h-3 w-8/12 rounded-3xl mb-6 animate-growWidthMiddle'>
                    
                </div>
              </div>
            </div>
            
          </div>
      </section>
      </>
  )
}

export default Net