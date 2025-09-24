"use client";
import React from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { dockVariant } from "@/animations";
import { navLinks } from "@/constants";

const NavMenu = () => {
  return (
    <motion.div
      className="flex justify-center items-center z-100 absolute bottom-4 right-3 md:bottom-4 md:left-0"
      variants={dockVariant}
      initial="hidden"
      animate="visible"
    >
      <FloatingDock items={navLinks} />
    </motion.div>
  );
};

export default NavMenu;
