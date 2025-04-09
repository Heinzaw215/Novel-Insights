// FooterSocial.tsx
import Link from 'next/link';
import { IconType } from 'react-icons';

type SocialItem = {
  icon: IconType;
  label: string;
  link: string;
};

type FooterSocialProps = {
  title: string;
  socials: SocialItem[];
};

const FooterSocial = ({ title, socials }: FooterSocialProps) => (
  <section className="w-full md:w-1/3 xl:w-1/4 px-4">
    <h5 className="text-xl font-serif text-white font-semibold mb-4">{title}</h5>
    <ul className="space-y-4 text-gray-100">
      {socials.map(({ icon: Icon, label, link }, index) => (
        <li key={index} className="flex items-center gap-3">
          <Icon className="text-white text-xl" />
          <Link href={link} className="hover:underline">{label}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default FooterSocial;
