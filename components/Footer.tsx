
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About PeePeeP.lk</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Feedback</a></li>
              <li><a href="#" className="hover:text-white">Advertise</a></li>
              <li><a href="#" className="hover:text-white">Become a Partner</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Others</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Car Sales Trends</a></li>
              <li><a href="#" className="hover:text-white">Emergency Response</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Experience PeePeeP.lk App</h3>
            <div className="flex items-center space-x-2">
                <a href="#" className="inline-block"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-10" /></a>
                <a href="#" className="inline-block"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-14" /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} PeePeeP.lk. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;