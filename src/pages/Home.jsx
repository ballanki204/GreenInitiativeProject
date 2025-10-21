import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen mx-10">
      {/* Hero Section */}
      <section className="bg-white text-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900">
              Revolutionizing Business Solutions
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-gray-600 font-light leading-relaxed">
              Cutting-edge Software, AI, Marketing & Sustainable Services for
              the Future
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/software"
                className="group bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  🚀 Explore Our Services
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                to="/book-consultancy"
                className="group bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span className="flex items-center gap-2">
                  📅 Book Free Consultation
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Menu */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800 animate-fade-in">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              to="/software"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-green-200"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                💻
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">
                Software Applications
              </h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end software solutions for mid-to-large scale industries
                with cutting-edge technology
              </p>
              <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </Link>
            <Link
              to="/digital-marketing"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-blue-200"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                📈
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                Digital Marketing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                SEO optimization and social media management to boost your
                online presence
              </p>
              <div className="mt-6 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </Link>
            <Link
              to="/plant-marketplace"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-green-200"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🌱
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-600 transition-colors">
                Plant Marketplace
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Buy and sell plants and by-products legally in our sustainable
                marketplace
              </p>
              <div className="mt-6 flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </Link>
            <Link
              to="/safety-app"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-red-200"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🛡️
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-red-600 transition-colors">
                Safety & Hazard Recognition
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Free safety app using image recognition and HIRA for workplace
                safety
              </p>
              <div className="mt-6 flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </Link>
            <Link
              to="/green-initiative"
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-emerald-200"
            >
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-emerald-600 transition-colors">
                Green Initiative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Social responsibility through greenery and sustainability
                programs
              </p>
              <div className="mt-6 flex items-center text-emerald-600 font-semibold group-hover:translate-x-2 transition-transform">
                Learn More →
              </div>
            </Link>
            <div className="group bg-gradient-to-br from-purple-500 to-pink-500 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-white">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-4">AI & Innovation</h3>
              <p className="text-white/90 leading-relaxed">
                Cutting-edge AI solutions and innovative technologies for the
                future
              </p>
              <div className="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform">
                Coming Soon →
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-800">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center border border-gray-100 hover:border-yellow-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⭐
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                "Transformed our business operations with their ERP system.
                Increased efficiency by 300%."
              </p>
              <p className="font-bold text-xl text-gray-800">- John Doe, CEO</p>
              <p className="text-gray-500 mt-2">TechCorp Industries</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center border border-gray-100 hover:border-blue-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⭐
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                "Excellent digital marketing services boosted our online
                presence by 500% in just 6 months."
              </p>
              <p className="font-bold text-xl text-gray-800">
                - Jane Smith, Marketing Director
              </p>
              <p className="text-gray-500 mt-2">GrowthMax Solutions</p>
            </div>
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 text-center border border-gray-100 hover:border-red-200">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                ⭐
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                "Their safety app helped us maintain a hazard-free workplace and
                reduced incidents by 80%."
              </p>
              <p className="font-bold text-xl text-gray-800">
                - Mike Johnson, Safety Officer
              </p>
              <p className="text-gray-500 mt-2">SafeWorks Manufacturing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90">
            Join hundreds of satisfied clients who have revolutionized their
            operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/book-consultancy"
              className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-xl hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Start Your Journey Today
            </Link>
            <Link
              to="/software"
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
