import React from 'react'
import WhyChooseUs from './Homepage/WhyChooseUs'
import NewArrivals from './Homepage/NewArrivals'
import BestSellers from './Homepage/BestSeller'
import HeroSection from './Homepage/HeroSection'
import Financing from './Homepage/Financing'
import Footer from './Homepage/Footer'

const Homepage = () => {
  return (
    <div className='-mt-16'>
     <HeroSection />
      <BestSellers />
      <NewArrivals />
      <Financing />
      <WhyChooseUs />
      <Footer />
    </div>
  )
}

export default Homepage
