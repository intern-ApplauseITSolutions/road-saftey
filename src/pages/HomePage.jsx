import React from 'react';
import HeroBanner from '../components/sections/home/HeroBanner';
import Stats from '../components/sections/home/Stats';
import Mission from '../components/sections/home/Mission';
import QuickLinks from '../components/sections/home/QuickLinks';
import CallToAction from '../components/sections/home/CallToAction';
import TwoWheelerOrganization from '../components/sections/home/TwoWheelerOrganization';
import Training from '../components/sections/home/Training';
import RoadScene from '../components/sections/home/RoadScene';
import NewsletterPage from './NewsletterPage';

export default function HomePage() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <HeroBanner />
      <RoadScene />
      <TwoWheelerOrganization />
      <Training />
      <NewsletterPage />
      {/* <Stats />
      <Mission />
      <QuickLinks />
      <CallToAction /> */}
    </div>
  );
}
