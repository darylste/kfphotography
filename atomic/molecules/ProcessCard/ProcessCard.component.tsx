import Image from 'next/image';

import Divider from '../../atoms/Divider/Divider.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Typography from '../../atoms/Typography/Typography.component';

import styles from './ProcessCard.module.scss';

interface IProcessCard {
  imgSrc: string;
  imgWidth?: number;
  imgHeight?: number;
  cardTitle: string;
  cardBody: string;
  cardNumber: string;
}

const ProcessCard: React.FC<IProcessCard> = ({
  imgSrc,
  imgHeight = 75,
  imgWidth = 75,
  cardTitle,
  cardBody,
  cardNumber,
}) => {
  return (
    <div className={styles.processCard}>
      <Spacer top='md' bottom='md'>
        <Image src={imgSrc} width={imgWidth} height={imgHeight} />
        <Spacer top='sm' bottom='sm'>
          <Typography varient='bannerTitle'>{cardTitle}</Typography>
        </Spacer>
        <Typography varient='body'>{cardBody}</Typography>
      </Spacer>
      <Divider direction='bottom' />
      <Spacer top='xs' />
      <p className={styles.stepNumber}>{cardNumber}</p>
    </div>
  );
};

export default ProcessCard;
