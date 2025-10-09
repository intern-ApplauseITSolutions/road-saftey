import { Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickLinks() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12">
            Explore Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <Link to="/about" className="bg-gradient-primary text-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">About Us</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">Learn about our vision and mission</p>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base">Explore</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </div>
            </Link>

            <Link to="/focus" className="bg-gradient-primary text-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Our Focus</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">Public transport & road safety initiatives</p>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base">Explore</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </div>
            </Link>

            <Link to="/events" className="bg-gradient-primary text-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Events</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">Recent and upcoming programs</p>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base">Explore</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </div>
            </Link>

            <Link to="/contact" className="bg-gradient-primary text-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Contact</h3>
              <p className="mb-3 sm:mb-4 text-sm sm:text-base">Get in touch with us</p>
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base">Explore</span>
                <ArrowRight size={16} className="sm:w-5 sm:h-5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
