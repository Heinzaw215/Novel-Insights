import { IconType } from 'react-icons';

export type FooterAboutProps = {
  title: string;
  content: string;
};

type ContactItem = {
  icon: IconType;
  label: string;
  link: string;
};

export type FooterContactProps = {
  title: string;
  contactItems: ContactItem[];
};

type SocialItem = {
  id: number;
  icon: IconType;
  label: string;
  link: string;
};

export type FooterSocialProps = {
  title: string;
  socials: SocialItem[];
};