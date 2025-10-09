import React, { useState } from 'react';
import { Mail, CheckCircle, User, AtSign } from 'lucide-react';

const NewsletterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            You've successfully subscribed to our newsletter. We'll keep you updated with the latest road safety news and initiatives.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ firstName: '', lastName: '', email: '' });
            }}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Subscribe Another
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full bg-gradient-to-r from-primary/5 to-secondary/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Header Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <div className="hidden lg:block">
                <div className="w-2 h-16 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent leading-tight">
                Stay Tuned
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                Sign Up for our Newsletter
              </h2>
            </div>
            
            <div className="space-y-4 max-w-lg">
              <p className="text-lg text-gray-600 leading-relaxed">
                Get the latest updates on road safety initiatives, events, and important announcements delivered straight to your inbox.
              </p>
              
              <div className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-gray-100">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 mb-1">Join Our Community</p>
                  <p className="text-sm text-gray-600">
                    Thousands of safety advocates stay informed about road safety initiatives across India.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Weekly Updates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Event Alerts</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Safety Tips</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form Fields in Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="First name"
                    />
                  </div>
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>

              {/* Email Address - Full Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-600">
                  By subscribing, you agree to receive newsletters and updates from Safety Research Foundation. 
                  You can unsubscribe at any time. We respect your privacy and will never share your information.
                </p>
              </div>

              {/* Subscribe Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterPage;
