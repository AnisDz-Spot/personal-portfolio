"use client";

import Loading from "./loading";
import { useEffect, useState } from "react";
import AboutMe from "@/components/AboutMe";
import HeroHome from "@/components/HeroHome";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section className="w-screen bg-black flex flex-col items-center px-[5vw]">
      {loading && <Loading />}
      <HeroHome />
      <AboutMe />
      <Skills />
      <Portfolio />
    </section>
  );
}
