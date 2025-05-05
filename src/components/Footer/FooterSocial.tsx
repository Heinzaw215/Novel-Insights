import Link from 'next/link';
import { IconType } from 'react-icons';

type SocialItem = {
  id: number;
  icon: IconType;
  label: string;
  link: string;
};

type FooterSocialProps = {
  title: string;
  socials: SocialItem[];
};

const FooterSocial = ({ title, socials }: FooterSocialProps) => (
  <section className="w-full px-4 " aria-labelledby="footer-social-title">
    <h5 className="text-[1.5rem] text-center font-serif text-gray-900 font-semibold mb-4">{title}</h5>
    <ul className="space-y-4 text-gray-800">
      {socials.map(({ id, icon: Icon, label, link }) => (
        <li key={id} className="flex text-center  gap-3">
          <Icon className="text-gray-900 text-xl" />
          <Link href={link} className="hover:underline hover:text-orange-600 transition-colors duration-300">
            <span className="inline">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

export default FooterSocial;
