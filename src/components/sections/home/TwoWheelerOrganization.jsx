import React, { useEffect, useRef } from 'react';
import { Shield, Calendar, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TwoWheelerOrganization() {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  // Comprehensive events data - all events for display
  const events = [
    {
      id: 1,
      title: "Child Safety Seat Awareness Session",
      date: "11th January 2025",
      location: "Tuljabhavani Housing Society, Ravet, Pune",
      category: "Awareness Session",
      content: "On the occasion of National Road Safety Week, Safety Research Foundation (SRF) organized a Child Safety Seat Awareness session."
    },
    {
      id: 2,
      title: "Road Safety Awareness Sessions",
      date: "27th November 2024",
      location: "Three Schools in Khadki, Pune",
      category: "School Program",
      content: "Safety Research Foundation, in collaboration with Rotary Club Khadki, successfully conducted Road Safety Awareness sessions at three prominent schools."
    },
    {
      id: 3,
      title: "Road Safety Awareness Program",
      date: "01 & 02 Sep 2022",
      location: "St Joseph Boys High School, Kirkee, Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted 'Road Safety Awareness Program' for the students at St Joseph Boys High School."
    },
    {
      id: 4,
      title: "Road Safety Awareness Program",
      date: "29th July 2022",
      location: "St Arnolds Central School Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted a School Road safety awareness program for St Arnold's Central School Pune."
    },
    {
      id: 5,
      title: "Road Safety Awareness Program",
      date: "22nd July 2022",
      location: "St Arnolds School Pune, Wadgaon Shari",
      category: "School Program",
      content: "Safety Research Foundation conducted a School Road safety awareness program for St Arnolds School Pune Wadgaon Shari."
    },
    {
      id: 6,
      title: "Road Safety Awareness Program",
      date: "12th July 2022",
      location: "Apte Prashala Deccan Gymkhana Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted a School Road safety awareness program for Apte Prashala."
    },
    {
      id: 7,
      title: "Go Yellow Road Safety Awareness",
      date: "25th & 26th Feb 2022",
      location: "Pune University Chowk & Vimanagar Chowk",
      category: "Public Awareness",
      content: "SRF team conducted a Road safety Awareness Program titled GO YELLOW on 25th Feb @Pune University Chowk & Vimanagar Chowk."
    },
    {
      id: 8,
      title: "Webinar on Scientific Crash Investigation",
      date: "28th September 2021",
      location: "Online - Indian Chemical Council",
      category: "Webinar",
      content: "Safety Research Foundation conducted an online session on Scientific Crash Investigation and Data Collection for Indian Chemical Council (ICC) employees."
    },
    {
      id: 9,
      title: "Road Safety Audit: NH 48",
      date: "24th March 2021",
      location: "Katraj – Dehu Road Bypass, Pune",
      category: "Safety Audit",
      content: "Safety Research Foundation undertook Road Safety Audit of Katraj – Navale Section of NH 48."
    },
    {
      id: 10,
      title: "Reflective Safety Jacket Distribution",
      date: "19th February 2021",
      location: "MIDC Buttibori Police Station, Nagpur",
      category: "Police Support",
      content: "Safety Research Foundation organized an event focused on Honoring the Police Personnel on duty."
    },
    {
      id: 11,
      title: "Reflective Safety Jacket Distribution - Buttibori",
      date: "19th February 2021",
      location: "Buttibori Police Station, Nagpur",
      category: "Police Support",
      content: "SRF team organized a safety Jacket distribution event at Buttibori Police Station, Nagpur."
    },
    {
      id: 12,
      title: "Reflective Safety Jacket Distribution - Umred",
      date: "18th February 2021",
      location: "Umred Police Station, Nagpur",
      category: "Police Support",
      content: "SRF team organized a safety Jacket distribution event at Umred Police Station, Nagpur."
    },
    {
      id: 13,
      title: "Reflective Safety Jacket Distribution - Kalameshwar",
      date: "18th February 2021",
      location: "Kalameshwar Police Station, Nagpur",
      category: "Police Support",
      content: "SRF team organized a safety Jacket distribution event at Kalameshwar Police Station, Nagpur."
    },
    {
      id: 14,
      title: "Safety Mask Distribution Event - Pune",
      date: "11th September 2020",
      location: "Chaturshringi Police Station, Pune",
      category: "Police Support",
      content: "SRF team organised a safety mask distribution event at Chaturshringi Police Station, Pune City."
    },
    {
      id: 15,
      title: "Road Safety Webinar Series 3",
      date: "24th Aug 2020",
      location: "Online - Rotary Pimpri Pune",
      category: "Webinar",
      content: "Safety Research Foundation conducted a webinar on What can we learn from real world traffic accidents?"
    },
    {
      id: 16,
      title: "Road Safety Webinar Series 2",
      date: "16th Aug 2020",
      location: "Online - Engineering Students",
      category: "Webinar",
      content: "Safety Research Foundation conducted a webinar on Crash Investigation and its Importance."
    },
    {
      id: 17,
      title: "Safety Mask Distribution Event - Coimbatore",
      date: "15th August 2020",
      location: "Sulur Police Station, Coimbatore",
      category: "Police Support",
      content: "Safety Research Foundation organised an event focused on Honouring the Police Personnel on duty during COVID times."
    },
    {
      id: 18,
      title: "Safety Mask Distribution Event - Ahmedabad",
      date: "15th August 2020",
      location: "I-traffic Police Station, Ahmedabad",
      category: "Police Support",
      content: "SRF team participated in Independence Day ceremony and organised safety mask distribution event."
    },
    {
      id: 19,
      title: "Road Safety Webinar Series 1",
      date: "9th Aug 2020",
      location: "Online - Engineering Students",
      category: "Webinar",
      content: "Safety Research Foundation conducted a webinar on Crash Investigation and its Importance."
    },
    {
      id: 20,
      title: "Road Safety Awareness Program - Chetan Dattaji Gaikwad High School",
      date: "24th Sep 2019",
      location: "Chetan Dattaji Gaikwad High School, Khadki, Pune",
      category: "School Program",
      content: "The Session on Traffic violations commonly seen on our roads and its eventualities, Pedestrian Responsibilities, Speeding and its repercussions."
    },
    {
      id: 21,
      title: "Road Safety Awareness Program - Symbiosis Open Skills University",
      date: "05th Sep 2019",
      location: "Symbiosis Open Skills University, Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted the Session focused on importance of good quality data collection and use of data in improving road safety."
    },
    {
      id: 22,
      title: "Road Safety Awareness Program - NCL Junior College",
      date: "04th Oct 2018",
      location: "NCL Junior College, Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted the Session with co-organizer Rotary Club of Khadki focused on Effects of Speeding, Pedestrian Behaviour on roads."
    },
    {
      id: 23,
      title: "Road Safety Awareness Program - Loyola High School",
      date: "18th Aug 2018",
      location: "Loyola High School, Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted the Session with co-organizer Rotary Club of Khadki focused on Effects of Speeding, Pedestrian Behaviour on roads."
    },
    {
      id: 24,
      title: "Road Safety Awareness Program - Vidyanchal School",
      date: "20th Dec 2017",
      location: "Vidyanchal School, Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted the Session with co-organizer Rotary Club of Khadki focused on Effects of Speeding, Pedestrian Behaviour on roads."
    },
    {
      id: 25,
      title: "Road Safety Awareness Program - Manchester International School",
      date: "02nd Nov 2017",
      location: "Manchester International School, Coimbatore",
      category: "School Program",
      content: "Safety Research Foundation conducted the Session with co-organizer Rotary International District 3201 Coimbatore Region focused on Safety system usage."
    }
  ];

  const handleEventClick = (event) => {
    // Navigate to event detail page in same window
    navigate(`/event/${event.id}`);
  };

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
        {/* Header with Shield Logo */}
        <div className="flex items-center justify-center mb-10 sm:mb-12 md:mb-16">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-primary"></div>
          <div className="mx-4 sm:mx-6 flex items-center gap-2 sm:gap-3">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
              Road Safety Initiatives
            </h2>
          </div>
          <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-primary to-primary"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left Side Content */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-dashed border-primary/40 hover:border-primary/60 h-full transition-all duration-300">
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
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-2 border-dashed border-primary/40 hover:border-primary/60 hover:shadow-xl transition-all duration-300">
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
                  onClick={() => handleEventClick(event)}
                  className="event-card relative bg-gradient-to-r from-primary/5 to-white p-4 sm:p-5 rounded-lg border-l-4 border-primary cursor-pointer group overflow-hidden"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sliding accent bar enhancement */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  
                  {/* Floating indicator */}
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transform group-hover:translate-x-2 transition-all duration-300 leading-tight flex-1 pr-2">
                        {event.title}
                      </h5>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {event.category}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm text-text-orange flex items-center gap-2 group-hover:text-primary/80 transform group-hover:translate-x-2 transition-all duration-300 delay-75">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                        <span className="leading-tight">{event.date}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-text-orange flex items-center gap-2 group-hover:text-primary/80 transform group-hover:translate-x-2 transition-all duration-300 delay-100">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                        <span className="leading-tight">{event.location}</span>
                      </p>
                    </div>
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
                  onClick={() => handleEventClick(event)}
                  className="event-card relative bg-gradient-to-r from-primary/5 to-white p-4 sm:p-5 rounded-lg border-l-4 border-primary cursor-pointer group overflow-hidden"
                >
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Sliding accent bar enhancement */}
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary transform -translate-x-1 group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                  
                  {/* Floating indicator */}
                  <div className="absolute -right-2 -top-2 w-4 h-4 bg-gradient-to-br from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 delay-200"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <h5 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-primary transform group-hover:translate-x-2 transition-all duration-300 leading-tight flex-1 pr-2">
                        {event.title}
                      </h5>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full whitespace-nowrap">
                        {event.category}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs sm:text-sm text-text-orange flex items-center gap-2 group-hover:text-primary/80 transform group-hover:translate-x-2 transition-all duration-300 delay-75">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                        <span className="leading-tight">{event.date}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-text-orange flex items-center gap-2 group-hover:text-primary/80 transform group-hover:translate-x-2 transition-all duration-300 delay-100">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-primary transition-colors duration-300 flex-shrink-0" />
                        <span className="leading-tight">{event.location}</span>
                      </p>
                    </div>
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
