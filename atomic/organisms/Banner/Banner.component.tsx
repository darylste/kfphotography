import Grid from '../../atoms/Grid/Grid.component';
import ProcessCard from '../../molecules/ProcessCard/ProcessCard.component';

import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  interface ICards {
    title: string;
    body: string;
    cardNumber: string;
    imgSrc: string;
    imgAlt: string;
  }

  const cards: ICards[] = [
    {
      title: 'Get in Touch',
      body: 'Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      cardNumber: '01',
      imgSrc: 'https://via.placeholder.com/75x75',
      imgAlt: 'placeholder',
    },
    {
      title: 'Stress Free Day',
      body: 'Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      cardNumber: '02',
      imgSrc: 'https://via.placeholder.com/75x75',
      imgAlt: 'placeholder',
    },
    {
      title: 'Memories for Life',
      body: 'Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      cardNumber: '03',
      imgSrc: 'https://via.placeholder.com/75x75',
      imgAlt: 'placeholder',
    },
  ];
  return (
    <section className={styles.banner}>
      <Grid cols={3} gap='md'>
        {cards.map(({ title, body, cardNumber, imgSrc, imgAlt }) => (
          <ProcessCard
            key={title}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            cardTitle={title}
            cardBody={body}
            cardNumber={cardNumber}
          />
        ))}
      </Grid>
    </section>
  );
};

export default Banner;
