import Flex from '../../atoms/Flex/Flex.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Typography from '../../atoms/Typography/Typography.component';
import Gallery from '../../molecules/Gallery/Gallery.component';

const Highlights: React.FC = () => {
  return (
    <section>
      <Flex justifyBetween>
        <Typography varient='sectionTitle'>Highlights</Typography>
        <Spacer left='lg' />
        <Typography varient='body'>
          Donec id elit non mi porta gravida at eget metus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Nullam id dolor id nibh
          ultricies vehicula. Lorem ipsum dolor sit amet.
        </Typography>
      </Flex>
      <Gallery />
    </section>
  );
};

export default Highlights;
