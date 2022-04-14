import NavItem from '../../atoms/NavItem/NavItem.component';

import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  return (
    <ul className={styles.nav}>
      <NavItem isActive>HOME</NavItem>
      <NavItem>ABOUT</NavItem>
      <NavItem>SERVICES</NavItem>
      <NavItem>GALLERY</NavItem>
      <NavItem>CONTACT</NavItem>
    </ul>
  );
};

export default Nav;
