import React from 'react';
import { Shield, Users, Construction, Megaphone, CheckCircle, ArrowRight, BookOpen, Award, AlertTriangle } from 'lucide-react';
import roadSafetyImg from '../../../assets/images/Road_Safety_Training.jpg';
import roadInfrastructureImg from '../../../assets/images/Road_Infrastructure.jpg';
import publicAwarenessImg from '../../../assets/images/Create_Public_awareness.jpg';
import driverTrainingImg from '../../../assets/images/People_Driver_Training.jpg';

export default function Training() {
  const trainingPrograms = [
    {
      id: 1,
      title: "Road Safety Training",
      description: "Comprehensive training programs for individuals and organizations to promote safe driving practices and road awareness.",
      icon: Shield,
      color: "bg-blue-500",
      image: roadSafetyImg,
      features: [
        "Defensive driving techniques",
        "Traffic rules and regulations",
        "Emergency response procedures",
        "Vehicle safety checks"
      ]
    },
    {
      id: 2,
      title: "Road Infrastructure Improvements",
      description: "Strategic initiatives to enhance road infrastructure for better safety and traffic management.",
      icon: Construction,
      color: "bg-green-500",
      image: roadInfrastructureImg,
      features: [
        "Traffic signal optimization",
        "Road marking improvements",
        "Safety barrier installations",
        "Pedestrian crossing enhancements"
      ]
    },
    {
      id: 3,
      title: "Create Public Awareness towards Road Safety",
      description: "Creating widespread awareness about road safety through community engagement and educational programs.",
      icon: Megaphone,
      color: "bg-orange-500",
      image: publicAwarenessImg,
      features: [
        "Community workshops",
        "School safety programs",
        "Media campaigns",
        "Safety awareness events"
      ]
    },
    {
      id: 4,
      title: "People/Driver Training",
      description: "Specialized training programs for drivers, focusing on skill development and safety consciousness.",
      icon: Users,
      color: "bg-purple-500",
      image: driverTrainingImg,
      features: [
        "Professional driver certification",
        "Advanced driving skills",
        "Safety protocol training",
        "Continuous education programs"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "People Trained", icon: Users },
    { number: "50+", label: "Training Sessions", icon: BookOpen },
    { number: "25+", label: "Infrastructure Projects", icon: Construction },
    { number: "100+", label: "Awareness Events", icon: Megaphone }
  ];

  return (
    <div className="bg-gray-50">
      {/* Section Header */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Training & 
              <span className="text-primary"> Awareness Programs</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive initiatives to promote road safety through education, infrastructure development, 
              and community engagement across India.
            </p>
          </div>

          {/* Training Programs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {trainingPrograms.map((program, index) => (
              <div key={program.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image section with enhanced borders */}
                <div className="relative overflow-hidden">
                  {/* Tricolor border effect */}
                  <div className="h-2 bg-gradient-to-r from-saffron via-white to-green"></div>
                  
                  <div className="h-48 sm:h-56 relative overflow-hidden border-4 border-white">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Enhanced overlay with Indian flag colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-primary/20 group-hover:via-transparent group-hover:to-transparent transition-all duration-300"></div>
                    
                    {/* Icon badge */}
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg">
                        <program.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    
                    {/* Title overlay with enhanced styling */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h4 className="text-white font-bold text-lg sm:text-xl drop-shadow-lg leading-tight">
                        {program.title}
                      </h4>
                      <div className="w-12 h-1 bg-saffron mt-2 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Bottom tricolor accent */}
                  <div className="h-1 bg-gradient-to-r from-saffron via-white to-green"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border-t-4 border-primary">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Join Our Mission for Safer Roads
              </h3>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Be part of India's road safety revolution. Together, we can make our roads safer for everyone.
              </p>
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2">
                <span>Learn More About Our Programs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
