import React from 'react'
import Hero from '../component/hero'
import About from '../component/about'
import Skills from '../component/Skills'
import Portfolio from '../component/portfolio'
import Diplome from '../component/diplome'
import Footer from '../component/footer'
import Effect from '../component/effect'

const HomePage = () => {
  return (
      <>
        <Hero />
        <About />
        <Effect />
        <Skills/>
        <Portfolio />
        <Diplome />
        <Footer />
      </>
  )
}

export default HomePage