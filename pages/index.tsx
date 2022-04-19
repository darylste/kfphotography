import type { NextPage } from 'next';
import React from 'react';

import Hero from '../atomic/molecules/Hero/Hero.component';
import Banner from '../atomic/organisms/Banner/Banner.component';
import Header from '../atomic/organisms/Header/Header.component';
import Highlights from '../atomic/organisms/Highlights/Highlights.component';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Banner />
      <Highlights />
    </React.Fragment>
  );
};

export default Home;
