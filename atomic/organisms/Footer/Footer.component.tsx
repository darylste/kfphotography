import Logo from '../../atoms/Logo/Logo.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Typography from '../../atoms/Typography/Typography.component';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Spacer top='md'>
          <Logo />
          <Spacer top='sm' />
          <Typography varient='footerText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            accusamus accusantium inventore.
          </Typography>
        </Spacer>
        <Spacer top='md'>
          <Typography varient='footerTitle'>Recent Shoots</Typography>
          <Spacer top='sm' />
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Typography varient='footerText'>Footer Item One</Typography>
            </li>
            <li className={styles.listItem}>
              <Typography varient='footerText'>Footer Item Two</Typography>
            </li>
            <li className={styles.listItem}>
              <Typography varient='footerText'>Footer Item Three</Typography>
            </li>
            <li className={styles.listItem}>
              <Typography varient='footerText'>Footer Item Four</Typography>
            </li>
          </ul>
        </Spacer>
        <Spacer top='md'>
          <Typography varient='footerTitle'>Recent Works</Typography>
          <Spacer top='sm' />
          <div className={styles.grid}>
            <img
              src='https://picsum.photos/75'
              alt='image'
              className={styles.image}
            />
            <img
              src='https://picsum.photos/75'
              alt='image'
              className={styles.image}
            />
            <img
              src='https://picsum.photos/75'
              alt='image'
              className={styles.image}
            />
            <img
              src='https://picsum.photos/75'
              alt='image'
              className={styles.image}
            />
            <img
              src='https://picsum.photos/75'
              alt='image'
              className={styles.image}
            />
            <img
              src='https://picsum.photos/75'
              alt='image'
              className={styles.image}
            />
          </div>
        </Spacer>
        <Spacer top='md'>
          <Typography varient='footerTitle'>Contact Info</Typography>
          <Spacer top='sm' />
          <Spacer bottom='xs'>
            <Typography varient='footerText'>Address Line 1</Typography>
            <Typography varient='footerText'>Address Line 2</Typography>
            <Typography varient='footerText'>Address Line 3</Typography>
          </Spacer>
          <Spacer bottom='xs'>
            <Typography varient='footerText'>07 </Typography>
          </Spacer>
          <Spacer bottom='xs'>
            <Typography varient='footerText'>kirstyferris@ymail.com</Typography>
          </Spacer>
        </Spacer>
      </footer>
      <div className={styles.footerBottom}>
        <Spacer top='sm' bottom='sm'>
          <Spacer top='sm' bottom='sm'>
            <Typography varient='footerText'>
              &copy; Kirsty Ferris Photography 2022, All rights reserved
            </Typography>
          </Spacer>
        </Spacer>
      </div>
    </>
  );
};

export default Footer;
