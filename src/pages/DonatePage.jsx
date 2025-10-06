import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Shield, Users, FileText, Award, CheckCircle, ExternalLink, Eye, X, Copy, Phone, Mail, Building } from 'lucide-react';
import donateImage from '../assets/images/donate/updesh-raj-MBFqUfiD8vU-unsplash.jpg';

export default function DonatePage() {
  const navigate = useNavigate();
  const [copiedText, setCopiedText] = React.useState('');
  const [showDonationForm, setShowDonationForm] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('individual');
  const [formData, setFormData] = React.useState({
    // Individual form data
    individual: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      state: '',
      country: 'India',
      currency: 'INR',
      amount: ''
    },
    // Organization form data
    organization: {
      companyName: '',
      contactPerson: '',
      designation: '',
      email: '',
      mobile: '',
      landline: '',
      streetAddress: '',
      apartment: '',
      city: '',
      zipCode: '',
      state: '',
      country: 'India',
      panCard: '',
      amount: '',
      currency: 'INR'
    }
  });

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedText(label);
      setTimeout(() => setCopiedText(''), 2000);
    });
  };

  const showDonationFormHandler = () => {
    setShowDonationForm(true);
    setShowThankYou(false);
    document.body.style.overflow = 'hidden';
  };

  const closeDonationForm = () => {
    setShowDonationForm(false);
    setShowThankYou(false);
    document.body.style.overflow = 'unset';
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowDonationForm(false);
    setShowThankYou(true);
  };

  const backToDonateForm = () => {
    setShowThankYou(false);
    setShowDonationForm(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [activeTab]: {
        ...prev[activeTab],
        [field]: value
      }
    }));
  };

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala',
    'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal'
  ];

  const uspPoints = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Trustees with Strong Background",
      description: "Extensive experience in Road Safety with proven track record"
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Qualified Professional Team",
      description: "Road safety experts with technical expertise and field experience"
    },
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Data Driven Approach",
      description: "Scientific methodology and evidence-based solutions for road safety"
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Government Coordination",
      description: "Close coordination with Government agencies and departments"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Annual Summarized Reports",
      description: "Transparent reporting to all donors for activities undertaken"
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "80G Tax Exemption",
      description: "80G certificate to all donors for tax exemption under IT Act provisions"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Support Road Safety in India
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Safety Research Foundation is committed to Road Safety and reduction of fatalities on Indian Roads. 
              Your contribution will go a long way in achieving this objective.
            </p>
          </div>
        </div>
      </div>

      {/* Registration Details Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
            Registration Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">12A Provisional Approval</h3>
              </div>
              <p className="text-gray-700 font-mono text-sm sm:text-base">
                No. AATTS4811JE20206
              </p>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-200 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">80G Provisional Approval</h3>
              </div>
              <p className="text-gray-700 font-mono text-sm sm:text-base">
                No. AATTS4811JF20206
              </p>
            </div>
          </div>
        </div>

        {/* Donation Details Section */}
        <div id="donation-details" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              Support Our Mission
            </h2>

            {/* Bank Transfer Details */}
            <div className="bg-gray-50 rounded-lg p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Building className="w-6 h-6 text-primary" />
                Bank Transfer Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Name</p>
                    <p className="font-medium text-gray-900">Safety Research Foundation</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('Safety Research Foundation', 'Account Name')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Account Number</p>
                    <p className="font-medium text-gray-900">XXXXXXXXXXXX</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('XXXXXXXXXXXX', 'Account Number')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">IFSC Code</p>
                    <p className="font-medium text-gray-900">XXXXXXXXX</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('XXXXXXXXX', 'IFSC Code')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Bank Name</p>
                    <p className="font-medium text-gray-900">XXXXX Bank</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard('XXXXX Bank', 'Bank Name')}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                  >
                    <Copy className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              {copiedText && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm text-center">
                  {copiedText} copied to clipboard!
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Need Help?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Email</p>
                    <a href="mailto:info@safetyresearchfoundation.org" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                      info@safetyresearchfoundation.org
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Phone</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-blue-600 hover:text-blue-700 font-medium text-lg">
                      +91-XXXXXXXXXX
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our USP Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Image */}
            <div className="relative overflow-hidden">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                <img
                  src={donateImage}
                  alt="Road Safety Mission - Supporting safer roads in India"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <h3 className="text-xl font-bold mb-2">Our Unique Strengths</h3>
                    <p className="text-sm opacity-90">
                      Combining expertise, transparency, and government collaboration 
                      to create meaningful impact in road safety across India.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - USP Points */}
            <div className="p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Why Choose SRF?
              </h2>
              
              <div className="space-y-6">
                {uspPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex-shrink-0 bg-primary/10 p-2 rounded-lg">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{point.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Make a Difference Today
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <button 
                className="group bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={showDonationFormHandler}
              >
                <Heart className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                Click here to donate
                <ExternalLink className="w-5 h-5 opacity-70" />
              </button>
              
              <button 
                className="group bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3"
                onClick={() => {
                  // Navigate to events/activities page using React Router
                  navigate('/events');
                }}
              >
                <Eye className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                Glimpse of SRF activities
              </button>
            </div>
            
            <div className="mt-8 p-6 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800">Tax Benefit Available</span>
              </div>
              <p className="text-green-700 text-sm">
                All donations are eligible for 80G tax exemption under the Income Tax Act. 
                You will receive an official certificate for tax purposes.
              </p>
            </div>
          </div>
        </div>


        {/* Impact Statement */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Your Contribution Creates Real Impact
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Every donation helps us conduct road safety awareness programs, support traffic police with safety equipment, 
            perform scientific crash investigations, and work towards building safer road infrastructure across India. 
            Together, we can save lives and make Indian roads safer for everyone.
          </p>
          <div className="mt-8 text-center">
            <p className="text-gray-600 font-medium">
              Thank you for supporting road safety in India!
            </p>
          </div>
        </div>
      </div>

      {/* Donation Form Modal */}
      {showDonationForm && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">WAY TO DONATION</h2>
                <button
                  onClick={closeDonationForm}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <p className="text-center text-gray-600 mb-6">(Donation Only In Indian Rupees)</p>

              {/* Tab Navigation */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('individual')}
                  className={`px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
                    activeTab === 'individual'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Individual
                </button>
                <button
                  onClick={() => setActiveTab('organization')}
                  className={`px-6 py-3 font-medium transition-colors duration-200 border-b-2 ${
                    activeTab === 'organization'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Organisation
                </button>
              </div>

              {/* Form Content */}
              <form onSubmit={handleFormSubmit}>
                {activeTab === 'individual' ? (
                  /* Individual Form */
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                        <input
                          type="text"
                          required
                          value={formData.individual.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                        <input
                          type="text"
                          required
                          value={formData.individual.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input
                        type="email"
                        required
                        value={formData.individual.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                          India +91
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.individual.mobile}
                          onChange={(e) => handleInputChange('mobile', e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Your State*</label>
                        <select
                          required
                          value={formData.individual.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select State</option>
                          {indianStates.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          value={formData.individual.country}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount* (INR)</label>
                      <input
                        type="number"
                        required
                        min="1"
                        value={formData.individual.amount}
                        onChange={(e) => handleInputChange('amount', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter amount in INR"
                      />
                    </div>
                  </div>
                ) : (
                  /* Organization Form */
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name of the Company*</label>
                      <input
                        type="text"
                        required
                        value={formData.organization.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name of the Contact Person*</label>
                        <input
                          type="text"
                          required
                          value={formData.organization.contactPerson}
                          onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Designation of the Contact Person*</label>
                        <input
                          type="text"
                          required
                          value={formData.organization.designation}
                          onChange={(e) => handleInputChange('designation', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input
                        type="email"
                        required
                        value={formData.organization.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number*</label>
                        <input
                          type="tel"
                          required
                          value={formData.organization.mobile}
                          onChange={(e) => handleInputChange('mobile', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Landline Number</label>
                        <input
                          type="tel"
                          value={formData.organization.landline}
                          onChange={(e) => handleInputChange('landline', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Street Address*</label>
                      <input
                        type="text"
                        required
                        value={formData.organization.streetAddress}
                        onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Apartment, suite, etc</label>
                      <input
                        type="text"
                        value={formData.organization.apartment}
                        onChange={(e) => handleInputChange('apartment', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
                        <input
                          type="text"
                          required
                          value={formData.organization.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ZIP / Postal Code*</label>
                        <input
                          type="text"
                          required
                          value={formData.organization.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select your state*</label>
                        <select
                          required
                          value={formData.organization.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select State</option>
                          {indianStates.map(state => (
                            <option key={state} value={state}>{state}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          value={formData.organization.country}
                          readOnly
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Enter PAN Card Number*</label>
                        <input
                          type="text"
                          required
                          value={formData.organization.panCard}
                          onChange={(e) => handleInputChange('panCard', e.target.value.toUpperCase())}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="ABCDE1234F"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Donation Amount* (INR)</label>
                        <input
                          type="number"
                          required
                          min="1"
                          value={formData.organization.amount}
                          onChange={(e) => handleInputChange('amount', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="Enter amount in INR"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Submit Button */}
                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Proceed to Donate
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {showThankYou && (
        <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Thank You for your interest to Contribute for the cause of Road Safety. You may use the below mentioned SRF Bank Account details for online/NEFT/RTGS/IMPS transfer of funds through your bank account
                </p>
              </div>

              {/* Bank Details */}
              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">SRF Account Details for Bank Transfer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Account name</p>
                    <p className="font-semibold text-gray-900">Safety Research Foundation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Account No</p>
                    <p className="font-semibold text-gray-900">50200031767840</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Type of A/C</p>
                    <p className="font-semibold text-gray-900">Current Account</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Bank Name</p>
                    <p className="font-semibold text-gray-900">HDFC Bank Limited</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg md:col-span-2">
                    <p className="text-sm text-gray-600">IFSC Code</p>
                    <p className="font-semibold text-gray-900">HDFC0001068</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> Transaction Receipt/Details may be sent to 
                    <a href="mailto:donate@safetyresearchfoundation.org" className="text-blue-600 hover:text-blue-700 ml-1">
                      donate@safetyresearchfoundation.org
                    </a>
                  </p>
                </div>
              </div>

              {/* Alternative Payment Method */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">Alternative Payment Method</h4>
                <p className="text-gray-700 mb-4">
                  You may also donate via <strong>Cheque/Demand Draft</strong> in favour of <strong>Safety Research Foundation</strong>, 
                  Payable at Coimbatore and send to the following mailing address:
                </p>
                <div className="bg-white p-4 rounded-lg border">
                  <address className="text-gray-700 not-italic">
                    <strong>Safety Research Foundation</strong><br />
                    Office No.504, S.No.128,<br />
                    Seasons Business Square, Seasons Road,<br />
                    Sanewadi, Aundh,<br />
                    Pune – 411 007 Maharashtra.<br />
                    India.<br /><br />
                    <strong>Phone:</strong> +91 88 0694 3991<br />
                    <strong>Phone:</strong> +91 7030910122
                  </address>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={backToDonateForm}
                  className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Back to Donate form
                </button>
                <button
                  onClick={closeDonationForm}
                  className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
