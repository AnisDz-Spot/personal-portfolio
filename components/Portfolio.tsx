"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";

type Projects = {
  title: string;
  descr: string;
  href: string;
  imgSrc: string;
};

const Portfolio = () => {
  const projects: Projects[] = [
    {
      title: "ESAA",
      descr: "Établissement public d'enseignement supérieur",
      href: "https://esaa.dz",
      imgSrc: "/images/projects/esaa.webp",
    },
    {
      title: "Addel Tech",
      descr: "Smartphone Accessories, Simplified Shopping.",
      href: "https://addel-tech.com",
      imgSrc: "/images/projects/addel-tech.webp",
    },
    {
      title: "Maison Nature",
      descr: "Affordable Furniture Solutions for Every Home.",
      href: "https://maison-nature.dz",
      imgSrc: "/images/projects/maison-nature.webp",
    },
    {
      title: "Parapharmacie RP",
      descr: "Affordable Furniture Solutions for Every Home.",
      href: "https://parapharmacie-prd.com",
      imgSrc: "/images/projects/pdrp.webp",
    },
  ];

  return (
    <section className="min-h-[90vh] mt-32 flex flex-col gap-20">
      <div id="projects" className="relative w-full flex flex-col gap-3">
        <h2 className="absolute -top-16 left-0 text-stroke text-[7rem] z-0">
          My Works
        </h2>
        <h2 className="text-white text-2xl font-bold tracking-wider mb-4">
          <span className="font-audiowide text-xl text-blue-400 mr-5">03.</span>
          Portfolio
          <span className="inline-block w-1/6 h-1 rounded-full bg-blue-400 ml-5"></span>
        </h2>
      </div>
      <div className=" grid grid-cols-4 gap-3 mt-0">
        {projects.map((website, index) => (
          <PinContainer
            title={website.href}
            href={website.href}
            key={website.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Initial state
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              transition={{ duration: 0.5, delay: index * 0.2 }} // Transition settings
              className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[280px] h-[20rem]"
            >
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-lg text-slate-100 uppercase font-audiowide tracking-wider">
                {website.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 text-sm">{website.descr}</span>
              </div>
              <div className="relative flex flex-1 w-full rounded-lg overflow-hidden mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                <Image src={website.imgSrc} alt="" fill={true} />
              </div>
            </motion.div>
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
