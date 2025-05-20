import {
  FooterAbout,
  FooterContact,
  FooterSocial,
  FooterBottom,
} from '@/components/Footer';

import { aboutText, contactItems, socialLinks } from '@/config/footerConfig';
import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-300 text-gray-900 pt-4 px-2 shadow-inner"
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
