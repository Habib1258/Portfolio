import React from 'react'

const Project = ( {children} ) => {
  return (
    <>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 w-full lg:py-10 border lg:border-lime-400 rounded-2xl mt-20 drop-shadow-2xl'>
          {children}
        </div>
    </>
  )
}

export default Project