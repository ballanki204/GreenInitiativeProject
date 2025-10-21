import { useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

const SoftwareApplications = () => {
  const [expandedCategories, setExpandedCategories] = useState({});

  const categories = [
    {
      name: 'Healthcare / Medical Applications',
      slug: 'healthcare-medical',
      icon: '🏥',
      applications: [
        { name: 'Hospital Management System (HMS)', slug: 'hospital-management-system' },
        { name: 'Patient Management System', slug: 'patient-management-system' },
        { name: 'Pharmacy & Inventory Management', slug: 'pharmacy-inventory-management' },
        { name: 'Laboratory Information System (LIS)', slug: 'laboratory-information-system' },
        { name: 'Telemedicine / Online Consultations', slug: 'telemedicine-online-consultations' },
        { name: 'Appointment Scheduling Systems', slug: 'appointment-scheduling-systems' },
        { name: 'Billing & Insurance Management', slug: 'billing-insurance-management' }
      ]
    },
    {
      name: 'Real Estate Applications',
      slug: 'real-estate',
      icon: '🏢',
      applications: [
        { name: 'Property / Building Management Systems', slug: 'property-building-management-systems' },
        { name: 'Renovation & Maintenance Tracking Systems', slug: 'renovation-maintenance-tracking-systems' },
        { name: 'Rental / Lease Management Systems', slug: 'rental-lease-management-systems' },
        { name: 'Real Estate CRM (Client Management)', slug: 'real-estate-crm-client-management' },
        { name: 'Property Valuation & Analytics Tools', slug: 'property-valuation-analytics-tools' },
        { name: 'Construction Project Management Software', slug: 'construction-project-management-software' }
      ]
    },
    {
      name: 'Food & Restaurant Applications',
      slug: 'food-restaurant',
      icon: '🍽️',
      applications: [
        { name: 'POS Integration Systems', slug: 'pos-integration-systems' },
        { name: 'Online Ordering / Delivery Apps', slug: 'online-ordering-delivery-apps' },
        { name: 'Inventory & Stock Management', slug: 'inventory-stock-management' },
        { name: 'Kitchen / Order Management Systems', slug: 'kitchen-order-management-systems' },
        { name: 'Customer Loyalty & Rewards Apps', slug: 'customer-loyalty-rewards-apps' },
        { name: 'Recipe & Menu Management', slug: 'recipe-menu-management' }
      ]
    },
    {
      name: 'Trading & Financial Applications',
      slug: 'trading-financial',
      icon: '📈',
      applications: [
        { name: 'Algorithmic / Automated Trading Platforms', slug: 'algorithmic-automated-trading-platforms' },
        { name: 'Portfolio Management Systems', slug: 'portfolio-management-systems' },
        { name: 'Stock / Futures / Options Tracking', slug: 'stock-futures-options-tracking' },
        { name: 'Risk & Compliance Management', slug: 'risk-compliance-management' },
        { name: 'Accounting & Reporting Tools', slug: 'accounting-reporting-tools' }
      ]
    },
    {
      name: 'Education & E-Learning Applications',
      slug: 'education-e-learning',
      icon: '🎓',
      applications: [
        { name: 'Learning Management Systems (LMS)', slug: 'learning-management-systems' },
        { name: 'Online Exam & Assessment Platforms', slug: 'online-exam-assessment-platforms' },
        { name: 'Student / Faculty Information Systems', slug: 'student-faculty-information-systems' },
        { name: 'Course Management & Certification Platforms', slug: 'course-management-certification-platforms' },
        { name: 'Virtual Classrooms & Collaboration Tools', slug: 'virtual-classrooms-collaboration-tools' }
      ]
    },
    {
      name: 'Enterprise Applications (Business / Office)',
      slug: 'enterprise-business-office',
      icon: '🏢',
      applications: [
        { name: 'ERP Systems (Inventory, Accounting, Sales, HR)', slug: 'erp-systems-inventory-accounting-sales-hr' },
        { name: 'HRMS (Attendance, Payroll, Recruitment)', slug: 'hrms-attendance-payroll-recruitment' },
        { name: 'CRM Systems (Customer Relationship Management)', slug: 'crm-systems-customer-relationship-management' },
        { name: 'Project Management & Collaboration Tools', slug: 'project-management-collaboration-tools' },
        { name: 'Document & Workflow Automation', slug: 'document-workflow-automation' }
      ]
    },
    {
      name: 'IT & Cloud Applications',
      slug: 'it-cloud',
      icon: '☁️',
      applications: [
        { name: 'Cloud Infrastructure Management', slug: 'cloud-infrastructure-management' },
        { name: 'Server & Database Management Systems', slug: 'server-database-management-systems' },
        { name: 'Backup & Disaster Recovery Solutions', slug: 'backup-disaster-recovery-solutions' },
        { name: 'DevOps & CI/CD Tools', slug: 'devops-ci-cd-tools' },
        { name: 'Virtualization & Remote Access Platforms', slug: 'virtualization-remote-access-platforms' }
      ]
    },
    {
      name: 'Cybersecurity Applications',
      slug: 'cybersecurity',
      icon: '🔒',
      applications: [
        { name: 'Vulnerability Assessment & Pen-testing Tools', slug: 'vulnerability-assessment-pen-testing-tools' },
        { name: 'Security Audit & Compliance Systems', slug: 'security-audit-compliance-systems' },
        { name: 'Network Monitoring & Intrusion Detection', slug: 'network-monitoring-intrusion-detection' },
        { name: 'Identity & Access Management Systems', slug: 'identity-access-management-systems' },
        { name: 'Data Protection & Encryption Solutions', slug: 'data-protection-encryption-solutions' }
      ]
    },
    {
      name: 'AI / ML Applications',
      slug: 'ai-ml',
      icon: '🤖',
      applications: [
        { name: 'Chatbots & Virtual Assistants', slug: 'chatbots-virtual-assistants' },
        { name: 'Predictive Analytics & Recommendation Engines', slug: 'predictive-analytics-recommendation-engines' },
        { name: 'Image / Video Recognition Systems', slug: 'image-video-recognition-systems' },
        { name: 'NLP Applications (Text Analytics, Sentiment Analysis)', slug: 'nlp-applications-text-analytics-sentiment-analysis' },
        { name: 'Automation & Decision Support Systems', slug: 'automation-decision-support-systems' }
      ]
    }
  ];

  return (
    <div className="min-h-screen mx-10">
      <Breadcrumb />

      {/* Hero Section with Background Image */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-green-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=400&fit=crop&crop=center')"
          }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Software Applications</h1>
            <p className="text-xl max-w-2xl mx-auto">
              End-to-end software solutions for mid-to-large scale industries, customized for business efficiency and automation.
            </p>
          </div>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600 mb-4">{category.applications.length} applications available</p>
              <button
                className="text-green-600 hover:text-green-800 font-semibold"
                onClick={() => {
                  setExpandedCategories(prev => ({
                    ...prev,
                    [index]: !prev[index]
                  }));
                }}
              >
                {expandedCategories[index] ? 'Hide Details' : 'View Details'}
              </button>
            </div>
          ))}
        </div>

        {Object.keys(expandedCategories).map((categoryIndex) => {
          const index = parseInt(categoryIndex);
          if (!expandedCategories[index]) return null;

          return (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-4">{categories[index].name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories[index].applications.map((app, appIndex) => (
                  <Link
                    key={appIndex}
                    to={`/software/${categories[index].slug}/${app.slug}`}
                    className="flex items-center p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition duration-200 cursor-pointer"
                  >
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    <span>{app.name}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-6 text-center">
                <Link
                  to="/#enquiry"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
                >
                  Book Consultancy
                </Link>
              </div>
            </div>
          );
        })}

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 mb-6">
            Our expert team is here to help you choose the right software solution for your needs.
          </p>
          <Link
            to="/#enquiry"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            Get Started Today
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareApplications;
