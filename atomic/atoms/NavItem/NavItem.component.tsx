import classNames from 'classnames';
import Link from 'next/link';

import styles from './NavItem.module.scss';

interface INavItemProps {
  isActive?: boolean;
  href: string;
}

const NavItem: React.FC<INavItemProps> = ({
  children,
  isActive = false,
  href,
}) => {
  return (
    <li className={classNames(styles.navItem, isActive && styles.active)}>
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default NavItem;
