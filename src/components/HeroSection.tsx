"use client";
import { cubicBezier, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Wrapper from "./Wrapper";
import { Download, FolderOpenDot } from "lucide-react";
import { RainbowButton } from "./ui/rainbow-button";
import heroImg from "../assets/heroImgg.png";
import Image from "next/image";
import { floatVariants } from "./ui/float-animations";
import { AnimatedShinyText } from "./ui/animated-shiny-text";
import NavBar from "./NavBar";
import { ScrollHandler } from "./ScrollHandler";
import { Cover } from "./ui/cover";
import { AuroraText } from "./ui/aurora-text";
import {
  containerVariants,
  heroimageVariants,
  heroitemVariants,
} from "@/animations";
import { ShimmerButton } from "./ui/shimmer-button";
import { LayoutTextFlip } from "./ui/latout-text-flip";

type FloatingChipProps = {
  text: string;
  hide?: boolean;
};

const FloatingChip = ({ text, hide }: FloatingChipProps) => (
  <div
    className={cn(
      "group rounded-full border border-black/5 bg-neutral-100 text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
    )}
  >
    <AnimatedShinyText
      className={`inline-flex items-center justify-center px-3 sm:px-4 py-1 text-xs sm:text-sm transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 ${
        hide ? "hidden lg:block" : "block"
      }`}
    >
      <span>{text}</span>
    </AnimatedShinyText>
  </div>
);
const HeroSection = () => {
  const handleDownload = () => {
    const resumeFilePath = "/biswajit_fullstack_resume.pdf";
    const link = document.createElement("a");
    link.href = resumeFilePath;
    link.setAttribute("download", "biswajit_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Wrapper>
      <section id="home">
        <NavBar />
        <motion.div
          className="relative z-50 h-screen max-w-screen flex flex-col md:flex-row gap-10 px-5 lg:px-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section */}
          <div className="flex flex-col gap-10 lg:w-[60%] w-full md:justify-center lg:py-12 py-4">
            <div className="flex flex-col gap-4">
              <motion.h1
                variants={heroitemVariants}
                className="text-3xl font-bold lg:tracking-tight md:text-4xl lg:text-6xl font-montserrat lg:leading-tight leading-snug text-center lg:text-left"
              >
                <div className="block">
                  <span>I am </span>
                  <Cover>
                    <AuroraText>Biswajit</AuroraText>
                  </Cover>
                  <span>, a</span>
                </div>

                <div className="block mt-2">
                  <LayoutTextFlip
                    text=""
                    words={[
                      "Freelancer",
                      "Web Developer",
                      "Fullstack Developer",
                    ]}
                  />
                </div>

                {/* LINE 3 */}
                <div className="block mt-2">
                  <span>Based in Odisha</span>
                </div>
              </motion.h1>

              <motion.p
                variants={heroitemVariants}
                className="text-gray-600 dark:text-gray-400 text-base lg:text-xl text-center lg:text-left"
              >
                A dedicated developer focused on writing high-performance code
                to create reliable, user-friendly, and impactful digital
                experiences
              </motion.p>
            </div>
            <motion.div
              variants={heroitemVariants}
              className="flex flex-wrap gap-3 justify-center items-center lg:justify-start"
            >
              <div onClick={(e) => ScrollHandler(e, "projects")}>
                <RainbowButton
                  variant="outline"
                  className="rounded-lg text-xs lg:text-sm"
                >
                  <FolderOpenDot />
                  View My Work
                </RainbowButton>
              </div>
              <ShimmerButton
                className="shadow-2xl flex gap-2"
                onClick={handleDownload}
              >
                <Download className="w-4 h-4" />
                <span className="text-center text-sm leading-none font-normal tracking-tight whitespace-pre-wrap text-white lg:text-base dark:from-white dark:to-slate-900/10">
                  Download Resume
                </span>
              </ShimmerButton>
            </motion.div>
          </div>
          {/* Right Section */}
          <motion.div
            variants={heroimageVariants}
            className="lg:w-1/2 w-full rounded-2xl overflow-hidden p-10 relative sm:-mt-5 md:mt-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via bg-purple-700 to-blue-400 rounded-full blur-2xl md:blur-4xl lg:blur-3xl opacity-40 mt-[20%] mb-[30%] ml-[20%] mr-[20%]"></div>
            <div className="absolute inset-0 pointer-events-none">
              {/* Card 1 */}
              <motion.div
                className="absolute top-6 sm:top-10 left-4 sm:left-10"
                variants={floatVariants}
                animate="float1"
              >
                <FloatingChip text="React + Next.js Developer" hide={true} />
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="absolute top-55 right-2"
                variants={floatVariants}
                animate="float2"
              >
                <FloatingChip text="Building Sleek UIs" hide={true} />
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="absolute top-40 left-2"
                variants={floatVariants}
                animate="float3"
              >
                <FloatingChip text="Performance-Focused Code" hide={true} />
              </motion.div>

              <motion.div
                className="absolute bottom-54 left-6"
                variants={floatVariants}
                animate="float4"
              >
                <FloatingChip text="Open to collaborations" hide={true} />
              </motion.div>

              <motion.div
                className="absolute top-10 sm:top-15 right-4 sm:right-10"
                variants={floatVariants}
                animate="float5"
              >
                <FloatingChip text="AI + Web3 Curious" hide={true} />
              </motion.div>
            </div>
            <motion.div
              style={{ willChange: "transform" }}
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: cubicBezier(0.42, 0, 0.58, 1),
              }}
            >
              <Image
                src={heroImg}
                alt="hero-image"
                className="w-full h-full object-cover lg:scale-130 scale-135 translate-y-4 z-50"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </Wrapper>
  );
};

export default HeroSection;
