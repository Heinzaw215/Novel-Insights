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
  <section className="w-full md:w-1/3 xl:w-1/4 px-4" aria-labelledby="footer-contact-title">
    <h5 className="text-xl font-serif text-gray-900 font-semibold mb-4">{title}</h5>
    <ul className="space-y-4 text-gray-800">
      {contactItems.map(({ icon: Icon, label, link }, index) => (
        <li key={index} className="flex items-start gap-3">
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
