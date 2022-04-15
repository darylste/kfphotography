import classNames from 'classnames';

import styles from './Button.module.scss';

interface IButtonProps {
  href: string;
  varient: 'primary' | 'secondary';
}

const Button: React.FC<IButtonProps> = ({ children, href, varient }) => {
  return (
    <a
      href={href}
      className={classNames(
        styles.btn,
        varient === 'primary' && styles.btnPrimary,
        varient === 'secondary' && styles.btnSecondary,
      )}
    >
      {children}
    </a>
  );
};

export default Button;
