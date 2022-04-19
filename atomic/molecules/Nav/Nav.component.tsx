import { useRouter } from 'next/router';

import NavItem from '../../atoms/NavItem/NavItem.component';

import styles from './Nav.module.scss';

const Nav: React.FC = () => {
  interface IPageRoutes {
    name: string;
    route: string;
  }
  const { asPath } = useRouter();
  const pages: IPageRoutes[] = [
    { name: 'home', route: '/' },
    { name: 'about', route: '/about' },
    { name: 'packages', route: '/packages' },
    { name: 'gallery', route: '/gallery' },
    { name: 'contact', route: '/contact' },
  ];
  return (
    <ul className={styles.nav}>
      {pages.map(({ route, name }) => (
        <NavItem key={name} href={route} isActive={asPath === route}>
          {name.toLocaleUpperCase()}
        </NavItem>
      ))}
    </ul>
  );
};

export default Nav;
