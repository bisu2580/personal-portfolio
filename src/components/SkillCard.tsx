"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { CometCard } from "./ui/comet-card";

type SkillCardProps = {
  icon: ReactNode;
  text: string;
  level: number;
  borderColor?: string; // accent color for border glow
};

const SkillCard = ({ icon, text, borderColor = "white" }: SkillCardProps) => {
  return (
    <CometCard>
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{ scale: 0.98 }}
        className={`relative md:w-33 w-25 flex flex-col items-center justify-center p-3 md:p-6 rounded-2xl bg-gradient-to-br from-[#0d0d1f] to-[#050510] border border-${borderColor}/20`}
      >
        {/* Icon Glow */}
        <div
          className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-${borderColor}-500/10 backdrop-blur-md mb-3`}
        >
          <div className="text-4xl md:text-5xl">{icon}</div>
        </div>

        {/* Text */}
        <p className="text-sm md:text-base text-gray-100 font-normal text-center">
          {text}
        </p>
      </motion.div>
    </CometCard>
  );
};

export default SkillCard;
