import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-gray-50 text-sm text-gray-700">
      <div className="container-max py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">About</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Journals</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">All journals</a></li>
            <li><a href="#" className="hover:underline">By subject</a></li>
            <li><a href="#" className="hover:underline">For authors</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help & FAQs</a></li>
            <li><a href="#" className="hover:underline">Open access</a></li>
            <li><a href="#" className="hover:underline">Ethics statement</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-900 font-semibold mb-3">Connect</h3>
          <p className="text-gray-600">Subscribe to our newsletter for research updates.</p>
          <div className="mt-3 flex">
            <input type="email" placeholder="Email address" className="flex-1 border border-gray-300 rounded-l-sm px-3 py-2 focus:outline-none" />
            <button className="bg-[var(--brand-blue)] text-white px-4 rounded-r-sm hover:bg-[var(--brand-blue-light)]">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="container-max py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500">© {new Date().getFullYear()} YourCompany. All rights reserved.</p>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;