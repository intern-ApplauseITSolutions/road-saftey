import React, { useEffect, useRef } from 'react';
import { Bike } from 'lucide-react';

export default function TwoWheelerOrganization() {
  const scrollContainerRef = useRef(null);

  const events = [
    {
      title: "Reflective Safety jacket Distribution event - Nagpur",
      date: "25-26 Feb, Pune University Chowk"
    },
    {
      title: "Webinar on Crash Investigation",
      date: "28 Sep 2021, Online"
    },
    {
      title: "Road Safety Engineering – Pune",
      date: "Katraj - Navale NH48 study"
    },
    {
      title: "Reflective Jacket Distribution",
      date: "19 Feb 2021, Nagpur"
    },
    {
      title: "Safety Mask Distribution",
      date: "Sep 2021, Pune"
    },
    {
      title: "Road Safety Webinar Series",
      date: "Aug 2021, Multiple cities"
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollAmount = 0;
    let isScrolling = true; // Flag to control animation
    const scrollSpeed = 0.2; // Even slower speed
    
    const smoothScroll = () => {
      if (!isScrolling) return; // Stop if not scrolling
      
      const containerHeight = scrollContainer.clientHeight;
      const contentHeight = scrollContainer.scrollHeight;
      const halfContent = contentHeight / 2; // Since we duplicate content
      
      scrollAmount += scrollSpeed;
      
      // When we reach halfway through the content, reset smoothly
      if (scrollAmount >= halfContent) {
        scrollAmount = 0;
      }
      
      scrollContainer.scrollTop = scrollAmount;
      animationId = requestAnimationFrame(smoothScroll);
    };

    const startScrolling = () => {
      if (!isScrolling) {
        isScrolling = true;
        animationId = requestAnimationFrame(smoothScroll);
      }
    };

    const stopScrolling = () => {
      isScrolling = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    };

    // Pause on hover with better control
    const handleMouseEnter = () => {
      stopScrolling();
    };
    
    const handleMouseLeave = () => {
      startScrolling();
    };

    // Start initial scrolling
    startScrolling();

    // Add event listeners
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      stopScrolling();
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Bike Logo */}
        <div className="flex items-center justify-center mb-10 sm:mb-12 md:mb-16">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-primary"></div>
          <div className="mx-4 sm:mx-6 flex items-center gap-2 sm:gap-3">
            <Bike className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
              Two Wheeler Organization
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-primary to-primary"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Side Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 h-full">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-4 sm:mb-6">
              Safety Research Foundation
            </h3>
            <div className="prose prose-sm sm:prose-base lg:prose-lg text-text-orange leading-relaxed">
              <p className="mb-4">
                More than 400+ people die every day in Indian roads due to traffic related accidents. 
                The number is ever so slightly increasing over the past decade. We do not anticipate 
                the trend to change unless drastic actions are taken to make scientific decisions based on data.
              </p>
              <p className="mb-4">
                After having driven in-depth accident data collection in India through our RASSI initiative 
                with various OEMs participations, we have decided to start a foundation/NGO called 
                SafetyResearchFoundation (SRF) to help address the problems specific to road safety 
                deaths/injuries in India.
              </p>
              <p className="mb-4">
                SRF has been created to collect/ Police reported accidents, Surveys and other means of 
                data collection from public sources, Industries to help make scientific data driven 
                decisions to help save lives and reduce injuries in Indian roads.
              </p>
              <p className="font-semibold text-primary">
                Orchestrate a decade of data driven decisions to help address and bend the death/injury 
                curve in India by working with the key stake holders to change infrastructures, vehicle 
                safety adaptations and people behavior in terms of safety training and laws to enforce safety.
              </p>
            </div>
          </div>

          {/* Right Side Content - Events */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Recent & Upcoming Events
            </h3>
            <div 
              ref={scrollContainerRef}
              className="space-y-3 sm:space-y-4 max-h-[500px] sm:max-h-[600px] overflow-y-hidden cursor-pointer"
            >
              {/* First set of events */}
              {events.map((event, index) => (
                <div 
                  key={`event-1-${index}`}
                  className="event-card relative bg-gradient-to-r from-primary/5 to-white p-4 sm:p-5 rounded-lg border-l-4 border-primary cursor-pointer group overflow-hidden"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sliding accent bar enhancement */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  
                  {/* Floating indicator */}
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200"></div>
                  
                  <div className="relative z-10">
                    <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transform group-hover:translate-x-2 transition-all duration-300 leading-tight">
                      {event.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-text-orange flex items-center gap-2 group-hover:text-primary/80 transform group-hover:translate-x-2 transition-all duration-300 delay-75">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                      </svg>
                      <span className="leading-tight">{event.date}</span>
                    </p>
                  </div>
                  
                  {/* Subtle corner decoration */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-full"></div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for infinite scroll effect */}
              {events.map((event, index) => (
                <div 
                  key={`event-2-${index}`}
                  className="event-card relative bg-gradient-to-r from-primary/5 to-white p-4 sm:p-5 rounded-lg border-l-4 border-primary cursor-pointer group overflow-hidden"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sliding accent bar enhancement */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  
                  {/* Floating indicator */}
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200"></div>
                  
                  <div className="relative z-10">
                    <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transform group-hover:translate-x-2 transition-all duration-300 leading-tight">
                      {event.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-text-orange flex items-center gap-2 group-hover:text-primary/80 transform group-hover:translate-x-2 transition-all duration-300 delay-75">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
                      </svg>
                      <span className="leading-tight">{event.date}</span>
                    </p>
                  </div>
                  
                  {/* Subtle corner decoration */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-tl from-primary/30 to-transparent rounded-tl-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
