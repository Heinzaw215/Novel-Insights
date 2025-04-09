import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navBarItems = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Books", href: "/books" },
    { id: 3, name: "Reviews", href: "/reviews" },
    { id: 4, name: "About", href: "/about" },
    { id: 5, name: "Contact", href: "/contact" },
    { id: 6, name: "Login", href: "/login" },
  ];

  return (
    <ul
      className={`md:hidden bg-amber-800 text-white py-4 px-6 space-y-5 transition-all duration-300 text-xl font-medium ${isOpen ? "block" : "hidden"}`}
      aria-label="Mobile navigation"
    >
      {navBarItems.map(({ id, name, href }) => (
        <li key={id}>
          <Link
            href={href}
            onClick={onClose}
            className="block hover:text-amber-300 transition duration-300"
            title={name}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
