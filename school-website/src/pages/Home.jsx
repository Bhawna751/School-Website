import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero-section/Hero'
import AboutUs from '../components/about-us/AboutUs'
import Academics from '../components/academics/Academics'
import Admissions from '../components/admissions/Admissions'
import Faculty from '../components/faculty/Faculty'
import Students from '../components/students/Students'
import Gallery from '../components/gallery/Gallery'
import ContactUs from '../components/contact-us/ContactUs'

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <Hero/>
        <AboutUs/>
        <Academics/>
        <Admissions/>
        <Faculty/>
        <Students/>
        <Gallery/>
        <ContactUs/>
    </Fragment>
  )
}
export default Home
