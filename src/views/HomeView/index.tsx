import React from 'react';
import Expectation from './Expectatiton';
import HeroBanner from './HeroBanner';

const HomeView: React.FC = () => {
  return (
    <>
      <HeroBanner/>
      <Expectation/>
    </>
  );
};

export default HomeView;
