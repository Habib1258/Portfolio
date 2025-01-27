import React from 'react'
import Hero from '../skills_comp/Hero'
import Web from '../skills_comp/Web'
import Progr from '../skills_comp/Progr'
import Graph from '../skills_comp/Graph'
import Net from '../skills_comp/Net'
import Lan from '../skills_comp/Lan'
import Per from '../skills_comp/Per'
import { Helmet } from "react-helmet";


const Skills = () => {
  return (
    <>
      <Helmet>
        <title>Skills - My Portfolio</title>
        <meta name="description" content="Welcome to my skills page" />
      </Helmet>
      <Web />
      <Progr />
      <Graph />
      <Net/>
      <Lan/>
      <Per/>
      </>
  )
}

export default Skills