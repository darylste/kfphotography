import classNames from 'classnames';

import styles from './Grid.module.scss';

interface IGridProps {
  cols: 3;
}

const Grid: React.FC<IGridProps> = ({ cols, children }) => {
  return (
    <div className={classNames(styles.grid, styles[`gridCols${cols}`])}>
      {children}
    </div>
  );
};

export default Grid;
