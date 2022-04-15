import classNames from 'classnames';

import styles from './Divider.module.scss';

interface IDividerProps {
  direction: 'top' | 'right' | 'bottom' | 'left';
}

const Divider: React.FC<IDividerProps> = ({ direction }) => {
  return  <div className={classNames(styles[`divider-${direction}`])}/>;
};

export default Divider;
