import React from 'react'
import logo1 from '../assets/images/tshirt.png'
import logo2 from '../assets/images/logo2.jpg'
import logo3 from '../assets/images/shap.jpg'
import logo5 from '../assets/images/logoc.png'
import logo4 from '../assets/images/studio.jpg'
import Bmw from '../assets/images/BMW.jpg'
import poster from '../assets/images/poster 1.png'
import poster2 from '../assets/images/gaza.png'
import Card from '../assets/images/cart.png'
import Card0 from '../assets/images/cart0.png'
import Card1 from '../assets/images/cart1.png'
import Card2 from '../assets/images/cart2.png'
import logo6 from '../assets/images/dim.jpg'
import logo7 from '../assets/images/lo.png'

const Graphic = () => {
  return (
    <>
        <section className='flex flex-col pl-20 lg:pl-48 bg-custom-dark text-slate-300 pb-auto place-content-center 2xl:px-[500px]'>
              <h1 className='float-left text-3xl font-bold pb-20'>Designs</h1>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 pr-16'>
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ logo1 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ logo2 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ logo3 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ logo4 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ logo5 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ logo6 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ logo7 } alt="logos" />
              </div>
              <h1 className='float-left text-2xl font-bold py-4'>Posters</h1>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 pr-16'>
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ Bmw } alt="logos" />
                  <img className='w-auto h-auto  rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ poster } alt="logos" />
                  <img className='w-auto h-auto  rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ poster2 } alt="logos" />
              </div>
              <h1 className='float-left text-2xl font-bold py-4'>Cards</h1>
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pr-16'>
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl hover:skew-y-24	 ' loading="lazy" src={ Card0 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ Card } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ Card1 } alt="logos" />
                  <img className='w-auto h-auto rounded-xl mb-10 drop-shadow-2xl ' loading="lazy" src={ Card2 } alt="logos" />
              </div>
        </section>  
    </>
  )
}

export default Graphic