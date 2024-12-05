import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10 sm:grid grid-cols-[3fr_1fr_1fr] bg-gray-100 p-5 text-gray-700">
      {/* Logo and Description */}
      <div>
        <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </p>
      </div>

      {/* Company Links */}
      <nav>
        <p className="text-xl font-medium mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>
            <a href="/" className="hover:text-black transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-black transition-colors">
              About Us
            </a>
          </li>
          <li>
            <a href="/delivery" className="hover:text-black transition-colors">
              Delivery
            </a>
          </li>
          <li>
            <a href="/privacy" className="hover:text-black transition-colors">
              Privacy
            </a>
          </li>
        </ul>
      </nav>

      {/* Get in Touch */}
      <div>
        <h2 className="text-xl font-medium mb-5">GET IN TOUCH</h2>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>
            <a href="tel:+918126630823" className="hover:text-black transition-colors">
              +91 8126630823
            </a>
          </li>
          <li>
            <a href="mailto:sk0471011@gmail.com" className="hover:text-black transition-colors">
              sk0471011@gmail.com
            </a>
          </li>
          <li className="flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="/path/to/instagram-logo.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" aria-label="Gmail">
              <img src="/path/to/gmail-logo.png" alt="Gmail" className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
