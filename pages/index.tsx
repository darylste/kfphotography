import type { NextPage } from 'next';

import NavItem from '../atomic/atoms/NavItem/NavItem.component';
import Nav from '../atomic/molecules/Nav/Nav.component';
import Header from '../atomic/organisms/Header/Header.component';

const Home: NextPage = () => {
  return (
    <Header>
      <img
        src='https://via.placeholder.com/150x60'
        alt='logo'
        className='logo-img'
      />
      <Nav>
        <NavItem isActive>HOME</NavItem>
        <NavItem>ABOUT</NavItem>
        <NavItem>SERVICES</NavItem>
        <NavItem>GALLERY</NavItem>
        <NavItem>CONTACT</NavItem>
      </Nav>
    </Header>
  );
};

export default Home;
