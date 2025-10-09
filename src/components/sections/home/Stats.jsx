import { TrendingDown, Users, Target } from 'lucide-react';

export default function Stats() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transition transform hover:-translate-y-2 border-t-4 border-red-500">
              <div className="bg-red-50 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition">
                <TrendingDown className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">400+</h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Daily deaths on Indian roads</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">We're working to change this</p>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transition transform hover:-translate-y-2 border-t-4 border-primary sm:col-span-2 md:col-span-1">
              <div className="bg-primary/10 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Years of Research</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Dedicated to road safety</p>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 sm:p-8 text-center transition transform hover:-translate-y-2 border-t-4 border-green-500 sm:col-span-2 md:col-span-1">
              <div className="bg-green-50 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">1</h3>
              <p className="text-sm sm:text-base text-gray-600 font-medium">Mission: Bend the Curve</p>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">Reducing fatalities in India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
