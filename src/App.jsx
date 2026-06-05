import React from 'react';
import Header from './companents/Header/Header';
import Hero from './companents/Hero/Hero';
import Sectionone from './companents/Sectionone/Sectionone';
import About from './companents/About/About';
import Sectiontheare from './companents/Sectiontheare/Sectiontheare';
import Sectionfoo from './companents/Sectionfoo/Sectionfoo';
import MasterClasses from './companents/MasterClasses/MasterClasses';
import WhyUs from './companents/WhyUs/WhyUs';
import Aksiya from './companents/Aksiya/Aksiya';
import CallbackForm from './companents/CallbackForm/CallbackForm';
import Footer from './companents/Footer/Footer';












const App = () => {
  return (
    <div>
  <Header/>
      <Hero/>
      <Sectionone/>
      <About/>
      <Sectiontheare/>
      <Sectionfoo/>
      <MasterClasses/>
      <WhyUs/>
      <Aksiya/>
      <CallbackForm/> 
      <Footer/>
    </div>
  );
};

export default App;