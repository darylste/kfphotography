import classNames from 'classnames';

import styles from './NavItem.module.scss';

interface INavItemProps {
  isActive?: boolean;
}

const NavItem: React.FC<INavItemProps> = ({ children, isActive = false }) => {
  return (
    <li className={classNames(styles.navItem, isActive && styles.active)}>
      {children}
    </li>
  );
};

export default NavItem;
