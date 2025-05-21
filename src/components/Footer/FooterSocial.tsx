import { FooterSocialProps } from '@/schemas/footer';
import Link from 'next/link';
import React from 'react';

const FooterSocial = ({ title, socials }: FooterSocialProps) => (
  <section
    className="w-full px-4 " aria-labelledby="footer-social-title">
    <h5
      id='footer-social-title'
      className="text-2xl text-center text-gray-900 font-semibold mb-4"
    >
      {title}
    </h5>

    <ul className="space-y-4 text-gray-800">
      {socials.map(({ id, icon: Icon, label, link }) => (
        <li
          key={id}
          className="flex justify-center items-center gap-3"
        >
          <Icon
            className="text-gray-900 text-xl" aria-hidden='true'
          />
          <Link
            href={link}
            className="hover:underline hover:text-orange-600 transition-colors duration-300"
            aria-label={`Visit our ${label} Page`}
            title={`Visit our ${label} Page`}
            rel="noopener noreferrer"
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default React.memo(FooterSocial);
