import {
  FooterAbout,
  FooterContact,
  FooterSocial,
  FooterBottom,
} from '@/components/Footer';

import { aboutText, contactItems, socialLinks } from '@/config/footerConfig';

const Footer = () => {
  return (
    <footer
      className="bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-300 text-gray-900 pt-12 px-6 shadow-inner relative"
      role="contentinfo"
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Grid layout for better stacking on small screens */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-8">
          <FooterAbout title="About Us" content={aboutText} />
          {/* <span className='flex flex-col gap-4'> */}
            <FooterContact title="Contact Us" contactItems={contactItems} /> <br />
            <FooterSocial title="Follow Us" socials={socialLinks} />
          {/* </span> */}
        </div>


        {/* Footer bottom copyright */}
        <FooterBottom />
      </div>
    </footer >
  );
};

export default Footer;
