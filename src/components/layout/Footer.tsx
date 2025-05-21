import { aboutText, contactItems, socialLinks } from '@/config/footerConfig';
import React from 'react';
import dynamic from 'next/dynamic';

const FooterAbout = dynamic(() => import('@/components/Footer/FooterAbout'));
const FooterContact = dynamic(() => import('@/components/Footer/FooterContact'));
const FooterSocial = dynamic(() => import('@/components/Footer/FooterSocial'));
const FooterBottom = dynamic(() => import('@/components/Footer/FooterBottom'));

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-amber-500 via-orange-400 to-amber-400 text-gray-900 pt-4 px-2 shadow-inner"
      role="contentinfo"
    >
      <div className="container mx-full px-4">
        {/* Grid layout for better stacking on small screens */}
        <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 w-full mb-2">
          <FooterAbout title="About Us" content={aboutText} />
          <FooterContact title="Contact Us" contactItems={contactItems} />
          <FooterSocial title="Follow Us" socials={socialLinks} />
        </div>


        {/* Footer bottom copyright */}
        <FooterBottom />
      </div>
    </footer >
  );
};

export default React.memo(Footer);
