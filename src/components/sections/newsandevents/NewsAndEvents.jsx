import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import Child Safety Seat Awareness Session images
import childSafety1 from '../../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0001.jpg';
import childSafety2 from '../../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0003.jpg';
import childSafety3 from '../../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0005.jpg';
import childSafety4 from '../../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0006.jpg';
import childSafety5 from '../../../assets/images/ChildSafetySeatAwarenessSession/IMG-20250112-WA0014.jpg';

// Import local images as placeholders for Road Safety images
import roadSafety1 from '../../../assets/images/Road_Safety_Training.jpg';
import roadSafety2 from '../../../assets/images/Create_Public_awareness.jpg';
import roadSafety3 from '../../../assets/images/People_Driver_Training.jpg';
import roadSafety4 from '../../../assets/images/Road_Infrastructure.jpg';
import roadSafety5 from '../../../assets/images/carousel-3.jpg';

const eventsData = [
  {
    id: 1,
    title: "Child Safety Seat Awareness Session",
    date: "11th January 2025",
    location: "Tuljabhavani Housing Society, Ravet, Pune",
    category: "Awareness Session",
    excerpt: "On the occasion of National Road Safety Week, Safety Research Foundation (SRF) organized a Child Safety Seat Awareness session...",
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
    excerpt: "Safety Research Foundation, in collaboration with Rotary Club Khadki, successfully conducted Road Safety Awareness sessions...",
    content: "Safety Research Foundation, in collaboration with Rotary Club Khadki, successfully conducted Road Safety Awareness sessions at three prominent schools in Khadki, Pune—GMI Girls High School (73 students), Alegaokar High School (64 students), and Chetan Dattaji Gaikwad English Medium School (45 students).",
    fullDescription: `Safety Research Foundation, in collaboration with Rotary Club Khadki, successfully conducted Road Safety Awareness sessions at three prominent schools in Khadki, Pune—GMI Girls High School (73 students), Alegaokar High School (64 students), and Chetan Dattaji Gaikwad English Medium School (45 students).

The sessions focused on key topics such as helmet usage for two-wheeler safety, pedestrian safety practices, adherence to traffic rules and signals, the dangers of distracted driving, and the risks of speeding. Students actively participated in engaging discussions, received practical tips, and took part in interactive Q&A sessions. A significant highlight of the event was the collective pledge taken by the students to follow and promote road safety measures within their families and communities. The program emphasized the importance of sharing these learnings to create a broader impact.

SRF continues its commitment to fostering safer roads through education and advocacy, with these sessions representing a crucial step toward nurturing a culture of safety among young road users.

Glimpses of Program`,
    image: roadSafety1,
    images: [roadSafety1, roadSafety2, roadSafety3, roadSafety4, roadSafety5],
    featured: true
  },
  {
    id: 3,
    title: "Road Safety Awareness Program",
    date: "01 & 02 Sep 2022",
    location: "St Joseph Boys High School, Kirkee, Pune",
    category: "School Program",
    excerpt: "Safety Research Foundation conducted 'Road Safety Awareness Program' for the students at St Joseph Boys High School...",
    fullContent: `Safety Research Foundation conducted 'Road Safety Awareness Program' for the students at "St Joseph Boys High School", Kirkee, Pune. The objective of the program was to make students aware about safe road practices and imbibing good Samaritan values from an early age.

The program was organised within the school premises and saw active participation of students from std 8th, 9th, National Cadet Corps (NCC) and SCOUT guide cadets. Participants were made aware about traffic rules, regulations, reading & relevance of various signage's and other safe practices.

Special focus was on emphasizing safe bicycle riding practices, minimum driving age, use of helmets, seat belts and maintaining road discipline even as a pedestrian. The session was highly interactive with participants, especially NCC & SCOUT cadets sharing real-life experience and discussing remedial approach.

SRF is committed towards advocating road safety amongst all age groups and categories of road users by way of data driven approach and conducts such programs regularly for various strata of population.

Glimpses of Program`,
    image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=St+Joseph+School+Program",
    featured: false
  },
  {
    id: 4,
    title: "Road Safety Awareness Program",
    date: "29th July 2022",
    location: "St Arnolds Central School Pune",
    category: "School Program",
    excerpt: "Safety Research Foundation conducted a School Road safety awareness program for St Arnold's Central School Pune...",
    fullContent: `Safety Research Foundation conducted a School Road safety awareness program for St Arnold's Central School Pune Our trustee Mr Sesh. S addressed the students on the importance of Road safety…

This program was an introduction session on the importance of traffic rules and regulations, students from class 9th participated in this interactive session. Traffic rules, Road Signage's, No mobile phone use while riding /driving. , Pedestrians safety, zebra crossing, No signal jumping, Importance on the use of helmet, seat belts, Bicycle safety rules.

This was an interactive session with the students and a message was passed through the students to their respective parents on Road Safety and follow Traffic Rules and Regulations.`,
    image: "https://via.placeholder.com/400x250/f59e0b/ffffff?text=St+Arnolds+Central+School",
    featured: false
  },
  {
    id: 5,
    title: "Road Safety Awareness Program",
    date: "22nd July 2022",
    location: "St Arnolds School Pune, Wadgaon Shari",
    category: "School Program",
    excerpt: "Safety Research Foundation conducted a School Road safety awareness program for St Arnolds School Pune Wadgaon Shari...",
    fullContent: `Safety Research Foundation conducted a School Road safety awareness program for St Arnolds School Pune Wadgaon Shari. Father Joyce Kurian from St Arnolds supported the cause and addressed the students on Road safety awareness.

This program was an introduction session on the importance of traffic rules and regulations, students from class 8th participated in this interactive session. Traffic rules, Road Signage's, No mobile phone use while riding /driving, Pedestrians safety, zebra crossing, No signal jumping, Importance on the use of helmet, seat belts, Bicycle safety rules.

This was an interactive session with students and a message was passed through the students to their respective parents on the importance on Road safety, Traffic Rules and Regulations.`,
    image: "https://via.placeholder.com/400x250/ef4444/ffffff?text=St+Arnolds+School",
    featured: false
  },
  {
    id: 6,
    title: "Road Safety Awareness Program",
    date: "12th July 2022",
    location: "Apte Prashala Deccan Gymkhana Pune",
    category: "School Program",
    excerpt: "Safety Research Foundation conducted a School Road safety awareness program for Apte Prashala...",
    fullContent: `Safety Research Foundation conducted a School Road safety awareness program for Apte Prashala.

This program was an introduction session on the importance of traffic rules and regulations,students from class 8th and 9th participated in this interactive session. Traffic rules, Road Signage's, No mobile phone use while riding /driving, Pedestrians safety, Zebra crossing, No signal jumping, Importance on the use of helmet, seat belts, Bicycle safety rules.

This session was an interaction with students and a message was passed through the students to their respective parents on the importance traffic rules and regulations.`,
    image: "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Apte+Prashala",
    featured: false
  },
  {
    id: 7,
    title: "Go Yellow Road Safety Awareness",
    date: "25th & 26th Feb 2022",
    location: "Pune University Chowk & Vimanagar Chowk",
    category: "Public Awareness",
    excerpt: "SRF team conducted a Road safety Awareness Program titled GO YELLOW on 25th Feb @Pune University Chowk...",
    fullContent: `SRF team conducted a Road safety Awareness Program titled GO YELLOW on 25th Feb @Pune University Chowk & Vimanagar Chowk and 26thFeb @ Bal Gandharv /Good Luck chowk. Focus of the event was to create awareness on Road safety rules and the awareness on the new fine structure levied by the Traffic department.

In this awareness program we tagged the road users with a YELLOW badge Symbolising 'MY Commitment towards Road Safety. As the colour Yellow symbolises every individual's commitment towards following Road Safety rules." SRF, team has tagged the road users with Go yellow badges and spoke on current scenario of traffic condition and how important it is to follow the traffic safety rules, the team has also tagged the Yellow Badges Sr.Pi Mr. P .Masalkar & PSI .Jadhav of Pune University traffic police station. Police team from traffic police station and traffic guards participated in the event. The event was well received by the participants with appreciation of work done by SRF.

On 26th Feb 2022 Mrs Universe Australasian Dr Prachiti Punde also participated our cause of road safety awareness Go Yellow, Dr Prachiti interacted with the general road users and made them aware on abiding the safety norms and following all the road safety rules. She along with SRF team distributed the Yellow Badges Psi Mr. Nilesh Patil and the police station staff Of Bal Gandharva police station.`,
    image: "https://via.placeholder.com/400x250/eab308/ffffff?text=Go+Yellow+Campaign",
    featured: true
  },
  {
    id: 8,
    title: "Webinar on Scientific Crash Investigation",
    date: "28th September 2021",
    location: "Online - Indian Chemical Council",
    category: "Webinar",
    excerpt: "Safety Research Foundation conducted an online session on Scientific Crash Investigation and Data Collection...",
    fullContent: `Safety Research Foundation conducted an online session on "Scientific Crash Investigation and Data Collection" for Indian Chemical Council (ICC) employees on 28th September 2021. The webinar session was part of the workshop "Emergency Response Services Training" organized by ICC. The importance of scientific crash investigation and its procedures were discussed in this session.`,
    image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=ICC+Webinar",
    featured: false
  },
  {
    id: 9,
    title: "Road Safety Audit: NH 48",
    date: "24th March 2021",
    location: "Katraj – Dehu Road Bypass, Pune",
    category: "Safety Audit",
    excerpt: "Safety Research Foundation undertook Road Safety Audit of Katraj – Navale Section of NH 48...",
    fullContent: `Safety Research Foundation undertook "Road Safety Audit" of Katraj – Navale Section of NH 48. The study was executed under the approval of the Deputy Commissioner of Police, Traffic, Pune city and the report was submitted on 24th March 2021 after thorough study for a period of one month. This particular section under study is a high crash prone stretch, specifically involving heavy vehicles, motorized 2 Wheelers & pedestrians resulting in fatal/serious injuries. Scientific and Evidence based approach was adopted involving observational site study, analysing traffic patterns, human behavioural aspects, analysis of police records and crash reports/data. Team of experts including Road safety Engineers, Analytics team and Subject Matter experts were deployed and stakeholders including traffic police and local authorities were consulted.

The study analysed historic crash trends based on FIRs compiled, traffic composition and geometrics of vulnerable section of the stretch were studied through strategic site visits and appropriate data recording, road user interviews were conducted to capture the user experience.

Based on a detailed assessment of the prevailing condition in conjunction with crash and traffic data, four critical zones were identified; Navale bridge, Katraj tunnel, Selfie point, and Swami Narayan Mandir to Katraj tunnel stretch. Each zone had its specific safety concern leading at least 3 fatal crashes in the last three years. Recommendations included repositioning bus stops, dedicated merging lanes, more visible lane markings, removing hazardous objects, remapping traffic signal cycle timings etc. Comprehensive report suggesting short & long term measures has been submitted to the concerned authorities. SRF is committed to extend support during implementation phase.`,
    image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=NH+48+Safety+Audit",
    featured: true
  },
  {
    id: 10,
    title: "Reflective Safety Jacket Distribution",
    date: "19th February 2021",
    location: "MIDC Buttibori Police Station, Nagpur",
    category: "Police Support",
    excerpt: "Safety Research Foundation organized an event focused on Honoring the Police Personnel on duty...",
    fullContent: `On 19th February 2021, Safety Research Foundation (SRF) organized an event focused on "Honoring the Police Personnel on duty, who have put the Nation and its Citizens ahead of themselves in the dark times. As a tribute to their selfless service, a small token of appreciation from SRF, in the form of distribution of Reflective safety jacket has been organized in the city of Nagpur. Reflective safety Apparel caters to the safety needs of people working at sensitive and dangerous area especially at night or poor light condition.

SRF team visited MIDC Buttibori police station Nagpur and they gave a brief introduction about SRF and distributed the Reflective Safety Jackets under the aegis of the DYSP Mr. Rajendra Chauhan, inspector Mr. Maruti Muluk and other police personnel from MIDC Buttibori police station participated in the event. The event was well received by the participants with many appreciating SRF's gesture.`,
    image: "https://via.placeholder.com/400x250/059669/ffffff?text=Police+Safety+Jackets",
    featured: false
  }
];

const NewsAndEvents = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', 'School Program', 'Awareness Session', 'Public Awareness', 'Webinar', 'Safety Audit', 'Police Support'];
  
  const filteredEvents = filter === 'all' 
    ? eventsData 
    : eventsData.filter(event => event.category === filter);

  const handleReadMore = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-primary to-primary"></div>
            <div className="mx-4 sm:mx-6 flex items-center gap-2 sm:gap-3">
              <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-primary" strokeWidth={2} />
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
                News & Events
              </h2>
            </div>
            <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-primary to-primary"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest road safety initiatives, awareness programs, and community outreach activities
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category === 'all' ? 'All Events' : category}
            </button>
          ))}
        </div>

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).slice(0, 2).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">{event.excerpt}</p>
                  <button
                    onClick={() => handleReadMore(event.id)}
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 text-primary px-2 py-1 rounded-full text-xs font-medium">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.date}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="line-clamp-1">{event.location}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.excerpt}</p>
                <button
                  onClick={() => handleReadMore(event.id)}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-200 font-medium text-sm"
                >
                  Read More
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredEvents.length > 9 && (
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Load More Events
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsAndEvents;
