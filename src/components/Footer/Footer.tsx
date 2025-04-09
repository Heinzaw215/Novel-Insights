// Footer.tsx
import {
  FooterAbout,
  FooterContact,
  FooterSocial,
  FooterNewsletter,
  FooterBottom,
  ScrollToTopButton,
} from '../Footer';

import { aboutText, contactItems, socialLinks, newsletterConfig } from '@/config/footerConfig';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-orange-500 to-yellow-400 text-gray-800 pt-12 pb-8 px-6 shadow-inner relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-wrap justify-between gap-12 mb-16">
          <FooterAbout title="About Us" content={aboutText} />
          <FooterContact title="Contact Us" contactItems={contactItems} />
          <FooterSocial title="Follow Us" socials={socialLinks} />
        </div>

        <FooterNewsletter
          heading={newsletterConfig.heading}
          description={newsletterConfig.description}
          placeholder={newsletterConfig.placeholder}
          buttonLabel={newsletterConfig.buttonLabel}
        />
        <FooterBottom />
      </div>

      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
