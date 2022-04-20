import classNames from 'classnames';

import styles from './Grid.module.scss';

interface IGridProps {
  cols: 3;
  gap?: 'sm' | 'md';
}

const Grid: React.FC<IGridProps> = ({ cols, gap = 'sm', children }) => {
  return (
    <div
      className={classNames(
        styles.grid,
        styles[`gridCols${cols}`],
        styles[`gridGap${gap}`],
      )}
    >
      {children}
    </div>
  );
};

export default Grid;
