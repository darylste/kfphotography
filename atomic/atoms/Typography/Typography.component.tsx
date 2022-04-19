import styles from './Typography.module.scss';

interface ITypographyProps {
  varient:
    | 'heroSpan'
    | 'heroTitle'
    | 'heroText'
    | 'bannerTitle'
    | 'body'
    | 'sectionTitle';
}

const Typography: React.FC<ITypographyProps> = ({ children, varient }) => {
  switch (varient) {
    case 'heroSpan':
      return <span className={styles.heroSpan}>{children}</span>;
    case 'heroTitle':
      return <h1 className={styles.heroTitle}>{children}</h1>;
    case 'heroText':
      return <p className={styles.heroText}>{children}</p>;
    case 'bannerTitle':
      return <h3 className={styles.bannerTitle}>{children}</h3>;
    case 'body':
      return <p className={styles.body}>{children}</p>;
    case 'sectionTitle':
      return <h2 className={styles.sectionTitle}>{children}</h2>;
  }
  return null;
};

export default Typography;
