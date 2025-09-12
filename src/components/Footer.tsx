import React, { useState } from 'react';

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Rss
} from 'lucide-react';
import Visa from "../assets/Visa.jpg";
import paypal from '../assets/paypal.jpg';
import Discover from '../assets/Discover.jpg';
import mastercard from '../assets/Mastercard.jpg';
import Last from '../assets/Last.jpg';




const KapeeFooter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = () => {
    if (email) {
      console.log('Newsletter signup:', email);
      setEmail('');
      // Add your newsletter signup logic here
    }
  };

  return (
    <footer className="bg-gray-60 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-8">
          
          {/* Company Info */}
          <div className="w-full md:w-1/6 p-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">kapee.</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="space-y-1">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Lorem Ipsum, 2046 Lorem Ipsum</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">576-245-2478</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">info@kapee.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-600">Mon - Fri / 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Information Links */}
          <div className="w-full md:w-1/8 p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">INFORMATION</h3>
            <ul className="space-y-1">
              {[
                'About Us',
                'Store Location',
                'Contact Us',
                'Shipping & Delivery',
                'Latest News',
                'Our Sitemap'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Service Links */}
          <div className="w-full md:w-1/8 p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">OUR SERVICE</h3>
            <ul className="space-y-1">
              {[
                'Privacy Policy',
                'Terms of Sale',
                'Customer Service',
                'Delivery Information',
                'Payments',
                'Saved Cards'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* My Account Links */}
          <div className="w-full md:w-1/8 p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">MY ACCOUNT</h3>
            <ul className="space-y-1">
              {[
                'My Account',
                'My Shop',
                'My Cart',
                'Checkout',
                'My Wishlist',
                'Tracking Order'
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="w-full md:w-1/4 p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">NEWSLETTER</h3>
            <p className="text-sm text-gray-600 mb-6">
              Subscribe to our mailing list to get the new updates!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />
              <button
                onClick={handleNewsletterSignup}
                className="px-6 py-2 bg-gray-800 text-white text-xs font-medium rounded-r-md hover:bg-gray-700 transition-colors duration-200"
              >
                SIGN UP
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-2 mt-6">
              <a href="#" className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded hover:bg-blue-700 transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-800 flex items-center justify-center rounded hover:bg-gray-700 transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-blue-500 flex items-center justify-center rounded hover:bg-blue-600 transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-600 flex items-center justify-center rounded hover:bg-pink-700 transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-pink-500 flex items-center justify-center rounded hover:bg-pink-600 transition-colors">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </a>
              <a href="#" className="w-8 h-8 bg-orange-500 flex items-center justify-center rounded hover:bg-orange-600 transition-colors">
                <Rss className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-red-600 flex items-center justify-center rounded hover:bg-red-700 transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-50 py-0">
  <div className="max-w-7xl mx-auto flex justify-between items-center px-4 pt-20">
    <p className="text-gray-600 text-sm">
      &copy; 2023 Kapee. All rights reserved.
    </p>
    
    <div className="flex space-x-4">
  <img src={Visa} alt="Visa" className="w-8 h-8 object-contain" />
  <img src={mastercard} alt="MasterCard" className="w-8 h-8 object-contain" />
  <img src={paypal} alt="PayPal" className="w-8 h-8 object-contain" />
  <img src={Last} alt="American Express" className="w-8 h-8 object-contain" />
  <img src={Discover} alt="Discover" className="w-8 h-8 object-contain" />

</div>

  </div>
</footer>
    </footer>
  );
};

export default KapeeFooter;