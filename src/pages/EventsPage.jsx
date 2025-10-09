import React from 'react';
import NewsAndEvents from '../components/sections/newsandevents/NewsAndEvents';

export default function EventsPage() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <NewsAndEvents />
    </div>
  );
}
