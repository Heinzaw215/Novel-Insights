import { FooterContactProps } from '@/schemas/footer';
import Link from 'next/link';
import React from 'react';

const FooterContact = ({ title, contactItems }: FooterContactProps) => (
  <section
    className="w-full px-4 text-center" aria-labelledby="footer-contact-title"
  >
    <h5
      id='footer-contact-title'
      className="text-2xl text-gray-900 font-semibold mb-4"
    >{title}</h5>
    <ul className="space-y-4 text-gray-800">
      {contactItems.map(({ icon: Icon, label, link }, index) => (
        <li key={label + index} className="flex items-center justify-center gap-3">
          <Icon
            className="text-gray-900 text-xl mt-1"
            aria-hidden='true'
          />
          {link ? (
            <Link
              href={link}
              className="hover:underline hover:text-orange-600 transition-colors duration-300"
              aria-label={label}
              rel="noopener noreferrer"
            >
              {label}
            </Link>
          ) : (
            <span aria-label={label}>{label}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default React.memo(FooterContact);
