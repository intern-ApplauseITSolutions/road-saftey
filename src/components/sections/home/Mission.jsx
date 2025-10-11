import { CheckCircle } from 'lucide-react';

export default function Mission() {
  return (
    <section className="py-8 sm:py-10 md:py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mission Statement Card */}
          <div className="relative bg-gradient-primary rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/5 rounded-full -mr-16 sm:-mr-24 md:-mr-32 -mt-16 sm:-mt-24 md:-mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-white/5 rounded-full -ml-24 sm:-ml-36 md:-ml-48 -mb-24 sm:-mb-36 md:-mb-48"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="w-6 sm:w-8 md:w-12 h-1 bg-brand-orange rounded"></div>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">Our Mission</h3>
                <div className="w-6 sm:w-8 md:w-12 h-1 bg-brand-orange rounded"></div>
              </div>
              
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed text-center max-w-4xl mx-auto mb-6 sm:mb-8">
                More than <span className="font-bold text-brand-orange">400+ people die every day</span> on Indian roads due to traffic-related accidents. 
                Through our <span className="font-bold">RASSI initiative</span> and partnerships with OEMs, we orchestrate a decade of data-driven 
                decisions to help address and bend the death/injury curve in India.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm sm:text-base">Infrastructure Change</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm sm:text-base">Vehicle Safety</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2 text-white/90 sm:col-span-2 md:col-span-1">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-orange flex-shrink-0" />
                  <span className="text-sm sm:text-base">Behavior Change</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
