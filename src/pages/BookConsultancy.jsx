import { useState } from 'react';

const BookConsultancy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Consultancy booking submitted:', formData);
    alert('Thank you for booking a consultancy! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 animate-fade-in">
            Book a <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent animate-fade-in">Free</span> Consultancy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Schedule a personalized consultation to discuss your business needs and explore our tailored solutions. Our experts are ready to help you succeed.
          </p>
        </div>

        {/* Form Section */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Consultancy Booking Form</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-3 text-lg">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-3 text-lg">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-3 text-lg">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg"
                  required
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="group">
                <label htmlFor="company" className="block text-gray-700 font-bold mb-3 text-lg">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg"
                  placeholder="Your company name"
                />
              </div>
            </div>
            <div className="group">
              <label htmlFor="service" className="block text-gray-700 font-bold mb-3 text-lg">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg bg-white"
                required
              >
                <option value="">Select a service</option>
                <option value="Software Applications">💻 Software Applications</option>
                <option value="Digital Marketing">📈 Digital Marketing</option>
                <option value="Plant Marketplace">🌱 Plant Marketplace</option>
                <option value="Safety App">🛡️ Safety & Hazard Recognition</option>
                <option value="Green Initiative">🌍 Green Initiative</option>
                <option value="General Consultancy">🎯 General Consultancy</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group">
                <label htmlFor="preferredDate" className="block text-gray-700 font-bold mb-3 text-lg">Preferred Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="preferredTime" className="block text-gray-700 font-bold mb-3 text-lg">Preferred Time</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg bg-white"
                  required
                >
                  <option value="">Select a time</option>
                  <option value="9:00 AM">🌅 9:00 AM</option>
                  <option value="10:00 AM">🌅 10:00 AM</option>
                  <option value="11:00 AM">🌅 11:00 AM</option>
                  <option value="1:00 PM">☀️ 1:00 PM</option>
                  <option value="2:00 PM">☀️ 2:00 PM</option>
                  <option value="3:00 PM">☀️ 3:00 PM</option>
                  <option value="4:00 PM">🌇 4:00 PM</option>
                  <option value="5:00 PM">🌇 5:00 PM</option>
                </select>
              </div>
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-3 text-lg">Additional Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-500/20 focus:border-green-500 transition-all duration-300 text-lg resize-none"
                placeholder="Please describe your specific needs, challenges, or questions you'd like to discuss during the consultation..."
              ></textarea>
            </div>
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-green-500/25"
              >
                📅 Book My Free Consultation
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 p-10 rounded-3xl border border-gray-100">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">What to Expect</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📅</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Flexible Scheduling</h4>
              <p className="text-gray-600 leading-relaxed">Choose a date and time that works best for you. We offer consultations in multiple time zones.</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">💡</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Expert Guidance</h4>
              <p className="text-gray-600 leading-relaxed">Get insights from our experienced consultants with years of industry expertise.</p>
            </div>
            <div className="text-center group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h4 className="text-xl font-bold mb-3 text-gray-800">Tailored Solutions</h4>
              <p className="text-gray-600 leading-relaxed">Receive customized recommendations and strategies designed specifically for your business needs.</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Need immediate assistance?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+1234567890" className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg border border-green-200">
              📞 Call us: +1 (234) 567-890
            </a>
            <a href="mailto:consult@greeninitiative.com" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg border border-blue-200">
              ✉️ Email: consult@greeninitiative.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookConsultancy;
