"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Only motion is needed
import ProjectCard from "./ProjectCard";
import Wrapper from "./Wrapper";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { AuroraText } from "./ui/aurora-text";
import { projects } from "@/constants";
import {
  projectCardVariants,
  projectItemVariants,
  projectSectionVariants,
} from "@/animations";
import { ShimmerButton } from "./ui/shimmer-button";

export default function ProjectsSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <Wrapper>
      <motion.section
        id="projects"
        className="py-12 relative -mt-10 md:mt-0"
        variants={projectSectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-0 lg:px-15">
          <motion.div
            variants={projectItemVariants}
            className="flex flex-col items-center space-y-4"
          >
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
                My Portfolio
              </AnimatedGradientText>
            </div>
            <h3 className="font-bold font-montserrat text-4xl md:text-6xl text-center">
              Projects I have <AuroraText>Crafted</AuroraText>
            </h3>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-20">
            {projects.slice(0, visibleCount).map((project) => (
              <motion.div
                key={project.id}
                variants={projectCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                layout
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {visibleCount < projects.length && (
            <motion.div
              variants={projectItemVariants}
              className="flex justify-center mt-20"
            >
              <ShimmerButton
                className="shadow-2xl flex gap-2"
                onClick={handleLoadMore}
              >
                <span className="text-center text-sm leading-none font-normal tracking-tight whitespace-pre-wrap text-white lg:text-base dark:from-white dark:to-slate-900/10">
                  Load More
                </span>
              </ShimmerButton>
            </motion.div>
          )}
        </div>
      </motion.section>
    </Wrapper>
  );
}
