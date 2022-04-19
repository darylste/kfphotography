import classNames from 'classnames';
import styles from './Flex.module.scss';

interface IFlexProps {
  justifyBetween?: boolean;
}

const Flex: React.FC<IFlexProps> = ({ children }) => {
  return <div className={classNames(styles.flex)}>{children}</div>;
};

export default Flex;
