import React from 'react';
import logo from '../assets/Mayaslogo.png';

// Header mimicking Inderscience: top utility bar + primary nav
const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      {/* Utility bar */}
      <div className="bg-gray-100 text-gray-700 text-sm">
        <div className="container-max flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Publish with us</a>
            <a href="#" className="hover:underline">Editorial board</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Log in</a>
            <a href="#" className="hover:underline">Register</a>
          </div>
        </div>
      </div>

      {/* Branding + Search */}
      <div className="bg-white">
        <div className="container-max flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt="Company Logo" className="h-10 w-auto" />
              <div className="leading-tight">
                <p className="text-xl font-semibold text-gray-900">YourCompany</p>
                <p className="text-xs text-gray-500 tracking-wide">Science, Technology and Management</p>
              </div>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <input
              type="text"
              placeholder="Search journals, articles, authors…"
              className="w-80 border border-gray-300 rounded-sm px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-blue-light)]"
            />
            <button className="bg-[var(--brand-blue)] text-white px-4 py-2 text-sm rounded-sm hover:bg-[var(--brand-blue-light)]">Search</button>
          </div>
        </div>
      </div>

      {/* Primary navigation */}
      <nav className="bg-[var(--brand-blue)] text-white">
        <div className="container-max">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 text-[15px]">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Journals</a></li>
            <li><a href="#" className="hover:underline">By subject</a></li>
            <li><a href="#" className="hover:underline">For authors</a></li>
            <li><a href="#" className="hover:underline">Information</a></li>
            <li><a href="#" className="hover:underline">News</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;