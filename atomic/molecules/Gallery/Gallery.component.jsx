import styles from './Gallery.module.scss';

import classNames from 'classnames';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from 'next/image';
import { useState } from 'react';

const Gallery = () => {
  const filters = ['all', 'newborn', 'family', 'birthday', 'wedding'];
  const images = [
    { src: 'https://picsum.photos/1501', tag: 'family' },
    { src: 'https://picsum.photos/2001/1000', tag: 'birthday' },
    { src: 'https://picsum.photos/1500', tag: 'family' },
    { src: 'https://picsum.photos/2000/1000', tag: 'wedding' },
    { src: 'https://picsum.photos/1502', tag: 'family' },
    { src: 'https://picsum.photos/2002/1000', tag: 'newborn' },
  ];

  const [filteredImages, setFilteredImages] = useState(images);
  const [isActive, setIsActive] = useState('all');

  const handleClick = (images, tag) => {
    const filteredImages = images.filter((image) => image.tag === tag);
    tag === 'all'
      ? setFilteredImages(images)
      : setFilteredImages(filteredImages);
    setIsActive(tag);
  };

  const toggleClass = (tag) => {
    setIsActive(tag);
  };

  return (
    <div>
      <Spacer bottom='md' />
      <ul className={styles.filter}>
        {filters.map((filter) => (
          <li
            className={classNames(
              styles.filterItem,
              isActive === filter ? styles.isActive : '',
            )}
            onClick={() => handleClick(images, filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
      <Spacer top='sm'>
        <ResponsiveMasonry>
          <Masonry>
            {filteredImages.map(({ src, i, tag }) => (
              <img key={i} src={src} alt='image' className={styles.image} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Spacer>
    </div>
  );
};

export default Gallery;
