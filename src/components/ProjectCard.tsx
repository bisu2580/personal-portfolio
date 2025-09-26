"use client";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { PinContainer } from "./ui/3d-pin";
import { SquareArrowOutUpRight } from "lucide-react";

type ProjectCardProps = {
  image: string | StaticImageData;
  title: string;
  description: string;
  techIcons: React.ReactNode[];
  link: string;
};

const ProjectCard = ({
  image,
  title,
  description,
  techIcons,
  link,
}: ProjectCardProps) => {
  return (
    <PinContainer title="Live Website" href={link}>
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: "0 0 20px #00f6ff55" }}
        className="bg-[#0d0f1a] border border-[#1a1f2c] 
                 rounded-2xl shadow-lg transition-all duration-300 w-[20rem] h-[22rem]"
      >
        {/* Image */}
        <div className="relative w-full overflow-hidden h-[50%]">
          <Image
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-2">
          <h3 className="text-lg font-bold text-gray-100 font-montserrat">
            {title}
          </h3>
          <p className="text-sm text-gray-400 font-montserrat">{description}</p>

          {/* Tech Icons and link*/}
          <div className="flex gap-2 items-baseline justify-between">
            <div className="flex gap-3 md:text-xl text-gray-300 mt-3">
              <p className="text-xs md:text-sm text-gray-200 font-sans">
                Tech Stack :
              </p>
              {techIcons.map((icon, idx) => (
                <span
                  key={idx}
                  className="hover:text-[#00f6ff] transition-colors duration-300"
                >
                  {icon}
                </span>
              ))}
            </div>
            <a
              className="text-xs bg-gradient-to-b from-black via-gray-900 to-gray-800 rounded-full px-2 py-1 flex gap-2 md:hidden font-sans items-center"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Website
              <SquareArrowOutUpRight className="size-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </PinContainer>
  );
};

export default ProjectCard;
