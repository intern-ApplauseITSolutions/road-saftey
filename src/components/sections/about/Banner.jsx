import React from 'react';
import truck1 from '../../../assets/truckanimationpng/truck1.png';

export default function Banner() {
  return (
    <section className="relative w-full h-56 xs:h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] overflow-hidden bg-gradient-primary z-30" style={{overflowX: 'hidden'}}>
      {/* Road at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 xs:h-18 sm:h-20 md:h-22 lg:h-24 bg-gray-700">
        {/* Road Surface */}
        <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800"></div>
        
        {/* Road Markings - Dashed Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 xs:h-0.5 sm:h-1 md:h-1 bg-yellow-300 transform -translate-y-1/2">
          <div className="flex space-x-2 xs:space-x-3 sm:space-x-4 md:space-x-6 lg:space-x-8 animate-pulse">
            {[...Array(12)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="w-4 xs:w-5 sm:w-6 md:w-7 lg:w-8 h-0.5 xs:h-0.5 sm:h-1 md:h-1 bg-yellow-300"></div>
                <div className="w-4 xs:w-5 sm:w-6 md:w-7 lg:w-8 h-0.5 xs:h-0.5 sm:h-1 md:h-1 bg-transparent"></div>
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Road Edges */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"></div>
      </div>
      
      {/* Moving Vehicle */}
      <div className="absolute bottom-3 xs:bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-7 left-0 animate-[moveRight_8s_linear_infinite]">
        <img 
          src={truck1} 
          alt="Truck" 
          className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 xl:h-28 w-auto object-contain"
        />
      </div>
      {/* Content Overlay */}
      <div className="relative z-[60] h-full flex flex-col items-center justify-start pt-6 xs:pt-8 sm:pt-10 md:pt-12 lg:pt-16 pb-32 xs:pb-36 sm:pb-40 md:pb-44 lg:pb-48 text-center px-3 xs:px-4 sm:px-6 md:px-8">
        <div className="animate-[slideUp_1.5s_ease-out_forwards] opacity-0 translate-y-10 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
          <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 xs:mb-2 sm:mb-3 leading-tight">
            Vision
          </h1>
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-white leading-tight xs:leading-snug sm:leading-normal md:leading-relaxed">
            Improve the safety and sustainability of all road transportation across Indian subcontinent through research, evaluation, recommendation and improvement to reduce fatalities, injuries and property damage from roadway crashes over the next decade. This will be carried out through scientific studies to collect and analyze data and make data driven decisions for making the big impact.
          </p>
        </div>
      </div>
      
      {/* Custom Animation */}
      <style jsx global>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes moveRight {
          0% { transform: translateX(-150px); }
          100% { transform: translateX(calc(100vw + 50px)); }
        }
      `}</style>
    </section>
  );
}
