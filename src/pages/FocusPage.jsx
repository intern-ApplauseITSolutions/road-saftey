import React from 'react';
import RoadSafetyFocus from '../components/sections/ourfocus/RoadSafetyFocus';

export default function FocusPage() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <RoadSafetyFocus />
    </div>
  );
}
