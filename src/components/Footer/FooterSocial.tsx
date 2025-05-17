import { FooterSocialProps } from '@/schemas/footer';
import Link from 'next/link';

const FooterSocial = ({ title, socials }: FooterSocialProps) => (
  <section className="w-full px-4 " aria-labelledby="footer-social-title">
    <h5 className="text-2xl text-center text-gray-900 font-semibold mb-4">{title}</h5>
    <ul className="space-y-4 text-gray-800">
      {socials.map(({ id, icon: Icon, label, link }) => (
        <li key={id} className="flex gap-2">
          <Icon className="text-gray-900 text-xl" />
          <Link
            href={link}
            className="hover:underline hover:text-orange-600 transition-colors duration-300"
            aria-label={`Go To Our ${label} Page`}
            title={`Go To Our ${label} Page`}
          >
            <span className="inline">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default FooterSocial;
