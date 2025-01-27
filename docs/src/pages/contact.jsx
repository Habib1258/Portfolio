import React from 'react'
import Hero from '../contact_comp/Hero'
import Email from '../contact_comp/Email'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - My Portfolio</title>
        <meta name="description" content="Welcome to my homepage" />
      </Helmet>
      <Email />
      </>
  )
}

export default Contact