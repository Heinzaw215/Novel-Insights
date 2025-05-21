import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export const aboutText = `
Novel Insights is a hub for book lovers. Discover new reads, share your reviews, and connect with fellow readers.
`;

export const contactItems = [
  {
    id:1,
    icon: FaEnvelope,
    label: 'info@example.com',
    link: 'mailto:info@example.com',
  },
  {
    id:2,
    icon: FaPhone,
    label: '+95 9 123-456-789',
    link: 'tel:+959123456789',
  },
  {
    id:3,
    icon: FaMapMarkerAlt,
    label: '123 Book Street, Revile',
    link: '',
  },
];

export const socialLinks = [
  {
    id:1,
    icon: FaFacebookF,
    label: 'Facebook',
    link: '#',
  },
  {
    id:2,
    icon: FaTwitter,
    label: 'Twitter',
    link: '#',
  },
  {
    id:3,
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