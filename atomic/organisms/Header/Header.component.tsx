import Logo from '../../atoms/Logo/Logo.component';
import Nav from '../../molecules/Nav/Nav.component';

import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;
