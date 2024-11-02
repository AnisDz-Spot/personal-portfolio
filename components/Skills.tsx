// import { useAnimation } from "framer-motion";
// import { useEffect, useRef } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

// type Skill = {
//   name: string;
//   level: number;
// };

type Testimonials = {
  title: string;
  logo: string;
};

const testimonials: Testimonials[] = [
  {
    title: "HTML",
    logo: "/images/html-5.png",
  },
  {
    title: "CSS",
    logo: "/images/css.png",
  },
  {
    title: "JavaScript",
    logo: "/images/javascript.png",
  },
  {
    title: "Next.js",
    logo: "/images/nextjs.png",
  },
  {
    title: "React",
    logo: "/images/react.png",
  },
  {
    title: "Nodejs",
    logo: "/images/nodejs.png",
  },
  {
    title: "Wordpress",
    logo: "/images/wordpress.png",
  },
  {
    title: "PHP",
    logo: "/images/php.png",
  },
  {
    title: "Tailwindcss",
    logo: "/images/tailwind.png",
  },
  {
    title: "Typescript",
    logo: "/images/typescript.png",
  },
  {
    title: "Git",
    logo: "/images/git.png",
  },
  {
    title: "MySQL",
    logo: "/images/mysql.png",
  },
  {
    title: "MongoDB",
    logo: "/images/mongo-db.png",
  },
];
// const skills: Skill[] = [
//   { name: "Next.js", level: 50 },
//   { name: "WordPress", level: 95 },
//   { name: "HTML", level: 95 },
//   { name: "CSS", level: 90 },
//   { name: "JavaScript", level: 80 },
// ];

const SkillChart = () => {
  // const controls = useAnimation();
  // const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           // Start the animation when the component is in the viewport
  //           animateCircles();
  //           observer.unobserve(entry.target); // Stop observing once animation starts
  //         }
  //       });
  //     },
  //     { threshold: 0.5 }
  //   );

  //   if (ref.current) {
  //     observer.observe(ref.current);
  //   }

  //   return () => observer.disconnect(); // Cleanup observer on component unmount
  // }, [controls]);

  // const animateCircles = async () => {
  //   // Show the circles one by one
  //   await controls.start((i) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: { delay: i * 0.2, duration: 0.8 },
  //   }));
  //   // Animate the circle fill after all circles are visible
  //   controls.start((i) => ({
  //     strokeDashoffset: 2 * Math.PI * 50 * (1 - skills[i].level / 100),
  //     transition: { duration: 1.5, ease: "easeOut" },
  //   }));
  // };

  return (
    <>
      <div id="skills" className="relative w-full flex flex-col gap-3 mt-32">
        <h2 className="absolute -top-16 left-0 text-stroke text-[7rem] z-0">
          My Skills
        </h2>
        <h2 className="text-white text-2xl font-bold tracking-wider mb-4">
          <span className="font-audiowide text-xl text-blue-400 mr-5">02.</span>
          My Skills
          <span className="inline-block w-1/6 h-1 rounded-full bg-blue-400 ml-5"></span>
        </h2>
      </div>
      <InfiniteMovingCards items={testimonials} speed="normal" />
      {/* <div ref={ref} className="w-full flex flex-wrap justify-around mt-16">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="flex flex-col items-center"
          >
            <svg width="120" height="120" className="relative">
              <circle
                cx="60"
                cy="60"
                r="50"
                fill="transparent"
                stroke="#1E293B"
                strokeWidth="10"
              />
              <motion.circle
                custom={index}
                id={`circle-${skill.name}`}
                cx="60"
                cy="60"
                r="50"
                fill="transparent"
                stroke="#60a5fa"
                strokeWidth="10"
                initial={{
                  strokeDasharray: 2 * Math.PI * 50,
                  strokeDashoffset: 2 * Math.PI * 50,
                }}
                animate={controls}
              />
              <motion.text
                x="60"
                y="65"
                textAnchor="middle"
                fontSize="20"
                fill="#ffffff"
                fontWeight="bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.5 }}
              >
                {`${skill.level}%`}
              </motion.text>
            </svg>
            <span className="mt-2 text-white">{skill.name}</span>
          </motion.div>
        ))}
      </div> */}
    </>
  );
};

export default SkillChart;
