import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import AboutContent from '../components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="About Us" text="Full-Stack Developer with hands on experience building scalable, high performance web applications using React.js, Next.js, Python and GoLang" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About
