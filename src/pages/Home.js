import React from 'react'
import CallToAction from '../components/CallToAction/CallToAction'
import Specials from '../components/Specials/Specials'
import Testimonials from '../components/Testimonials/Testimonials'
import About from '../components/About/About'

const Home = () => {
  return (
    <>
        <CallToAction />
        <Specials />
        <Testimonials />
        <About />
    </>
  )
}

export default Home