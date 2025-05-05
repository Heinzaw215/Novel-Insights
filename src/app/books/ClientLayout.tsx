"use client";

import { usePathname } from "next/navigation";
import { NavBar, Footer } from "@/components/layout/NavBar";
import { ScrollToTopButton } from "@/components/misc";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  // Show NavBar/Footer ONLY on specific routes
  const showLayout = !["/about", "/contact", "/books"].includes(pathName);

  return (
    <>
      {showLayout && <NavBar />}
      {children}
      <ScrollToTopButton />
      {showLayout && <Footer />}
    </>
  );
}
