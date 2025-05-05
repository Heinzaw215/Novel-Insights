export const NavBarConfig = {
  pageName: `Novel Insights`
}

export interface NavItem {
  id: number;
  label: string;
  href: string;
}

export const NavBarItems: NavItem[] = [
  { id: 1, label: "Home", href: "/" },
  { id: 2, label: "Books", href: "/books" },
  // { id: 3, label: "Reviews", href: "/reviews" },
  // { id: 4, label: "Authors", href: "/authors" },
  // { id: 5, label: "Genres", href: "/genres" },
  { id: 6, label: "Contact Us", href: "/contact" },
  { id: 7, label: "Login", href: "/login" },
];