import styles from './Header.module.scss';

interface IHeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({ children }) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
