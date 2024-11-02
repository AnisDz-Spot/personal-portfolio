"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import HeroHome from "@/components/HeroHome";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="w-screen bg-black flex flex-col items-center gap-5">
      {loading && <Loading />}
      <HeroHome />
      <AboutMe />
    </section>
  );
}
