"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import ScrollToTopButton from "@/components/misc/ScrollToTopButton";
import React from "react";

// Memoizing the NavBar and Footer components
const MemoizedNavBar = React.memo(NavBar);
const MemoizedFooter = React.memo(Footer);

// Helper function to check if layout should be displayed
const shouldShowLayout = (path: string) => {
  return !["/", "/login", "/error"].includes(path);
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname() || ""; // Fallback to empty string if pathName is undefined


  const showLayout = shouldShowLayout(pathName);

  return (
    <>
      {showLayout && <MemoizedNavBar />}
      {children}
      <ScrollToTopButton />
      {showLayout && <MemoizedFooter />}
    </>
  );
}
