"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { PinContainer } from "./ui/3d-pin";

type ProjectCardProps = {
  image: string;
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

          {/* Tech Icons */}
          <div className="flex gap-3 text-xl text-gray-300 mt-3">
            <p className="text-sm text-gray-200 font-sans">Tech Stack :</p>
            {techIcons.map((icon, idx) => (
              <span
                key={idx}
                className="hover:text-[#00f6ff] transition-colors duration-300"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </PinContainer>
  );
};

export default ProjectCard;
