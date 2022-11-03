import React from 'react'
import Navbar from '../components/HomePage/Navbar'
import Search from '../components/HomePage/Search'
import Categories from '../components/HomePage/Categories'
import AnimatedSec from '../components/HomePage/Categories'
import Location from '../components/HomePage/Location'
import Slides from '../components/HomePage/Slides'
import SocialMedia from '../components/HomePage/SocialMedia'
import Catalog from '../components/HomePage/Catalog'
import Footer from '../components/HomePage/Footer'




const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Search/>
    <Categories/>
    <Location/>
    <Slides/>
    <SocialMedia/>
    <Catalog/>
    <Footer/>
    </>
  )
}

export default HomePage