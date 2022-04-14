import styles from './Nav.module.scss';

interface INavProps {
  children?: React.ReactNode;
}

const Nav: React.FC<INavProps> = ({ children }) => {
  return <ul className={styles.nav}>{children}</ul>;
};

export default Nav;
