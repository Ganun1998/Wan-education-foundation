import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Program from '../../components/Program/Program'

const Service = () => {
  return (
    <>
    <Navbar />
   <div className='about-hero'>
        <div className='about-hero-text container'>
          <h1>Services We Offer</h1>
        </div>
      </div>
    <Program />
    <Footer />
    </>
  )
}

export default Service
