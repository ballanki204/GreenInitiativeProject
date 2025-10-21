import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const ApplicationDetail = () => {
  const { categorySlug, appSlug } = useParams();

  // This would typically come from an API or a more comprehensive data structure
  const getApplicationData = (categorySlug, appSlug) => {
    const categories = [
      {
        slug: 'healthcare-medical',
        name: 'Healthcare / Medical Applications',
        icon: '🏥',
        applications: [
          {
            slug: 'hospital-management-system',
            name: 'Hospital Management System (HMS)',
            description: 'Comprehensive hospital management system for efficient patient care, staff management, and administrative operations.',
            features: [
              'Patient Registration & Management',
              'Appointment Scheduling',
              'Electronic Health Records (EHR)',
              'Billing & Insurance Management',
              'Inventory Management',
              'Staff Scheduling',
              'Reporting & Analytics'
            ],
            benefits: [
              'Streamlined hospital operations',
              'Improved patient care quality',
              'Reduced administrative overhead',
              'Better resource utilization',
              'Enhanced decision-making with data insights'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
            image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=400&fit=crop&crop=center'
          },
          {
            slug: 'patient-management-system',
            name: 'Patient Management System',
            description: 'Advanced patient management solution for healthcare providers to track patient information, medical history, and treatment plans.',
            features: [
              'Patient Demographics',
              'Medical History Tracking',
              'Treatment Plan Management',
              'Medication Tracking',
              'Appointment Reminders',
              'Patient Portal',
              'HIPAA Compliance'
            ],
            benefits: [
              'Comprehensive patient records',
              'Improved care coordination',
              'Better patient engagement',
              'Regulatory compliance',
              'Reduced medical errors'
            ],
            technologies: ['React', 'Python', 'PostgreSQL', 'Django', 'REST API'],
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop&crop=center'
          }
          // Add more applications as needed
        ]
      },
      {
        slug: 'real-estate',
        name: 'Real Estate Applications',
        icon: '🏢',
        applications: [
          {
            slug: 'property-building-management-systems',
            name: 'Property / Building Management Systems',
            description: 'Complete property management solution for landlords, property managers, and real estate professionals.',
            features: [
              'Property Listings',
              'Tenant Management',
              'Rent Collection',
              'Maintenance Tracking',
              'Financial Reporting',
              'Lease Management',
              'Property Analytics'
            ],
            benefits: [
              'Efficient property operations',
              'Improved tenant satisfaction',
              'Better financial management',
              'Reduced maintenance costs',
              'Data-driven decision making'
            ],
            technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop&crop=center'
          }
          // Add more applications as needed
        ]
      }
      // Add more categories as needed
    ];

    const category = categories.find(cat => cat.slug === categorySlug);
    if (!category) return null;

    const application = category.applications.find(app => app.slug === appSlug);
    if (!application) return null;

    return { ...application, categoryName: category.name, categorySlug };
  };

  const appData = getApplicationData(categorySlug, appSlug);

  if (!appData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Application Not Found</h1>
          <p className="text-gray-600 mb-8">The application you're looking for doesn't exist.</p>
          <Link
            to="/software"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Back to Software Applications
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mx-10">
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${appData.image}')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{appData.name}</h1>
            <p className="text-xl max-w-2xl mx-auto">{appData.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
              <div className="space-y-4">
                {appData.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-lg mr-4">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
              <div className="space-y-4">
                {appData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-lg mr-4">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies Used</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {appData.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss how {appData.name} can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#enquiry"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
              >
                Book Consultancy
              </Link>
              <Link
                to="/software"
                className="bg-gray-200 text-gray-800 px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition duration-300"
              >
                View More Applications
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplicationDetail;
