import Nav from '../../molecules/Nav/Nav.component';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Image
        src='https://via.placeholder.com/150x60'
        alt='logo'
        width={150}
        height={60}
        priority
      />
      <Nav />
    </header>
  );
};

export default Header;
