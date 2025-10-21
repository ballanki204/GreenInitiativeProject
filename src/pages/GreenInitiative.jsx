const GreenInitiative = () => {
  const initiatives = [
    {
      title: 'Track & Expand Tree Plantations',
      description: 'Monitor the growth and health of planted trees with our digital tracking system.',
      icon: '🌳'
    },
    {
      title: 'Network of Customers / Users',
      description: 'Connect with like-minded individuals and businesses committed to environmental sustainability.',
      icon: '🤝'
    },
    {
      title: 'Report Environmental Impact',
      description: 'Generate detailed reports on carbon sequestration, air quality improvement, and biodiversity enhancement.',
      icon: '📊'
    },
    {
      title: 'Plant Growth Monitoring',
      description: 'Real-time updates on tree growth, health, and maintenance requirements.',
      icon: '📈'
    }
  ];

  const benefits = [
    'Reduced carbon footprint',
    'Improved air quality',
    'Enhanced biodiversity',
    'Community engagement',
    'Sustainable business practices',
    'Long-term environmental impact'
  ];

  const stats = [
    { label: 'Trees Planted', value: '10,000+', icon: '🌱' },
    { label: 'Active Members', value: '5,000+', icon: '👥' },
    { label: 'Cities Covered', value: '25+', icon: '🏙️' },
    { label: 'CO2 Reduced', value: '50 tons', icon: '💨' }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Green Initiative / Social Responsibility Network</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Track & expand tree plantations, connect with a network of customers participating in greenery initiatives, and report environmental impact.
        </p>

        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{initiative.title}</h3>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Environmental Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-md">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                <span className="capitalize">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">How to Participate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">1</div>
              <h3 className="font-semibold mb-2">Join the Network</h3>
              <p className="text-sm text-gray-600">Sign up and become part of our green community</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">2</div>
              <h3 className="font-semibold mb-2">Plant & Track</h3>
              <p className="text-sm text-gray-600">Plant trees and monitor their growth</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">3</div>
              <h3 className="font-semibold mb-2">Share Impact</h3>
              <p className="text-sm text-gray-600">Contribute to environmental reports</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Green Network Today</h2>
          <p className="text-gray-600 mb-6">
            Be part of the movement towards a greener, more sustainable future. Together, we can make a real difference.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Join Green Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default GreenInitiative;
