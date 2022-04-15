import styles from './Typography.module.scss';

interface ITypographyProps {
  varient: 'heroSpan' | 'heroTitle' | 'heroText';
}

const Typography: React.FC<ITypographyProps> = ({ children, varient }) => {
  switch (varient) {
    case 'heroSpan':
      return <span className={styles.heroSpan}>{children}</span>;
    case 'heroTitle':
      return <h1 className={styles.heroTitle}>{children}</h1>;
    case 'heroText':
      return <p className={styles.heroText}>{children}</p>;
  }
  return null;
};

export default Typography;
