"use client";
import Link from "next/link";
import { Github, Linkedin, PhoneCall } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion
import { LineShadowText } from "./ui/line-shadow-text";
import { RainbowButton } from "./ui/rainbow-button";
import { ScrollHandler } from "./ScrollHandler";
import {
  iconParentVariants,
  navIconVariants,
  navItemVariants,
  navVariants,
} from "@/animations";

export default function NavBar() {
  return (
    <header className="z-50 w-full backdrop-blur-sm">
      <motion.nav
        className="h-25 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo and Name */}
        <motion.div variants={navItemVariants}>
          <Link href="/" className="flex items-center gap-3 group">
            <h1 className="text-balance text-2xl font-semibold leading-none tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl font-montserrat text-gray-300">
              <LineShadowText className="italic" shadowColor="white">
                Biswajit
              </LineShadowText>
            </h1>
          </Link>
        </motion.div>

        <div className="flex items-center gap-6">
          <motion.div
            className="lg:flex gap-2 hidden"
            variants={iconParentVariants}
          >
            <motion.a
              variants={navIconVariants}
              className="group relative flex aspect-square items-center justify-center rounded-full text-gray-300 dark:bg-[#0d1528] p-2.5 transition-all duration-300 hover:text-sky-400 hover:-translate-y-0.5"
              href="https://github.com/bisu2580"
              target="_blank"
            >
              <Github />
              <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              variants={navIconVariants}
              className="group relative flex aspect-square items-center justify-center rounded-full text-gray-300 dark:bg-[#0d1528] p-2.5 transition-all duration-300 hover:text-sky-400 hover:-translate-y-0.5"
              href="https://www.linkedin.com/in/biswajit-sahoo3"
              target="_blank"
            >
              <Linkedin />
              <span className="absolute inset-x-0 w-full mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          </motion.div>

          <motion.div
            variants={navItemVariants}
            className="flex items-center gap-4"
            onClick={(e) => ScrollHandler(e, "contact")}
          >
            <RainbowButton
              variant="outline"
              className="rounded-lg text-xs lg:text-sm"
            >
              <PhoneCall />
              Connect with Me
            </RainbowButton>
          </motion.div>
        </div>
      </motion.nav>
    </header>
  );
}
