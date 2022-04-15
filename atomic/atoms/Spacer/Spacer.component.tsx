import classNames from 'classnames';

import styles from './Spacer.module.scss';

interface ISpacingProps {
  direction:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'vertical'
    | 'horizontal'
    | 'all';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  inline?: boolean;
}

const Spacer: React.FC<ISpacingProps> = ({
  direction = 'all',
  size = 'md',
  inline = false,
  children,
}) => {
  return (
    <div
      className={classNames(
        styles[`${direction}${size}`],
        inline && styles.inline,
      )}
    >
      {children}
    </div>
  );
};

export default Spacer;
