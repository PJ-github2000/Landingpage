import Banner from './components/Banner/index';
import FreeAndOpenSource from './components/People/index';
import Features from './components/Features/index';
import Business from './components/Business/index';
import Payment from './components/Payment/index';
import Pricing from './components/Pricing/index';
import Values from './components/values';


export default function Home() {
  return (
    <main>
      <Banner />
      <FreeAndOpenSource />
      <Features />
      <Business />
      <Payment />
      <Values />
      <Pricing />
    </main>
  )
}
