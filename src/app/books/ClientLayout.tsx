"use client";

import { usePathname } from "next/navigation";
import { NavBar, Footer } from "@/components/layout";
import { ScrollToTopButton } from "@/components/misc";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  // Show NavBar/Footer ONLY on specific routes
  const showLayout = !["/about", "/contact"].some((route) => pathName.startsWith(route));

  return (
    <>
      {showLayout && <NavBar />}
      {children}
      <ScrollToTopButton />
      {showLayout && <Footer />}
    </>
  );
}
