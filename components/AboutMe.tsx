import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full flex justify-between items-center py-4">
      <h2 className="absolute -top-16 left-0 text-stroke text-[7rem] z-0">
        About Me
      </h2>
      <div id="about" className="w-1/2 flex flex-col gap-3">
        <h2 className="text-white text-2xl font-bold tracking-wider mb-4">
          <span className="font-audiowide text-xl text-blue-400 mr-5">01.</span>
          About me
          <span className="inline-block w-1/6 h-1 rounded-full bg-blue-400 ml-5"></span>
        </h2>
        <div ref={ref} className="space-y-4 z-10">
          <motion.p
            className="text-[#b9c2df] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hello! My name is <span className="text-[#60a5fa]">Anis</span>, and
            I specialize in crafting and enhancing web experiences with a focus
            on <span className="text-[#60a5fa]">WordPress</span>,{" "}
            <span className="text-[#60a5fa]">HTML</span>,{" "}
            <span className="text-[#60a5fa]">CSS</span>,{" "}
            <span className="text-[#60a5fa]">JavaScript</span>, and{" "}
            <span className="text-[#60a5fa]">Next.js</span>. My journey into web
            development began with a fascination for customizing websites and
            quickly grew as I explored how powerful web technologies can
            transform ideas into interactive, user-friendly applications!
          </motion.p>

          <motion.p
            className="text-[#b9c2df] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Over the years, I've been fortunate to work with diverse clients,
            building websites that not only look good but are optimized for
            performance and accessibility. My primary focus now is creating
            dynamic, high-quality sites and digital experiences that stand out
            on the <span className="text-[#60a5fa]">internet</span>, while
            continuously expanding my skill set.
          </motion.p>

          <motion.p
            className="text-[#b9c2df] text-justify"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Recently, I've been diving deeper into modern web technologies,
            including <span className="text-[#60a5fa]">Next.js</span>, to push
            the boundaries of what's possible with web design and functionality.
          </motion.p>
        </div>
      </div>
      <motion.div
        ref={ref}
        className="w-1/2 h-full mx-auto relative flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                rotate: 0,
                transition: {
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.3,
                },
              }
            : {}
        }
      >
        <Image
          src="/images/anis-dzed.jpg"
          alt="Anis Dzed"
          width={450}
          height={450}
          className="rounded-xl shadow-lg border-blue-400 border-4 w-[450px] h-[350px] z-10"
        />
        <div className="absolute w-[450px] h-[350px] border-blue-400 border-4 rounded-xl -bottom-4 right-20"></div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
