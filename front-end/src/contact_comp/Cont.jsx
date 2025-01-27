import React from 'react'

const Cont = () => {
  return (
      <>
          <section className='bg-custom-dark text-white pb-36'>
              <div className='grid-cols-1 pl-10 lg:pl-36'>
                <div className='grid grid-cols-1 lg:grid-cols-2 lg:pl-64 w-2/3 lg:gap-48'>
                    <div className='grid-cols-1 caret-lime-400 '>
                        <h1 className='text-xl lg:text-3xl text-lime-400 py-10 underline underline-offset-8'>Name</h1>
                        <input type="text" className='bg-white focus:caret-lime-400 text-black pl-8 w-full rounded-xl h-14 hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl' placeholder="Name" required/>
                        
                    </div>
                    <div className='grid-cols-1 '>
                        <h1 className='text-xl lg:text-3xl text-lime-400 py-10 underline underline-offset-8 '>Subject</h1>
                        <input type="text" className='bg-white text-black pl-8 w-full rounded-xl h-14 hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl' placeholder="Hire Me" required/>
                    </div>
                </div>
                <div className='mt-14 mr-4 lg:ml-64'>
                      <h1 className='text-xl lg:text-3xl text-lime-400 pb-10 underline underline-offset-8'>E-mail</h1>
                        <input type="text" className='bg-white text-black pl-8 w-11/12 lg:w-2/3 rounded-xl h-14 hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl' placeholder="Jane@gmail.com" required/>
                </div>
                <div className='mt-14 mr-4 lg:ml-64'>
                    <h1 className='text-xl lg:text-3xl text-lime-400 pb-10 underline underline-offset-8'>Message</h1>
                    <textarea className='bg-white text-black pl-8 w-11/12 lg:w-2/3  pt-2 h-64 rounded-xl hover:outline-double hover:outline-offset-4 placeholder-gray-500 text-lg lg:text-2xl' placeholder="Message..." required/>
                </div>
                <div className='mt-14 mr-4 lg:ml-64'>
                    <button className='bg-lime-700 rounded-xl w-11/12 lg:w-2/3  h-12 text-2xl font-bold hover:bg-lime-500 hover:outline-lime-500 hover:outline-double hover:outline-offset-4'> SEND</button>
                </div>
              </div>
          </section>  
    </>
  )
}

export default Cont