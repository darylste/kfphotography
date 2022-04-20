import type { NextPage } from 'next';

import Footer from '../atomic/organisms/Footer/Footer.component';
import Header from '../atomic/organisms/Header/Header.component';
import PriceTable from '../atomic/organisms/PriceTable/PriceTable.component';

const Packages: NextPage = () => {
  return (
    <>
      <Header />
      <PriceTable />
      <Footer />
    </>
  );
};

export default Packages;
