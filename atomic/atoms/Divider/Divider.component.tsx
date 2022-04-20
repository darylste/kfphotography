import classNames from 'classnames';

import styles from './Divider.module.scss';

interface IDividerProps {
  direction: 'top' | 'right' | 'bottom' | 'left';
  color?: 'offWhite' | 'grey';
}

const Divider: React.FC<IDividerProps> = ({
  direction,
  color = 'offWhite',
}) => {
  return (
    <div className={classNames(styles[`divider-${direction}-${color}`])} />
  );
};

export default Divider;
