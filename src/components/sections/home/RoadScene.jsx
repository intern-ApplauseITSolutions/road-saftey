import React from 'react';
import truck1 from '../../../assets/truckanimationpng/truck1.png';

export default function RoadScene() {
  return (
    <section className="relative w-full h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden bg-gradient-to-b from-white to-gray-100">
      
      {/* Road */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 md:h-32 lg:h-36 bg-gray-700">
        {/* Road Surface */}
        <div className="w-full h-full bg-gradient-to-b from-gray-600 to-gray-800"></div>
        
        {/* Road Markings - Dashed Lines */}
        <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
          <div className="flex justify-between px-4">
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
            <div className="w-12 sm:w-16 md:w-20 h-0.5 sm:h-1 bg-yellow-300"></div>
          </div>
        </div>
        
        {/* Road Edges */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-yellow-400"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"></div>
      </div>
      
      {/* Truck Vehicle Moving Left to Right */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 left-0 animate-[moveRight_5s_linear_infinite]">
        <img 
          src={truck1} 
          alt="Truck" 
          className="h-20 sm:h-24 md:h-32 lg:h-40 xl:h-44 w-auto object-contain"
        />
      </div>
      
      {/* Custom Animation Styles */}
      <style jsx>{`
        @keyframes moveRight {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(calc(100vw + 100px)); }
        }
      `}</style>
    </section>
  );
}