// This component is deprecated - use individual components instead:
// - HeroBanner.jsx
// - Stats.jsx
// - Mission.jsx

import HeroBanner from './HeroBanner';
import Stats from './Stats';
import Mission from './Mission';

export default function Hero() {
  return (
    <>
      <HeroBanner />
      <Stats />
      <Mission />
    </>
  );
}
