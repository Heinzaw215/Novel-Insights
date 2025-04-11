import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const aboutText = `
Welcome to our book review platform! Discover thoughtful reviews and curated recommendations to help you find your next favorite read.
`;

export const contactItems = [
  {
    icon: FaEnvelope,
    label: 'info@example.com',
    link: 'mailto:info@example.com',
  },
  {
    icon: FaPhone,
    label: '+95 9 443-994-066',
    link: 'tel:+959443994066',
  },
  {
    icon: FaMapMarkerAlt,
    label: '123 Book Street, Readville',
    link: '',
  },
];

export const socialLinks = [
  {
    icon: FaFacebookF,
    label: 'Facebook',
    link: '#',
  },
  {
    icon: FaTwitter,
    label: 'Twitter',
    link: '#',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    link: '#',
  },
];

export const newsletterConfig = {
  heading: "Join Our Community",
  description: "Stay up to date with new book reviews and recommendations.",
  placeholder: "Enter your email",
  buttonLabel: "Subscribe",
};