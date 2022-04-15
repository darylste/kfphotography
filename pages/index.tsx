import type { NextPage } from 'next';
import React from 'react';

import Hero from '../atomic/molecules/Hero/Hero.component';
import Header from '../atomic/organisms/Header/Header.component';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
    </React.Fragment>
  );
};

export default Home;
