"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, PhoneCall } from "lucide-react";
import aboutImg from "../assets/aboutImg.jpg";
import { AuroraText } from "./ui/aurora-text";
import { RainbowButton } from "./ui/rainbow-button";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { BorderBeam } from "./ui/border-beam";
import leetcode from "@/assets/leetcode.png";
import gfg from "@/assets/gfg.png";
import Wrapper from "./Wrapper";
import { ScrollHandler } from "./ScrollHandler";
import {
  cardPopVariant,
  contentVariants,
  imageVariants,
  itemVariants,
  sectionVariants,
} from "@/animations";

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <Image
    src={leetcode}
    alt="leetcode-icon"
    width={32}
    height={32}
    className={className}
  />
);

const GfgIcon = ({ className }: { className?: string }) => (
  <Image
    src={gfg}
    alt="gfg icon"
    width={32}
    height={32}
    className={className}
  />
);

type InfoCardProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  mainText: string;
  href?: string;
  variants?: import("framer-motion").Variants;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  subtitle,
  mainText,
  href,
  variants,
}) => {
  const CardContent = () => (
    <>
      <div className="text-sky-400">{icon}</div>
      <div>
        <h5 className="text-sm text-neutral-400">{title}</h5>
        <p className="text-base font-semibold text-neutral-100">{mainText}</p>
        <p className="text-xs text-neutral-500">{subtitle}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <motion.a
        variants={variants}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 rounded-lg bg-neutral-800/80 p-4 transition-all duration-300 hover:bg-neutral-700/80 hover:-translate-y-1"
      >
        <CardContent />
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={variants}
      className="flex items-center gap-4 rounded-lg bg-neutral-800/80 p-4"
    >
      <CardContent />
    </motion.div>
  );
};

export default function AboutMeSection() {
  return (
    <Wrapper>
      <section
        id="about"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-slow opacity-50"></div>

        <div className="w-full max-w-7xl relative z-10 flex flex-col gap-3 mt-10">
          <div className="group relative mx-auto w-fit flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
            <span
              className={cn(
                "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            <AnimatedGradientText className="text-sm font-medium flex gap-2 items-center">
              Know About Me
            </AnimatedGradientText>
          </div>
          <h3 className="font-bold text-4xl md:text-6xl text-center mb-4 font-montserrat">
            About <AuroraText>Me</AuroraText>
          </h3>

          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col lg:flex-row gap-10 items-center lg:items-start bg-neutral-900/60 backdrop-blur-md border border-neutral-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative"
          >
            {/* Left Side: Image */}
            <motion.div
              variants={imageVariants}
              className="w-full md:w-[50%] lg:w-[65%] relative"
            >
              <div className="relative w-full h-[60vh] lg:h-[85vh] shadow-lg rounded-3xl overflow-hidden">
                <Image
                  src={aboutImg}
                  alt="A portrait of Biswajit"
                  fill
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Side: Content */}
            <motion.div
              variants={contentVariants}
              className="w-full lg:w-[75%] flex flex-col gap-6"
            >
              <motion.div
                variants={itemVariants}
                className="text-sm md:text-base text-neutral-300 space-y-4 font-montserrat"
              >
                {/* ... All your <p> tags with bio ... */}
                <p className="mb-6 leading-relaxed lg:text-base text-sm">
                  I&apos;m{" "}
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                    Biswajit Sahoo
                  </span>
                  , a{" "}
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                    Full-Stack Developer{" "}
                  </span>
                  who loves transforming ideas into{" "}
                  <span className="inline-block px-2 py-0.5 rounded-md bg-white/5 border border-white/6 text-white/90 font-normal md:font-medium mr-1 italic">
                    clean, scalable,and high-performance{" "}
                  </span>
                  web applications. My journey began with a curiosity for how
                  the web works, and over time I&apos;ve honed my skills in both{" "}
                  <span className="inline-block px-2 py-0.5 rounded-md bg-white/5 border border-white/6 text-white/90 md:font-medium font-normal italic">
                    front-end and back-end development,{" "}
                  </span>
                  allowing me to craft complete digital experiences from the
                  ground up.
                </p>

                <p className="mb-6 leading-relaxed lg:text-base text-sm">
                  Alongside coding, I have a strong interest in{" "}
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                    designing modern, user-friendly interfaces{" "}
                  </span>
                  — blending aesthetics with functionality to create websites
                  that not only look great but feel intuitive. I thrive on
                  working with cutting-edge technologies like{" "}
                  <span className="inline-block px-2 py-0.5 rounded-md bg-white/5 border border-white/6 text-white/90 md:font-medium font-normal italic">
                    React, Next.js, Node.js, and MongoDB,{" "}
                  </span>
                  while staying open to experimenting with new tools and
                  frameworks.
                </p>

                <p className="leading-relaxed lg:text-base text-sm">
                  I&apos;m always exploring new technologies and am particularly
                  excited by the potential of{" "}
                  <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                    AI{" "}
                  </span>
                  to create smarter, more intuitive software.
                </p>
              </motion.div>

              {/* Credentials Section */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <InfoCard
                  variants={cardPopVariant}
                  icon={<Briefcase size={28} />}
                  title="Experience"
                  mainText="1+ Year"
                  href=""
                  subtitle="Fullstack Development"
                />
                <InfoCard
                  variants={cardPopVariant}
                  icon={<GraduationCap size={28} />}
                  title="Education"
                  mainText="B.Tech. Graduate"
                  href=""
                  subtitle="VSSUT Burla"
                />
                <InfoCard
                  variants={cardPopVariant}
                  icon={<LeetCodeIcon className="w-7 h-7" />}
                  title="LeetCode"
                  mainText="View Profile"
                  subtitle="Problem Solving"
                  href="https://leetcode.com/u/biswa_20"
                />
                <InfoCard
                  variants={cardPopVariant}
                  icon={<GfgIcon className="w-7 h-7 text-green-400" />}
                  title="GeeksforGeeks"
                  mainText="View Profile"
                  subtitle="Data Structures"
                  href="https://www.geeksforgeeks.org/user/biswajit20"
                />
              </motion.div>

              {/* Call to Action */}
              <motion.div
                variants={itemVariants}
                className="mt-4 flex flex-col items-center lg:items-start"
              >
                <p className="font-sans font-normal text-sm text-neutral-300 mb-2">
                  Want To Know More about me?
                </p>
                <a onClick={(e) => ScrollHandler(e, "contact")}>
                  <RainbowButton variant="outline" className="rounded-lg">
                    <PhoneCall />
                    Connect with Me
                  </RainbowButton>
                </a>
              </motion.div>
            </motion.div>
            <BorderBeam size={150} />
          </motion.div>
        </div>
      </section>
    </Wrapper>
  );
}
