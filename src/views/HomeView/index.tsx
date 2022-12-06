import React from 'react';
import Expectation from './Expectatiton';
import HeroBanner from './HeroBanner';
import Offer from './Offer';
import Teachers from './Teachers';

const HomeView: React.FC = () => {
  return (
    <>
      <HeroBanner/>
      <Expectation/>
      <Offer/>
      <Teachers/>
    </>
  );
};

export default HomeView;
