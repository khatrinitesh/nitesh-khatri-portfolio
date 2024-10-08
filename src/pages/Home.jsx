import React from 'react';
import FixSocialIcon from '../components/SocialIcon/FixSocialIcon';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import ScrollToTopButton from '../components/ScrollBackTop/ScrollBackTop';

const Home = () => {
  return (
    <>
        <Hero/>
        <Projects/>
        <About/>
        <Contact/>
        <Footer/>
        <FixSocialIcon/>
        <ScrollToTopButton/>
    </>
  );
}

export default Home;
