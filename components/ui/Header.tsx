import Link from "next/link";

const Header = () => {
  const socialMedia = [
    {
      name: "ABOUT",
      url: "#about",
    },
    {
      name: "EXPERIENCE",
      url: "#experience",
    },
    {
      name: "SKILLS",
      url: "#skills",
    },
    {
      name: "PROJECTS",
      url: "#projects",
    },
    {
      name: "BLOG",
      url: "#blog",
    },
  ];
  return (
    <div className="w-full flex justify-between items-center py-8 z-50">
      <Link
        href="/"
        className="font-audiowide min-w-[20vw] uppercase text-white text-3xl font-bold tracking-wider cursor-pointer"
      >
        Anis Dzed
      </Link>
      <div className="flex justify-evenly items-center text-white gap-10">
        {socialMedia.map((social) => (
          <Link
            href={social.url}
            key={social.name}
            className="hover:text-pink-500 duration-300"
          >
            {social.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
