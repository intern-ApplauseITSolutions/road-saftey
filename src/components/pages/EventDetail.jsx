import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ArrowLeft, Users, Building2, Award, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Child Safety Seat Awareness Session images
import childSafety1 from '../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0001.jpg';
import childSafety2 from '../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0003.jpg';
import childSafety3 from '../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0005.jpg';
import childSafety4 from '../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0006.jpg';
import childSafety5 from '../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0014.jpg';

// Import local images as placeholders for Road Safety images
import roadSafety1 from '../../assets/images/Road_Safety_Training.jpg';
import roadSafety2 from '../../assets/images/Create_Public_awareness.jpg';
import roadSafety3 from '../../assets/images/People_Driver_Training.jpg';
import roadSafety4 from '../../assets/images/Road_Infrastructure.jpg';
import roadSafety5 from '../../assets/images/carousel-3.jpg';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Comprehensive events data
  const eventsData = [
    {
      id: 1,
      title: "Child Safety Seat Awareness Session",
      date: "11th January 2025",
      location: "Tuljabhavani Housing Society, Ravet, Pune",
      category: "Awareness Session",
      content: "On the occasion of National Road Safety Week, Safety Research Foundation (SRF) organized a Child Safety Seat Awareness session at Tuljabhavani Housing Society, Ravet, Pune. The session received an overwhelming response from parents, who actively participated by asking insightful questions and trying out the demonstration of child safety seats in their own cars.",
      fullDescription: `On the occasion of National Road Safety Week, Safety Research Foundation (SRF) organized a Child Safety Seat Awareness session at Tuljabhavani Housing Society, Ravet, Pune. The session received an overwhelming response from parents, who actively participated by asking insightful questions and trying out the demonstration of child safety seats in their own cars.

The program included an engaging presentation on the types of child safety seats suitable for various age and weight groups, the risks associated with improper or non-usage, and live demonstrations of installation techniques for both ISOFIX and seatbelt-mounted car seats. Parents gained hands-on experience by trying the child seats in their own cars, ensuring a practical understanding of the correct usage.

Attendees appreciated the efforts of SRF, expressing gratitude for organizing such a meaningful and impactful session that emphasized the need for child safety on the roads.

Glimpses of Program`,
      image: childSafety1,
      images: [childSafety1, childSafety2, childSafety3, childSafety4, childSafety5],
      featured: true
    },
    {
      id: 2,
      title: "Road Safety Awareness Sessions",
      date: "27th November 2024",
      location: "Three Schools in Khadki, Pune",
      category: "School Program",
      content: "Safety Research Foundation, in collaboration with Rotary Club Khadki, successfully conducted Road Safety Awareness sessions at three prominent schools in Khadki, Pune—GMI Girls High School (73 students), Alegaokar High School (64 students), and Chetan Dattaji Gaikwad English Medium School (45 students).",
      fullDescription: `Safety Research Foundation, in collaboration with Rotary Club Khadki, successfully conducted Road Safety Awareness sessions at three prominent schools in Khadki, Pune—GMI Girls High School (73 students), Alegaokar High School (64 students), and Chetan Dattaji Gaikwad English Medium School (45 students).

The sessions focused on key topics such as helmet usage for two-wheeler safety, pedestrian safety practices, adherence to traffic rules and signals, the dangers of distracted driving, and the risks of speeding. Students actively participated in engaging discussions, received practical tips, and took part in interactive Q&A sessions. A significant highlight of the event was the collective pledge taken by the students to follow and promote road safety measures within their families and communities. The program emphasized the importance of sharing these learnings to create a broader impact.

SRF continues its commitment to fostering safer roads through education and advocacy, with these sessions representing a crucial step toward nurturing a culture of safety among young road users.

Glimpses of Program`,
      image: roadSafety1,
      images: [roadSafety1, roadSafety2, roadSafety3],
      featured: true
    },
    {
      id: 3,
      title: "Road Safety Awareness Program",
      date: "01 & 02 Sep 2022",
      location: "St Joseph Boys High School, Kirkee, Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted 'Road Safety Awareness Program' for the students at St Joseph Boys High School, Kirkee, Pune. The objective of the program was to make students aware about safe road practices and imbibing good Samaritan values from an early age.",
      fullDescription: `Safety Research Foundation conducted 'Road Safety Awareness Program' for the students at "St Joseph Boys High School", Kirkee, Pune. The objective of the program was to make students aware about safe road practices and imbibing good Samaritan values from an early age.

The program was organised within the school premises and saw active participation of students from std 8th, 9th, National Cadet Corps (NCC) and SCOUT guide cadets. Participants were made aware about traffic rules, regulations, reading & relevance of various signage's and other safe practices.

Special focus was on emphasizing safe bicycle riding practices, minimum driving age, use of helmets, seat belts and maintaining road discipline even as a pedestrian. The session was highly interactive with participants, especially NCC & SCOUT cadets sharing real-life experience and discussing remedial approach.

SRF is committed towards advocating road safety amongst all age groups and categories of road users by way of data driven approach and conducts such programs regularly for various strata of population.

Glimpses of Program`,
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=St+Joseph+School+Program",
      images: [goYellow1, goYellow2],
      featured: false
    },
    {
      id: 4,
      title: "Road Safety Awareness Program",
      date: "29th July 2022",
      location: "St Arnolds Central School Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted a School Road safety awareness program for St Arnold's Central School Pune Our trustee Mr Sesh. S addressed the students on the importance of Road safety…",
      fullDescription: `Safety Research Foundation conducted a School Road safety awareness program for St Arnold's Central School Pune Our trustee Mr Sesh. S addressed the students on the importance of Road safety…

This program was an introduction session on the importance of traffic rules and regulations, students from class 9th participated in this interactive session. Traffic rules, Road Signage's, No mobile phone use while riding /driving. , Pedestrians safety, zebra crossing, No signal jumping, Importance on the use of helmet, seat belts, Bicycle safety rules.

This was an interactive session with the students and a message was passed through the students to their respective parents on Road Safety and follow Traffic Rules and Regulations.`,
      image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=St+Arnolds+Central+School",
      images: [goYellow1],
      featured: false
    },
    {
      id: 5,
      title: "Road Safety Awareness Program",
      date: "22nd July 2022",
      location: "St Arnolds School Pune, Wadgaon Shari",
      category: "School Program",
      content: "Safety Research Foundation conducted a School Road safety awareness program for St Arnolds School Pune Wadgaon Shari. Father Joyce Kurian from St Arnolds supported the cause and addressed the students on Road safety awareness.",
      fullDescription: `Safety Research Foundation conducted a School Road safety awareness program for St Arnolds School Pune Wadgaon Shari. Father Joyce Kurian from St Arnolds supported the cause and addressed the students on Road safety awareness.

This program was an introduction session on the importance of traffic rules and regulations, students from class 8th participated in this interactive session. Traffic rules, Road Signage's, No mobile phone use while riding /driving, Pedestrians safety, zebra crossing, No signal jumping, Importance on the use of helmet, seat belts, Bicycle safety rules.

This was an interactive session with students and a message was passed through the students to their respective parents on the importance on Road safety, Traffic Rules and Regulations.`,
      image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=St+Arnolds+School",
      images: [goYellow1, goYellow2],
      featured: false
    },
    {
      id: 6,
      title: "Road Safety Awareness Program",
      date: "12th July 2022",
      location: "Apte Prashala Deccan Gymkhana Pune",
      category: "School Program",
      content: "Safety Research Foundation conducted a School Road safety awareness program for Apte Prashala.",
      fullDescription: `Safety Research Foundation conducted a School Road safety awareness program for Apte Prashala.

This program was an introduction session on the importance of traffic rules and regulations,students from class 8th and 9th participated in this interactive session. Traffic rules, Road Signage's, No mobile phone use while riding /driving, Pedestrians safety, Zebra crossing, No signal jumping, Importance on the use of helmet, seat belts, Bicycle safety rules.

This session was an interaction with students and a message was passed through the students to their respective parents on the importance traffic rules and regulations.`,
      image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Apte+Prashala",
      images: [goYellow1, goYellow3],
      featured: false
    },
    {
      id: 7,
      title: "Go Yellow Road Safety Awareness",
      date: "25th & 26th Feb 2022",
      location: "Pune University Chowk & Vimanagar Chowk",
      category: "Public Awareness",
      content: "SRF team conducted a Road safety Awareness Program titled GO YELLOW on 25th Feb @Pune University Chowk & Vimanagar Chowk and 26thFeb @ Bal Gandharv /Good Luck chowk. Focus of the event was to create awareness on Road safety rules and the awareness on the new fine structure levied by the Traffic department.",
      fullDescription: `SRF team conducted a Road safety Awareness Program titled GO YELLOW on 25th Feb @Pune University Chowk & Vimanagar Chowk and 26thFeb @ Bal Gandharv /Good Luck chowk. Focus of the event was to create awareness on Road safety rules and the awareness on the new fine structure levied by the Traffic department.

In this awareness program we tagged the road users with a YELLOW badge Symbolising 'MY Commitment towards Road Safety. As the colour Yellow symbolises every individual's commitment towards following Road Safety rules." SRF, team has tagged the road users with Go yellow badges and spoke on current scenario of traffic condition and how important it is to follow the traffic safety rules, the team has also tagged the Yellow Badges Sr.Pi Mr. P .Masalkar & PSI .Jadhav of Pune University traffic police station. Police team from traffic police station and traffic guards participated in the event. The event was well received by the participants with appreciation of work done by SRF.

On 26th Feb 2022 Mrs Universe Australasian Dr Prachiti Punde also participated our cause of road safety awareness Go Yellow, Dr Prachiti interacted with the general road users and made them aware on abiding the safety norms and following all the road safety rules. She along with SRF team distributed the Yellow Badges Psi Mr. Nilesh Patil and the police station staff Of Bal Gandharva police station.`,
      image: "https://via.placeholder.com/400x250/eab308/ffffff?text=Go+Yellow+Campaign",
      images: [goYellow1, goYellow2, goYellow3, goYellow4, goYellow5],
      featured: true
    },
    {
      id: 8,
      title: "Webinar on Scientific Crash Investigation",
      date: "28th September 2021",
      location: "Online - Indian Chemical Council",
      category: "Webinar",
      content: "Safety Research Foundation conducted an online session on Scientific Crash Investigation and Data Collection for Indian Chemical Council (ICC) employees on 28th September 2021. The webinar session was part of the workshop Emergency Response Services Training organized by ICC. The importance of scientific crash investigation and its procedures were discussed in this session.",
      fullDescription: `Safety Research Foundation conducted an online session on "Scientific Crash Investigation and Data Collection" for Indian Chemical Council (ICC) employees on 28th September 2021. The webinar session was part of the workshop "Emergency Response Services Training" organized by ICC. The importance of scientific crash investigation and its procedures were discussed in this session.`,
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=ICC+Webinar",
      images: [goYellow1, goYellow2],
      featured: false
    },
    {
      id: 9,
      title: "Road Safety Audit: NH 48",
      date: "24th March 2021",
      location: "Katraj – Dehu Road Bypass, Pune",
      category: "Safety Audit",
      content: "Safety Research Foundation undertook Road Safety Audit of Katraj – Navale Section of NH 48. The study was executed under the approval of the Deputy Commissioner of Police, Traffic, Pune city and the report was submitted on 24th March 2021 after thorough study for a period of one month.",
      fullDescription: `Safety Research Foundation undertook "Road Safety Audit" of Katraj – Navale Section of NH 48. The study was executed under the approval of the Deputy Commissioner of Police, Traffic, Pune city and the report was submitted on 24th March 2021 after thorough study for a period of one month. This particular section under study is a high crash prone stretch, specifically involving heavy vehicles, motorized 2 Wheelers & pedestrians resulting in fatal/serious injuries. Scientific and Evidence based approach was adopted involving observational site study, analysing traffic patterns, human behavioural aspects, analysis of police records and crash reports/data. Team of experts including Road safety Engineers, Analytics team and Subject Matter experts were deployed and stakeholders including traffic police and local authorities were consulted.

The study analysed historic crash trends based on FIRs compiled, traffic composition and geometrics of vulnerable section of the stretch were studied through strategic site visits and appropriate data recording, road user interviews were conducted to capture the user experience.

Based on a detailed assessment of the prevailing condition in conjunction with crash and traffic data, four critical zones were identified; Navale bridge, Katraj tunnel, Selfie point, and Swami Narayan Mandir to Katraj tunnel stretch. Each zone had its specific safety concern leading at least 3 fatal crashes in the last three years. Recommendations included repositioning bus stops, dedicated merging lanes, more visible lane markings, removing hazardous objects, remapping traffic signal cycle timings etc. Comprehensive report suggesting short & long term measures has been submitted to the concerned authorities. SRF is committed to extend support during implementation phase.`,
      image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=NH+48+Safety+Audit",
      images: [goYellow1, goYellow3, goYellow4],
      featured: true
    },
    {
      id: 10,
      title: "Reflective Safety Jacket Distribution",
      date: "19th February 2021",
      location: "MIDC Buttibori Police Station, Nagpur",
      category: "Police Support",
      content: "On 19th February 2021, Safety Research Foundation (SRF) organized an event focused on Honoring the Police Personnel on duty, who have put the Nation and its Citizens ahead of themselves in the dark times. As a tribute to their selfless service, a small token of appreciation from SRF, in the form of distribution of Reflective safety jacket has been organized in the city of Nagpur.",
      fullDescription: `On 19th February 2021, Safety Research Foundation (SRF) organized an event focused on "Honoring the Police Personnel on duty, who have put the Nation and its Citizens ahead of themselves in the dark times. As a tribute to their selfless service, a small token of appreciation from SRF, in the form of distribution of Reflective safety jacket has been organized in the city of Nagpur. Reflective safety Apparel caters to the safety needs of people working at sensitive and dangerous area especially at night or poor light condition.

SRF team visited MIDC Buttibori police station Nagpur and they gave a brief introduction about SRF and distributed the Reflective Safety Jackets under the aegis of the DYSP Mr. Rajendra Chauhan, inspector Mr. Maruti Muluk and other police personnel from MIDC Buttibori police station participated in the event. The event was well received by the participants with many appreciating SRF's gesture.`,
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=Police+Safety+Jackets",
      images: [goYellow1, goYellow2],
      featured: false
    }
  ];

  // Find the event by ID
  console.log('EventDetail - Looking for event ID:', id, 'Type:', typeof id);
  console.log('Available events:', eventsData.map(e => ({ id: e.id, title: e.title })));
  const event = eventsData.find(e => e.id === parseInt(id));
  console.log('Found event:', event ? event.title : 'Not found');

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const switchMainImage = (index) => {
    setMainImageIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user manually switches
  };

  const nextImage = () => {
    if (event?.images) {
      setCurrentImageIndex((prev) => (prev + 1) % event.images.length);
    }
  };

  const prevImage = () => {
    if (event?.images) {
      setCurrentImageIndex((prev) => (prev - 1 + event.images.length) % event.images.length);
    }
  };

  // Auto-play main image slideshow
  React.useEffect(() => {
    if (!event?.images || event.images.length <= 1 || !isAutoPlaying) {
      return;
    }

    const interval = setInterval(() => {
      setMainImageIndex((prev) => (prev + 1) % event.images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [event?.images, isAutoPlaying]);

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Events
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
              {event.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {event.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Full Width Content */}
        <div>
            {/* Event Images */}
            {event.images && event.images.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-primary rounded-full"></span>
                  Event Gallery
                </h2>
                
                {/* Hero Image */}
                {event.images.length > 0 && (
                  <div className="mb-6">
                    <div 
                      className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                      onClick={() => openLightbox(mainImageIndex)}
                    >
                      <div className="aspect-[16/9] bg-gray-100">
                        <img
                          src={event.images[mainImageIndex]}
                          alt={`${event.title} - Main Image`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                          loading="lazy"
                          key={mainImageIndex}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                          Click to view full size
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>

                      {/* Play/Pause Button */}
                      {event.images.length > 1 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsAutoPlaying(!isAutoPlaying);
                          }}
                          className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm"
                          aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                        >
                          {isAutoPlaying ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                            </svg>
                          )}
                        </button>
                      )}
                      
                      {/* Image indicator with auto-play status */}
                      <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <span>{mainImageIndex + 1} / {event.images.length}</span>
                          {event.images.length > 1 && (
                            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Small Thumbnail Grid - All images */}
                {event.images.length > 1 && (
                  <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                    {event.images.map((image, index) => (
                      <div key={index} className="group relative">
                        <div 
                          className={`aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer bg-gray-100 ${
                            index === mainImageIndex ? 'ring-2 ring-primary ring-offset-2' : ''
                          }`}
                          onClick={() => switchMainImage(index)}
                        >
                          <img
                            src={image}
                            alt={`${event.title} - Image ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="bg-white/90 text-gray-800 px-1.5 py-0.5 rounded-full text-xs font-medium backdrop-blur-sm">
                              {index + 1}
                            </span>
                          </div>
                          {index === mainImageIndex && (
                            <div className="absolute top-1 left-1">
                              <div className="bg-primary text-white rounded-full p-1">
                                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            </div>
                          )}
                          <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-black/60 backdrop-blur-sm rounded-full p-0.5">
                              <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Gallery Stats */}
                <div className="mt-6 flex items-center justify-center">
                  <div className="bg-primary/10 rounded-full px-6 py-2 border border-primary/20">
                    <span className="text-sm font-medium text-gray-700">
                      {event.images.length} {event.images.length === 1 ? 'Photo' : 'Photos'} from this event
                    </span>
                  </div>
                </div>
              </div>
            )}

          {/* Event Description - Full Width */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="w-1 h-8 bg-gradient-primary rounded-full"></span>
              About This Event
            </h2>
            
            {/* Event Information Inside About Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Event Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm">Date</p>
                    <p className="text-gray-600 text-sm">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm">Location</p>
                    <p className="text-gray-600 text-sm">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm">Category</p>
                    <p className="text-gray-600 text-sm">{event.category}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                  <Building2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1 text-sm">Organized By</p>
                    <p className="text-gray-600 text-sm">Safety Research Foundation (SRF)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-primary/5 rounded-lg p-6 border-l-4 border-primary mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {event.content}
                </p>
              </div>
              
              {event.fullDescription && (
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {event.fullDescription}
                </div>
              )}
            </div>
          </div>

          {/* Impact Section - Full Width */}
          <div className="bg-primary/10 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-7 h-7 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">Our Impact & Mission</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Promoting road safety awareness in communities</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Supporting traffic police and law enforcement</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Reducing road accidents through education</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Building safer road infrastructure</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Conducting scientific research on road safety</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Collaborating with government agencies</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && event?.images && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
            {/* Close Button - More Visible */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            {event.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/40"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Main Image Container */}
            <div 
              className="relative max-h-full max-w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={event.images[currentImageIndex]}
                alt={`${event.title} - Image ${currentImageIndex + 1}`}
                className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                style={{ maxHeight: 'calc(100vh - 120px)' }}
              />
            </div>

            {/* Image Info Bar */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
              <div className="bg-black/70 text-white px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-4 text-sm">
                  <span className="font-medium">
                    {currentImageIndex + 1} / {event.images.length}
                  </span>
                  <span className="text-white/70">•</span>
                  <span className="text-white/90">
                    Press ESC to close, ← → to navigate
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {event.images.length > 1 && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20">
                <div className="flex gap-2 max-w-md overflow-x-auto pb-2 px-2">
                  {event.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImageIndex(index);
                      }}
                      className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentImageIndex
                          ? 'border-white shadow-lg scale-110'
                          : 'border-white/30 hover:border-white/60 hover:scale-105'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetail;
