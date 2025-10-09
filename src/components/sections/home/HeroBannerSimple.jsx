import { Shield, ArrowRight, AlertCircle, RefreshCw } from 'lucide-react';
import { useState, useEffect } from 'react';

// Direct imports for the existing images
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/IMG_2239.jpg';

// Static array of images - this should definitely work
const images = [img1, img2, img3];
const slideDuration = 5000; // 5 seconds

export default function HeroBannerSimple() {
  const [currentImage, setCurrentImage] = useState(0);

  // Image carousel effect
  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, slideDuration);
    return () => clearInterval(interval);
  }, []);

  console.log('HeroBannerSimple: Images loaded:', images.length, images);

  return (
    <section id="home" className="relative overflow-hidden bg-white">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[28%_72%]">
          {/* Left Side - Primary Panel with Text */}
          <div className="relative bg-primary py-10 sm:py-8 md:py-7 lg:py-6 px-6 sm:px-5 md:px-6 lg:px-8 flex flex-col justify-center order-2 lg:order-1">
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-4 border-white/20 rounded-lg"></div>
            <div className="absolute bottom-4 right-4 w-16 h-16 border-4 border-white/20 rounded-full"></div>

            {/* Main Heading */}
            <div className="space-y-1 mb-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[0.85] tracking-tight">
                Safety<br />
                Research<br />
                Foundation
              </h1>
              <div className="h-1 w-16 bg-white rounded-full"></div>
            </div>

            {/* Subtitle */}
            <p className="text-sm lg:text-base text-white/90 font-semibold mb-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Promoting awareness, education, and training for road safety
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button className="group bg-white hover:bg-gray-100 text-primary px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                Get Involved
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white hover:bg-gray-50 text-primary border-2 border-white px-5 py-2 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2">
                Learn More
                <AlertCircle className="w-4 h-4" />
              </button>
            </div>

            {/* Bottom Stats */}
            <div className="mt-4 grid grid-cols-3 gap-2 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-xl font-black text-white">10K+</div>
                <div className="text-[9px] text-white/80 font-medium">Lives Impacted</div>
              </div>
              <div className="text-center border-x border-white/20">
                <div className="text-xl font-black text-white">500+</div>
                <div className="text-[9px] text-white/80 font-medium">Programs</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black text-white">25+</div>
                <div className="text-[9px] text-white/80 font-medium">Years</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Carousel */}
          <div className="relative h-[280px] sm:h-[320px] md:h-[340px] lg:min-h-[320px] lg:h-auto order-1 lg:order-2 bg-gray-100">
            {/* Image Carousel */}
            <div className="absolute inset-0 bg-gray-100">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <img
                    src={image}
                    alt={`Road Safety Background ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      console.error(`Failed to load image ${index + 1}:`, image);
                    }}
                  />
                </div>
              ))}
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-primary/20"></div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`transition-all duration-300 ${
                    index === currentImage ? 'w-12 h-3' : 'w-3 h-3'
                  }`}
                >
                  <div className={`h-full rounded-full transition-all duration-300 ${
                    index === currentImage 
                      ? 'bg-primary shadow-lg' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}>
                    {index === currentImage && (
                      <div 
                        className="h-full bg-white rounded-full animate-progress-bar"
                        style={{ animationDuration: `${slideDuration}ms` }}
                      ></div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              {currentImage + 1} / {images.length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
