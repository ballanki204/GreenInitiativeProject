import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-green-600">
              TheNexUs
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/software"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Software
            </Link>
            <Link
              to="/digital-marketing"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Digital Marketing
            </Link>
            <Link
              to="/plant-marketplace"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Plant Marketplace
            </Link>
            <Link
              to="/safety-app"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Safety App
            </Link>
            <Link
              to="/green-initiative"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Green Initiative
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-green-600 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/book-consultancy"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
            >
              Book Consultancy
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 0 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden z-20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/software"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
            >
              Software Applications
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/digital-marketing"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
            >
              Digital Marketing
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/plant-marketplace"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
            >
              Plant Marketplace
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/safety-app"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
            >
              Safety App
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/green-initiative"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
            >
              Green Initiative
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
            >
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition duration-300"
            >
              Contact
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              to="/book-consultancy"
              className="block px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-center"
            >
              Book Consultancy
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
