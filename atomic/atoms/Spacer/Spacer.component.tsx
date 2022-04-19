import classNames from 'classnames';

import styles from './Spacer.module.scss';

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
interface ISpacingProps {
  left?: Sizes;
  right?: Sizes;
  top?: Sizes;
  bottom?: Sizes;
  inline?: boolean;
}

const Spacer: React.FC<ISpacingProps> = ({
  left,
  right,
  bottom,
  top,
  inline = false,
  children,
}) => {
  return (
    <div
      className={classNames(
        styles[top ? `top${top}` : ''],
        styles[left ? `left${left}` : ''],
        styles[right ? `right${right}` : ''],
        styles[bottom ? `bottom${bottom}` : ''],
        inline && styles.inline,
      )}
    >
      {children}
    </div>
  );
};

export default Spacer;
