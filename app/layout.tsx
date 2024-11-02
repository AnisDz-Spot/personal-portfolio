import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTiktok,
} from "@tabler/icons-react";

const inter = localFont({
  src: "./fonts/Inter-VariableFont.ttf",
  variable: "--font-inter",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ANIS DZED PORTFOLIO",
  description: "Modern & Elegant Web Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://web.facebook.com/Anis.Dzed.Algerian.and.Proud/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/anis_dzed/",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://github.com/AnisDz-Spot",
    },
    {
      title: "TikTok",
      icon: (
        <IconBrandTiktok className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://www.tiktok.com/@anis.dz515",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-white dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/anis-dzed/",
    },
  ];
  return (
    <html lang="en">
      <body
        className={`${inter.variable} relative flex flex-col items-center overflow-x-hidden antialiased`}
      >
        {children}
        <BackgroundBeams className="fixed top-0 left-0" />
        <FloatingDock
          items={links}
          desktopClassName="fixed bottom-4 bg-[#171717] z-40"
        />
      </body>
    </html>
  );
}
