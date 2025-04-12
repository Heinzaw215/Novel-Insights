"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  // Show NavBar/Footer ONLY on specific routes
  const showLayout = !["/", "/contact", "/books"].includes(pathName);

  return (
    <>
      {showLayout && <NavBar />}
      {children}
      <ScrollToTopButton />
      {showLayout && <Footer />}
    </>
  );
}
