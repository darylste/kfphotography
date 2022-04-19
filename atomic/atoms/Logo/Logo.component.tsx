import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Image
      src='https://via.placeholder.com/150x60'
      alt='logo'
      width={150}
      height={60}
      priority
    />
  );
};

export default Logo;
