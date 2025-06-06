import React from 'react';
import HeroSection from '../components/Hero';
import Content from '../components/Content'
import Testimonial from '../components/Testimonial';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <Content />
      <Testimonial/>
    </div>
  );
};

export default Home;
