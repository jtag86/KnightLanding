import React from 'react'
import Blog from '../components/Blog/Blog'
import Faq from '../components/Faq/Faq'
import Features from '../components/Features/Features'
import Footer from '../components/Footer/Footer'
import Home from '../components/Home/Home'
import Pricing from '../components/Pricing/Pricing'

const HomePage = () => {
  return <>
    <Home />
    <Features />
    <Pricing />
    <Faq />
    <Blog />
    <Footer />
  </>
}

export default HomePage