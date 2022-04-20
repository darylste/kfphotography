import Button from '../../atoms/Button/Button.component';
import Grid from '../../atoms/Grid/Grid.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Typography from '../../atoms/Typography/Typography.component';

import styles from './PriceTable.module.scss';

const PriceTable: React.FC = () => {
  type ICardProps = {
    name: string;
    iconSrc: string;
    iconAlt: string;
    price: number;
    benefits: string[];
  };

  const cards: ICardProps[] = [
    {
      name: 'Basic Package',
      iconSrc: 'https://via.placeholder.com/70x70',
      iconAlt: 'icon',
      price: 150,
      benefits: [
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
      ],
    },
    {
      name: 'Exclusive Package',
      iconSrc: 'https://via.placeholder.com/70x70',
      iconAlt: 'icon',
      price: 300,

      benefits: [
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
      ],
    },
    {
      name: 'Premium Package',
      iconSrc: 'https://via.placeholder.com/70x70',
      iconAlt: 'icon',
      price: 250,
      benefits: [
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
        'Package Benefit',
      ],
    },
  ];

  return (
    <section className={styles.priceTable}>
      <Spacer top='md' />
      <Typography varient='sectionTitle'>Packages</Typography>
      <Spacer top='md' />
      <Grid cols={3}>
        {cards.map(({ name, iconSrc, iconAlt, price, benefits }) => (
          <div key={name} className={styles.packageCard}>
            <div className={styles.cardHead}>
              <Spacer top='md' bottom='md'>
                <img src={iconSrc} alt={iconAlt} />
                <Spacer top='sm' />
                <Typography varient='cardTitle'>{name}</Typography>
              </Spacer>
            </div>
            <div className={styles.cardPricing}>
              <Spacer top='sm' bottom='sm'>
                <Typography varient='cardCurrency'>£</Typography>
                <Typography varient='cardPrice'>{price}</Typography>
              </Spacer>
            </div>
            <Spacer top='sm' bottom='sm'>
              <ul className={styles.packageBenefits}>
                {benefits.map((key, benefit) => (
                  <li key={key} className={styles.packageBenefit}>
                    <Typography varient='cardFeature'>{benefit}</Typography>
                  </li>
                ))}
              </ul>
            </Spacer>
            <Spacer top='sm' bottom='md'>
              <Button href='#' varient='primary'>
                LEARN MORE
              </Button>
              {/* <a href='#' className={styles.button}>
                Learn More
              </a> */}
            </Spacer>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default PriceTable;
