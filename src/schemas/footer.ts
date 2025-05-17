import { IconType } from 'react-icons';

type FooterAboutProps = {
  title: string;
  content: string;
};

type ContactItem = {
  icon: IconType;
  label: string;
  link: string;
};

type FooterContactProps = {
  title: string;
  contactItems: ContactItem[];
};

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