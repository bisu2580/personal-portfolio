"use client";
import { motion } from "framer-motion"; // Import framer-motion
import SkillCard from "./SkillCard";
import Wrapper from "./Wrapper";
import { AnimatedGradientText } from "./ui/animated-gradient-text";
import { AuroraText } from "./ui/aurora-text";
import { cn } from "@/lib/utils";
import { itemVariant, sectionVariant } from "@/animations";
import {
  backendSkills,
  devTools,
  frontendSkills,
  programmingLanguages,
} from "@/constants";

export default function SkillsSection() {
  return (
    <Wrapper>
      <motion.section
        id="skills"
        className="py-16 md:py-24 relative flex flex-col items-center"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          variants={itemVariant}
          className="flex flex-col items-center space-y-4 text-center"
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
              Explore my Tech Stack
            </AnimatedGradientText>
          </div>
          <h3 className="font-bold font-montserrat text-4xl md:text-5xl lg:text-6xl">
            My Technical <AuroraText>Skills</AuroraText>
          </h3>
        </motion.div>

        <motion.div
          variants={itemVariant}
          className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 max-w-7xl mx-auto md:px-20 px-6 relative"
        >
          {/* Programming Languages */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl md:text-2xl text-neutral-200 mb-6 font-montserrat">
              Programming Languages
            </h3>
            <div className="flex flex-wrap gap-6 font-montserrat lg:px-12">
              {programmingLanguages.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Frontend */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl md:text-2xl text-neutral-200 mb-6 font-montserrat">
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-6 font-montserrat lg:px-12">
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl md:text-2xl text-neutral-200 mb-6 font-montserrat">
              Backend Development
            </h3>
            <div className="flex flex-wrap gap-6 font-montserrat lg:px-12">
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Tools */}
          <motion.div
            variants={itemVariant}
            className="flex flex-col items-center"
          >
            <h3 className="text-xl md:text-2xl text-neutral-200 mb-6 font-montserrat">
              Development Tools
            </h3>
            <div className="flex flex-wrap gap-6 font-montserrat lg:px-12">
              {devTools.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <SkillCard {...skill} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </Wrapper>
  );
}
