"use client";

import React, { useState, useEffect } from "react";
import { LandingPage, HomePage } from "@/components/layout";
import LoadingSpinner from "@/components/misc/LoadingSpinner";
import ThreeBook from "@/components/ThreeBook";

export default function Home() {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsNewUser(true); // #TODO: Change later to false
    } else {
      localStorage.setItem("hasVisited", "true");
      setIsNewUser(true);
    }
  }, []);

  // Don’t render anything until we know if user is new or not
  if (isNewUser === null) {
    return <LoadingSpinner />; // or a loading spinner if you want
  }

  return (
    <div>
      <LandingPage />
      <HomePage />
      <ThreeBook />
    </div>);
};