import Breadcrumb from '../components/Breadcrumb';

const DigitalMarketing = () => {
  const services = [
    {
      title: 'SEO Optimization',
      icon: '🔍',
      subServices: [
        'On-page SEO',
        'Off-page SEO',
        'Content Strategy'
      ]
    },
    {
      title: 'Social Media Management',
      icon: '📱',
      subServices: [
        'Profile Optimization',
        'Posts Creation',
        'Social Media Strategy'
      ]
    },
    {
      title: 'Lead Generation',
      icon: '🎯',
      subServices: [
        'Campaign Analytics',
        'Targeted Advertising',
        'Conversion Optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen mx-10">
      <Breadcrumb />

      {/* Hero Section with Background Image */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop&crop=center')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Digital Marketing & Local Marketing</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Boost your online presence and drive growth with our comprehensive digital marketing services.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.subServices.map((subService, subIndex) => (
                  <li key={subIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span>{subService}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Our Digital Marketing Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="font-semibold">Increased Visibility</h3>
              <p className="text-sm text-gray-600">Improve your search rankings and online presence</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-semibold">Targeted Traffic</h3>
              <p className="text-sm text-gray-600">Attract qualified leads to your business</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💰</div>
              <h3 className="font-semibold">Higher ROI</h3>
              <p className="text-sm text-gray-600">Maximize your marketing budget effectiveness</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-semibold">Data-Driven</h3>
              <p className="text-sm text-gray-600">Make informed decisions with analytics</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Grow Your Business Online?</h2>
          <p className="text-gray-600 mb-6">
            Let's discuss how we can help you achieve your digital marketing goals.
          </p>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Book Consultancy
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
