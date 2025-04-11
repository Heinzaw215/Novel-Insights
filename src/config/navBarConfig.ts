import { FaHome } from 'react-icons/fa';
import {FaBook, FaHandPeace } from "react-icons/fa6";

export const NavBarItems = [
  {
    id: 1,
    icon: FaHome,
    label: 'Home',
    link: '/',
  },
  {
    id: 2,
    icon: FaBook,
    label: 'Books',
    link: '/books',
  },
  {
    id: 3,
    icon: FaHandPeace,
    label: 'Reviews',
    link: '/reviews',
  },
  {
    id: 4,
    icon: 'ℹ️',
    label: 'Authors',
    link: '/authors',
  },
  {
    id: 5,
    icon: '📖',
    label: 'Genres',
    link: '/genres',
  },
  {
    id: 6,
    icon: '👤',
    label: 'Contact Us',
    link: '/contact',
  },
]

