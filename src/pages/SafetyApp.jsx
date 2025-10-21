const SafetyApp = () => {
  const features = [
    {
      title: 'Take Picture → Recognize Hazards',
      description: 'Simply take a photo of your workplace or equipment to instantly identify potential hazards.',
      icon: '📸'
    },
    {
      title: 'Receive Suggestions',
      description: 'Get immediate safety recommendations and corrective actions based on recognized hazards.',
      icon: '💡'
    },
    {
      title: 'Safety Guidelines & Reports',
      description: 'Access comprehensive safety guidelines and generate detailed hazard reports.',
      icon: '📋'
    },
    {
      title: 'HIRA Integration',
      description: 'Hazard Identification and Risk Assessment (HIRA) based analysis for thorough safety evaluation.',
      icon: '⚠️'
    }
  ];

  const versions = [
    {
      version: 'V1',
      title: 'Home & Midscale Business',
      features: [
        'Basic hazard recognition',
        'Essential safety suggestions',
        'Simple reporting'
      ],
      status: 'Current'
    },
    {
      version: 'V2 / Enterprise',
      title: 'Industry-scale Deployment',
      features: [
        'Advanced AI recognition',
        'Automated alerts',
        'Integration with ERP systems',
        'Detailed dashboards'
      ],
      status: 'Upcoming'
    }
  ];

  const futureEnhancements = [
    'Mail triggers for critical hazards',
    'Predictive analytics for risk prevention',
    'Real-time monitoring dashboards',
    'Integration with existing safety management systems'
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Safety & Hazard Recognition App</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Free safety app for home to midscale businesses, eliminating unsafe conditions via image recognition & HIRA analysis.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-red-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">1</div>
              <p className="font-semibold">Take Picture</p>
              <p className="text-sm text-gray-600">Capture workplace hazards</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">2</div>
              <p className="font-semibold">AI Analysis</p>
              <p className="text-sm text-gray-600">Image recognition & HIRA</p>
            </div>
            <div className="text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-2">3</div>
              <p className="font-semibold">Get Suggestions</p>
              <p className="text-sm text-gray-600">Safety recommendations</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {versions.map((version, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">{version.version}</h3>
                <span className={`px-3 py-1 rounded-full text-sm ${version.status === 'Current' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                  {version.status}
                </span>
              </div>
              <h4 className="font-semibold mb-2">{version.title}</h4>
              <ul className="space-y-1">
                {version.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Future Enhancements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {futureEnhancements.map((enhancement, index) => (
              <div key={index} className="flex items-center p-3 bg-white rounded-md">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <span>{enhancement}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Download Our Free Safety App</h2>
          <p className="text-gray-600 mb-6">
            Protect your workplace and ensure safety compliance with our innovative hazard recognition technology.
          </p>
          <div className="space-x-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300">
              Download for Android
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Download for iOS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyApp;
