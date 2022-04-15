import Typography from '../../atoms/Typography/Typography.component';

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <Typography varient='heroSpan'>Capture Memories To</Typography>
          <Typography varient='heroTitle'>Last a Lifetime</Typography>
          <Typography varient='heroText'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis ipsa
            tenetur iure? Accusamus porro dignissimos, sit id voluptas minima.
            Vel repellat laborum consequatur dicta tenetur. Nihil itaque dolore
            nisi beatae?
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Hero;
