"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-orange-500 to-yellow-400 text-gray-800 pt-12 pb-8 px-6 shadow-inner relative">
      <div className="container mx-auto px-6 md:px-12">
        {/* Sections */}
        <div className="flex flex-wrap justify-between gap-12 mb-16">
          {/* About Us */}
          <section className="w-full md:w-1/3 xl:w-1/4 px-4">
            <h5 className="text-xl font-serif text-white font-semibold mb-4">About Us</h5>
            <p className="text-base text-gray-100 leading-relaxed tracking-wide">
              Welcome to our book review platform! Discover thoughtful reviews and curated recommendations to help you find your next favorite read.
            </p>
          </section>

          {/* Contact Us */}
          <section className="w-full md:w-1/3 xl:w-1/4 px-4">
            <h5 className="text-xl font-serif text-white font-semibold mb-4">Contact Us</h5>
            <address className="not-italic text-base text-gray-100 space-y-4 leading-relaxed">
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-white text-xl mt-1" />
                <Link href="mailto:info@example.com" className="hover:underline" title="Email us" aria-label="Email us">
                  info@example.com
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <FaPhone className="text-white text-xl mt-1" />
                <Link href="tel:+1234567890" className="hover:underline" title="Call us" aria-label="Call us">
                  +1 (234) 567-890
                </Link>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white text-xl mt-1" />
                <span title="Our location">123 Book Street, Readville</span>
              </div>
            </address>
          </section>

          {/* Follow Us */}
          <section className="w-full md:w-1/3 xl:w-1/4 px-4">
            <h5 className="text-xl font-serif text-white font-semibold mb-4">Follow Us</h5>
            <ul className="space-y-4 text-gray-100 leading-relaxed">
              <li className="flex items-center gap-3">
                <FaFacebookF className="text-white text-xl hover:scale-110 transition-transform duration-200" />
                <Link href="#" className="hover:underline" title="Facebook" aria-label="Facebook">Facebook</Link>
              </li>
              <li className="flex items-center gap-3">
                <FaTwitter className="text-white text-xl hover:scale-110 transition-transform duration-200" />
                <Link href="#" className="hover:underline" title="Twitter" aria-label="Twitter">Twitter</Link>
              </li>
              <li className="flex items-center gap-3">
                <FaInstagram className="text-white text-xl hover:scale-110 transition-transform duration-200" />
                <Link href="#" className="hover:underline" title="Instagram" aria-label="Instagram">Instagram</Link>
              </li>
            </ul>
          </section>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-orange-300 py-8 px-6 md:px-12 text-center shadow-md rounded-xl mb-12">
          <h3 className="text-2xl text-gray-800 font-bold mb-3">Join Our Newsletter</h3>
          <p className="text-base text-gray-700 mb-6">Stay updated with book reviews and recommendations.</p>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-auto px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
              aria-label="Email address"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-6 rounded-full transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-gray-700 mt-10 pt-6 border-t border-yellow-300">
          &copy; {new Date().getFullYear()} <span className="font-medium">Novel Insights</span>. All rights reserved.
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to Top"
          className="fixed bottom-6 right-6 w-14 h-14 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ease-in-out ring-1 ring-yellow-200 hover:scale-105"
        >
          <FaArrowUp className="text-2xl" />
        </button>
      )}

    </footer>
  );
};

export default Footer;
