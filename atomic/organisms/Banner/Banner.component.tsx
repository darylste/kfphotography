import ProcessCard from '../../molecules/ProcessCard/ProcessCard.component';

import styles from './Banner.module.scss';

const Banner: React.FC = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.grid}>
        <div className={styles.one}>
          <ProcessCard
            imgSrc='https://via.placeholder.com/75x75'
            cardTitle='Get in Touch'
            cardBody='Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat
            a ante venenatis dapibus posuere velit aliquet.'
          />
        </div>
        <div className={styles.two}>
          <ProcessCard
            imgSrc='https://via.placeholder.com/75x75'
            cardTitle='Stress Free Day'
            cardBody='Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat
            a ante venenatis dapibus posuere velit aliquet.'
          />
        </div>
        <div className={styles.three}>
          <ProcessCard
            imgSrc='https://via.placeholder.com/75x75'
            cardTitle='Have memories for life'
            cardBody='Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat
            a ante venenatis dapibus posuere velit aliquet.'
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
