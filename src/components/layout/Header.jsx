import { Phone, Mail, Heart, Menu, X, Linkedin, Facebook, HandHeart } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../assets/logo/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToDonate = () => {
    navigate('/donate');
    setIsMenuOpen(false);
  };

  const navigateToPledge = () => {
    navigate('/pledge');
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+917030910122" className="flex items-center gap-1 hover:opacity-80">
              <Phone size={14} />
              <span className="hidden sm:inline">+91 7030910122</span>
            </a>
            <a href="mailto:contact@safetyresearchfoundation.org" className="flex items-center gap-1 hover:opacity-80">
              <Mail size={14} />
              <span className="hidden md:inline">contact@safetyresearchfoundation.org</span>
            </a>
          </div>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.linkedin.com/in/safety-research-foundation-397695183/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/20 p-2 rounded-lg group-hover:bg-saffron/30 transition">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </a>
            <a href="https://www.facebook.com/people/Safety-Research-Foundation/100069078591353/" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/20 p-2 rounded-lg group-hover:bg-green/30 transition">
                <Facebook className="w-5 h-5 text-white" />
              </div>
            </a>
            <a href="https://x.com/ResearchSafety" target="_blank" rel="noopener noreferrer" className="group">
              <div className="bg-white/20 p-2 rounded-lg group-hover:bg-saffron/30 transition">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-[100] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Safety Research Foundation" className="h-12 md:h-16" />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <NavLink to="/" className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                About
              </NavLink>
              <NavLink to="/focus" className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                Our Focus
              </NavLink>
              <NavLink to="/events" className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                News & Events
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                Contact Us
              </NavLink>
              <button onClick={navigateToDonate} className="bg-gradient-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-md">
                <Heart size={16} fill="currentColor" />
                Donate
              </button>
              <button onClick={navigateToPledge} className="bg-gradient-primary text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center gap-2 shadow-md">
                <HandHeart size={16} />
                Take a Pledge
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-gray-700 hover:text-primary">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <div className="flex flex-col gap-4">
                <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                  Home
                </NavLink>
                <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                  About
                </NavLink>
                <NavLink to="/focus" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                  Our Focus
                </NavLink>
                <NavLink to="/events" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                  News & Events
                </NavLink>
                <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className={({ isActive }) => `font-medium transition ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>
                  Contact Us
                </NavLink>
                <button onClick={navigateToDonate} className="bg-gradient-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-1">
                  <Heart size={16} fill="currentColor" />
                  Donate
                </button>
                <button onClick={navigateToPledge} className="bg-gradient-primary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition flex items-center justify-center gap-1">
                  <HandHeart size={16} />
                  Take a Pledge
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}
