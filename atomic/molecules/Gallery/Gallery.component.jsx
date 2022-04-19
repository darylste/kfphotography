import styles from './Gallery.module.scss';

import classNames from 'classnames';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    'https://picsum.photos/1501',
    'https://picsum.photos/2001/1000',
    'https://picsum.photos/1510',
    'https://picsum.photos/1999/1000',
    'https://picsum.photos/1520',
    'https://picsum.photos/2002/1000',
  ];

  return (
    <div>
      <Spacer bottom='md' />
      <ul className={styles.filter}>
        <li className={classNames(styles.filterItem, styles.active)}>All</li>
        <li className={styles.filterItem}>Newborn</li>
        <li className={styles.filterItem}>Family</li>
        <li className={styles.filterItem}>Cake Smash</li>
        <li className={styles.filterItem}>Events</li>
      </ul>
      <Spacer top='sm'>
        <ResponsiveMasonry>
          <Masonry>
            {images.map((src, i) => (
              <img key={i} src={src} alt='image' className={styles.image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Spacer>
    </div>
  );
};

export default Gallery;
