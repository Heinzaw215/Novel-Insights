import Link from 'next/link';
import { IconType } from 'react-icons';

type ContactItem = {
  icon: IconType;
  label: string;
  link?: string;
};

type FooterContactProps = {
  title: string;
  contactItems: ContactItem[];
};

const FooterContact = ({ title, contactItems }: FooterContactProps) => (
  <section className="w-full px-4 text-center" aria-labelledby="footer-contact-title">
    <h5 className="text-xl font-serif text-gray-900 font-semibold mb-4">{title}</h5>
    <ul className="space-y-4 text-gray-800">
      {contactItems.map(({ icon: Icon, label, link }, index) => (
        <li key={index} className="flex items-center gap-3">
          <Icon className="text-gray-900 text-xl mt-1" />
          {link ? (
            <Link href={link} className="hover:underline hover:text-orange-600 transition-colors duration-300">
              {label}
            </Link>
          ) : (
            <span>{label}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default FooterContact;
