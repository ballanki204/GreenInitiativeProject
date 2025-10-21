const PlantMarketplace = () => {
  const categories = [
    { name: 'Fruits', icon: '🍎', count: 25 },
    { name: 'Herbs', icon: '🌿', count: 18 },
    { name: 'Vegetables', icon: '🥕', count: 32 },
    { name: 'Ornamental', icon: '🌸', count: 45 },
    { name: 'Indoor', icon: '🏠', count: 28 },
    { name: 'Medicinal', icon: '🌱', count: 15 }
  ];

  const features = [
    {
      title: 'Buy & Sell Plants & By-products',
      description: 'Connect with local growers and entrepreneurs to buy fresh plants and plant-based products.',
      icon: '🛒'
    },
    {
      title: 'User Profiles',
      description: 'Create profiles for home sellers, buyers, and part-time entrepreneurs.',
      icon: '👤'
    },
    {
      title: 'Order Tracking & Management',
      description: 'Real-time tracking of your orders from purchase to delivery.',
      icon: '📦'
    },
    {
      title: 'Community Participation',
      description: 'Join our green network and participate in community planting drives.',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Plant Marketplace</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          Marketplace for plants and plant-based products, empowering home-based & part-time business owners.
        </p>

        <div className="bg-green-50 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Plant Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count} items</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Free Platform Access</h2>
          <p className="text-center text-gray-600 mb-6">
            Our platform is currently free for home and mid-scale users. Start your plant business today without any upfront costs.
          </p>
          <div className="text-center">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300 mr-4">
              Join as Seller
            </button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Start Buying
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Roadmap for Future</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">V1: Free Platform</h3>
              <p className="text-sm text-gray-600">Free access for home & midscale users</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Future: Paid Features</h3>
              <p className="text-sm text-gray-600">Premium features and analytics for sellers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Enterprise Marketplace</h3>
              <p className="text-sm text-gray-600">Large-scale marketplace for businesses</p>
            </div>
          </div>
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
            Join Green Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantMarketplace;
