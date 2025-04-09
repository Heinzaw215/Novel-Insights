import Link from 'next/link';
import { IconType } from 'react-icons';

type ContactItem = {
  icon: IconType;
  label: string;
  link?: string;
};

type FooterContactProps = {
  title:string;
  contactItems: ContactItem[];
};

const FooterContact = ({title, contactItems }: FooterContactProps) => (
  <section className="w-full md:w-1/3 xl:w-1/4 px-4">
    <h5 className="text-xl font-serif text-white font-semibold mb-4">{title}</h5>
    <ul className="space-y-4 text-gray-100">
      {contactItems.map(({ icon: Icon, label, link }, index) => (
        <li key={index} className="flex items-start gap-3">
          <Icon className="text-white text-xl mt-1" />
          {link ? (
            <Link href={link} className="hover:underline">{label}</Link>
          ) : (
            <span>{label}</span>
          )}
        </li>
      ))}
    </ul>
  </section>
);

export default FooterContact;
