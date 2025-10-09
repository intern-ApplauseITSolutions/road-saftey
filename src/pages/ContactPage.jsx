import React from 'react';
import ContactUs from '../components/sections/contactus/ContactUs';

export default function ContactPage() {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <ContactUs />
    </div>
  );
}
