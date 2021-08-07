
import React from 'react';
import About from '../About/About';
import AddService from '../AddService/AddService';
import Contact from '../Contact/Contact';
import DedicatedSection from '../DedicatedSection/DedicatedSection';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Header></Header>
      <DedicatedSection></DedicatedSection>
      <About />
      <Services />
        <Review />
        <Contact />
      <Footer />
  
        </>
    );
};

export default Home;