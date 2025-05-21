"use client"
import { useState, useEffect } from "react";
import { LandingPage, HomePage } from "@/components/layout";

// export async function getStaticProps() {
//   // Replace with your actual data fetching logic
//   const books = await fetchBooks();

//   return {
//     props: { books },
//     revalidate: 60, // re-generate the page every 60 seconds
//   };
// }

export default function Home() {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    setIsNewUser(!visited);
    if (!visited) localStorage.setItem("visited", "true");
  }, []);

  if (isNewUser === null) return null; // or a loading spinner

  return isNewUser ? <LandingPage /> : <HomePage />;
}
