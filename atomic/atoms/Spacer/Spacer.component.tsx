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
  size: 'sm' | 'md' | 'lg' | 'xl';
  inline?: boolean;
}

const Spacer: React.FC<ISpacingProps> = ({
  direction = 'all',
  size = 'md',
  inline = false,
}) => {
  return (

    <div
      className={classNames(
        styles[`${direction}${size}`],
        inline && styles.inline,
      )}
    />
  );
};

export default Spacer;
