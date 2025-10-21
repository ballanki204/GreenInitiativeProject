import Breadcrumb from "../components/Breadcrumb";

const About = () => {
  return (
    <div className="min-h-screen mx-10">
      <Breadcrumb />

      {/* Hero Section with Background Image */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-blue-600 overflow-hidden ">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=400&fit=crop&crop=center')",
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">About Green Initiative</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Pioneering sustainable technology solutions for a better tomorrow
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To revolutionize businesses through innovative software, AI, and
              sustainable solutions that drive growth while protecting our
              planet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-semibold mb-4">
                Sustainability First
              </h3>
              <p className="text-gray-600">
                Every solution we create considers environmental impact and
                promotes sustainable practices.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-semibold mb-4">Innovation Driven</h3>
              <p className="text-gray-600">
                We leverage cutting-edge technologies like AI, cloud computing,
                and automation to solve complex challenges.
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-2xl font-semibold mb-4">Client Focused</h3>
              <p className="text-gray-600">
                Our success is measured by our clients' success. We build
                lasting partnerships based on trust and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Green Initiative emerged from a vision to
                  bridge the gap between technological advancement and
                  environmental responsibility. Our founders recognized that
                  businesses could thrive while contributing positively to the
                  planet.
                </p>
                <p>
                  What started as a small team of passionate developers has
                  grown into a comprehensive technology solutions provider,
                  serving clients across multiple industries. We've successfully
                  delivered over 500 projects, from healthcare management
                  systems to AI-powered sustainability platforms.
                </p>
                <p>
                  Today, we continue to push boundaries, combining expertise in
                  software development, digital marketing, and emerging
                  technologies to create solutions that matter.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Constantly pushing technological boundaries
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility in every decision
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                Working together to achieve excellence
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                Delivering quality in everything we create
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The experts behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-green-600 mb-2">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                15+ years in tech leadership, passionate about sustainable
                innovation.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Michael Chen</h3>
              <p className="text-green-600 mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                AI and cloud computing expert with a focus on scalable
                solutions.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
                alt="Head of Design"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-green-600 mb-2">Head of Design</p>
              <p className="text-gray-600 text-sm">
                UX/UI expert creating intuitive and beautiful user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your business with our
            innovative solutions.
          </p>
          <a
            href="/book-consultancy"
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-block"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
