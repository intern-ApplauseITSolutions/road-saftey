import { MapPin, Phone, Mail, Shield, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import footerLogo from '../../assets/logo/footer_logo.jpg';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-primary text-white py-8 sm:py-10 md:py-12 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10 pointer-events-none"></div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* About */}
            <div>
              <div className="mb-3 sm:mb-4">
                <img src={footerLogo} alt="Safety Research Foundation" className="h-12 sm:h-14 md:h-16 w-auto" />
              </div>
              <p className="text-sm sm:text-base text-white leading-relaxed mb-4 sm:mb-6">
                Dedicated to promoting road safety awareness, education, and training to reduce accidents and save lives across India.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex gap-2 sm:gap-3">
                <a href="https://linkedin.com/company/safety-research-foundation" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/30 transition">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </a>
                <a href="https://facebook.com/safetyresearchfoundation" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/30 transition">
                    <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </a>
                <a href="https://x.com/safetyfoundation" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/30 transition">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Quick Links</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link to="/" className="text-sm sm:text-base text-white hover:text-secondary transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm sm:text-base text-white hover:text-secondary transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/focus" className="text-sm sm:text-base text-white hover:text-secondary transition">
                    Our Focus
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-sm sm:text-base text-white hover:text-secondary transition">
                    News & Events
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm sm:text-base text-white hover:text-secondary transition">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Contact Info</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start gap-2 sm:gap-3 group">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/30 transition">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                  </div>
                  <p className="text-white text-xs sm:text-sm">
                    Office No.504, S.No.128, Seasons Business Square, Seasons Road, Sanewadi, Aundh, Pune – 411007 Maharashtra
                  </p>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/30 transition">
                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                  </div>
                  <a href="mailto:contact@safetyresearchfoundation.org" className="text-white hover:text-secondary transition text-xs sm:text-sm break-all">
                    contact@safetyresearchfoundation.org
                  </a>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 group">
                  <div className="bg-white/20 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/30 transition">
                    <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                  </div>
                  <a href="tel:+917030910122" className="text-white hover:text-secondary transition text-xs sm:text-sm">
                    +91 7030910122
                  </a>
                </div>
              </div>
            </div>

            {/* Small Map - Added on Right */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white">Find Us</h3>
              <div className="bg-white/10 rounded-lg overflow-hidden w-full h-32 sm:h-40 md:h-48">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.80974731490212!3d18.558729987408227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sSeason%27s%20Business%20Square!5e0!3m2!1sen!2sin!4v1696234567890!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
            <p className="text-white text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Safety Research Foundation. All rights reserved. | 
              <span className="text-secondary font-medium"> Committed to making Indian roads safer.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
