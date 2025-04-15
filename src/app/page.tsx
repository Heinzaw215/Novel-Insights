"use client";

import React, { useState, useEffect } from "react";
import { LandingPage, HomePage } from "@/components/layout";
import LoadingSpinner from "@/components/misc/LoadingSpinner";

export default function Home() {
  const [isNewUser, setIsNewUser] = useState(null);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (hasVisited) {
      setIsNewUser(false);
    } else {
      localStorage.setItem("hasVisited", "true");
      setIsNewUser(true);
    }
  }, []);

  // Don’t render anything until we know if user is new or not
  if (isNewUser === null) {
    return <LoadingSpinner />; // or a loading spinner if you want
  }

  return <div>{isNewUser ? <LandingPage /> : <HomePage />}</div>;
};