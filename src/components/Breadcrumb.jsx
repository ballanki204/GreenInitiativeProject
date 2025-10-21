import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbNameMap = {
    software: "Software ",
    "digital-marketing": "Digital ",
    "plant-marketplace": "Plant ",
    "safety-app": "Safety ",
    "green-initiative": "Green ",
    "book-consultancy": "Book ",
    about: "About Us",
    contact: "Contact Us",
    careers: "Careers",
    blog: "Blog",
    support: "Support",
    "healthcare-medical": "Healthcare",
    "real-estate": "Real Estate ",
    "food-restaurant": "Food & Restaurant ",
    "trading-financial": "Trading & Financial ",
    "education-e-learning": "Education & E-Learning ",
    "enterprise-business-office": "Enterprise ",
    "it-cloud": "IT & Cloud ",
    cybersecurity: "Cybersecurity ",
    "ai-ml": "AI / ML ",
  };

  return (
    <nav className="bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link
              to="/"
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName =
              breadcrumbNameMap[pathname] ||
              pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return (
              <li key={pathname} className="flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {isLast ? (
                  <span className="text-gray-900 text-[5px] font-medium">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200 text-[10px]"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
