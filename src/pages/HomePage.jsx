import HeroBanner from '../components/sections/home/HeroBanner';
import Stats from '../components/sections/home/Stats';
import Mission from '../components/sections/home/Mission';
import QuickLinks from '../components/sections/home/QuickLinks';
import CallToAction from '../components/sections/home/CallToAction';
import TwoWheelerOrganization from '../components/sections/home/TwoWheelerOrganization';
import Training from '../components/sections/home/Training';
import RoadScene from '../components/sections/home/RoadScene';

export default function HomePage() {
  return (
    <div>
      <HeroBanner />
      <RoadScene />
      <TwoWheelerOrganization />
      <Training />
      {/* <Stats />
      <Mission />
      <QuickLinks />
      <CallToAction /> */}
    </div>
  );
}
