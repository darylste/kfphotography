import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <span className={styles.heroTitle}>Capture Memories To</span>
          <h1 className={styles.heroTitle}>Last a Lifetime</h1>
          <p className={styles.heroText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            officia aliquid recusandae excepturi suscipit laudantium eos
            reiciendis. Quibusdam laudantium dolor non similique sit. Incidunt
            repellat maiores voluptate corrupti laudantium eos.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
