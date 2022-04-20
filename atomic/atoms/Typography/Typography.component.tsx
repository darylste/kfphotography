import styles from './Typography.module.scss';

type Varient =
  | 'heroSpan'
  | 'heroTitle'
  | 'heroText'
  | 'bannerTitle'
  | 'body'
  | 'sectionTitle'
  | 'footerTitle'
  | 'footerText'
  | 'cardTitle'
  | 'cardPrice'
  | 'cardCurrency'
  | 'cardFeature';
interface ITypographyProps {
  varient: Varient;
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
    case 'footerTitle':
      return <h4 className={styles.footerTitle}>{children}</h4>;
    case 'footerText':
      return <p className={styles.footerText}>{children}</p>;
    case 'cardTitle':
      return <h3 className={styles.cardTitle}>{children}</h3>;
    case 'cardPrice':
      return <p className={styles.cardPrice}>{children}</p>;
    case 'cardCurrency':
      return <span className={styles.cardCurrency}>{children}</span>;
    case 'cardFeature':
      return <p className={styles.cardFeature}>{children}</p>;
    default:
      return null;
  }
};

export default Typography;
