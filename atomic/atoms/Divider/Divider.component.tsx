import classNames from 'classnames';

import styles from './Divider.module.scss';

type Direction = 'top' | 'right' | 'bottom' | 'left';
interface IDividerProps {
  direction: Direction;
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
