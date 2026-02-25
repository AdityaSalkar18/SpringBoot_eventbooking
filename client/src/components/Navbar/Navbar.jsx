import {  useState } from "react";
import { Link, useLocation} from "react-router-dom";


const Navbar = () => {


  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };
  return (
    <>
   
  <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/adminauth" className="flex items-center space-x-2">
          {/* <img
            src="https://media.istockphoto.com/id/1321617070/vector/health-medical-logo.jpg?s=612x612&w=0&k=20&c=sus8vhG3c__vCdvOBLDhuf2vPUgIAudIAeUBApU_7Ew="
            className="h-10 w-10"
            alt="QuickMed Logo"
          /> */}
          <span className="text-2xl font-semibold text-gray-900">Eventify</span>
        </Link>

        {/* Right Side */}
        <div className="flex items-center space-x-3 md:order-2">
          {/* User Dropdown Button (relative container) */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              type="button"
              className="flex text-sm bg-gray-200 rounded-full focus:ring-2 focus:ring-gray-300"
            >
              <img
                className="w-10 h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7U_ef87Q7CQ1Fx_khkPq-y9IfPmBWrMZ6ig&s"
                alt="user"
              />
            </button>

            {/* Dropdown Menu (positioned below the button) */}
            {dropdownOpen && (
              <div
                id="user-dropdown"
                className="absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg z-50"
              >
                <div className=" py-2">
                  {/* {user ? (
                    <span className="block px-4  text-sm text-gray-700 ">
                      {user.name}
                    </span>
                  ) : ( */}
                    <Link
                      to="/login"
                      onClick={closeAll}
                      className="block px-4 text-sm text-gray-700 "
                    >
                      Login
                    </Link>
                  {/* )} */}

                  <span className="block px-4 py-2 text-sm text-gray-700  truncate">
                    {/* {user ? user.email : ""} */}
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  
                  <li>
                    <Link
                      to="/help"
                      onClick={closeAll}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Help
                    </Link>
                  </li>
{/* 
                  {user ? ( */}
                    <li>
                      <button
                        // onClick={() => {
                        //   closeAll();
                        //   handleLogout();
                        // }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </li>
                  {/* ) : null} */}
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Main Menu Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                onClick={closeAll}
                className={`block py-2 px-3 rounded-sm ${
                  location.pathname === "/"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-900 hover:text-orange-600"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={closeAll}
                className={`block py-2 px-3 rounded-sm ${
                  location.pathname === "/about"
                     ? "text-orange-500 font-semibold"
                    : "text-gray-900 hover:text-orange-600"
                }`}
              >
                About
              </Link>
            </li>
           
            <li>
              <Link
                to="/mybooking"
                onClick={closeAll}
                className={`block py-2 px-3 rounded-sm ${
                  location.pathname === "/mybooking"
                     ? "text-orange-500 font-semibold"
                    : "text-gray-900 hover:text-orange-600"
                }`}
              >
                My Booking
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeAll}
                className={`block py-2 px-3 rounded-sm ${
                  location.pathname === "/contact"
                      ? "text-orange-500 font-semibold"
                    : "text-gray-900 hover:text-orange-600"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}

export default Navbar