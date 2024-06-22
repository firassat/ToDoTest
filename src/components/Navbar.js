import "../css/Navbar.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "../App";

const Navbar = () => {
  const { state } = useContext(auth);

  const [navOpen, setNavOpen] = useState(false);
  const [auth2, setauth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("_auth")) {
      setauth(true);
    }
  }, [auth2, state]);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const closeNav = () => {
    setNavOpen(false);
  };
  const logoutHandel = () => {
    localStorage.removeItem("_auth");
    setauth(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navOpen &&
        !event.target.closest(".navbar-links") &&
        !event.target.closest("#nav-toggle")
      ) {
        closeNav();
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [navOpen]);

  return (
    <nav className="bg-gray-800 fixed w-screen z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo or site title */}
          <div className="flex items-center justify-center">
            {/* icon */}
            <div className="icon">
              <i className="fa-brands fa-react text-3xl mr-5 text-white"></i>
            </div>
            <span className="text-white font-bold text-xl">React Todo</span>
          </div>

          {/* Navigation links */}
          <div className="hidden md:block">
            <div className="ml-10 flex justify-center items-center space-x-4">
              {!auth2 ? (
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div
                  className="ml-10 flex items-baseline space-x-4"
                  onClick={logoutHandel}
                >
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Responsive Menu */}
          <div className=" md:hidden ">
            <button
              id="nav-toggle"
              onClick={toggleNav}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Navigation */}
        <div
          id="nav-links"
          className={`md:hidden nav-links ${navOpen ? "show" : ""}`}
        >
          {!auth2 ? (
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Register
              </Link>
            </div>
          ) : (
            <div
              className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
              onClick={logoutHandel}
            >
              <Link
                to="/login"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
