import { motion } from "framer-motion";
import Image from "next/image";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";

import { Props } from "./props";

export const ProjectCard: FC<Props> = ({
  id,
  title,
  subtitle,
  description,
  externalLink,
  githubLink,
  technologies,
  imageLink,
  rightShift,
}) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row ${
        rightShift ? "md:flex-row-reverse" : ""
      } items-center gap-8 mb-16`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
    >
      <div className="w-full md:w-1/2">
        <a
          href={externalLink}
          target="_blank"
          rel="noreferrer"
          className="block relative overflow-hidden rounded-lg group"
          aria-label={`View ${title} project`}
        >
          <Image
            src={imageLink}
            alt={`${title} project screenshot`}
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <IoOpenOutline
              className="w-12 h-12 text-white"
              aria-hidden="true"
            />
          </div>
        </a>
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-xl md:text-2xl font-bold text-black-900 dark:text-white-900 mb-2">
          {title}
        </h3>
        <p className="text-sm md:text-base text-blue-700 dark:text-blue-400 mb-4">
          {subtitle}
        </p>
        <p className="text-base md:text-lg text-black-700 dark:text-white-700 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-black-700 dark:text-white-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={externalLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-blue-700 hover:underline"
            aria-label={`Open ${title} project`}
          >
            <IoOpenOutline className="w-5 h-5" aria-hidden="true" />
            <span>Live Demo</span>
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-black-900 dark:text-white-900 hover:underline"
            aria-label={`View ${title} source code on GitHub`}
          >
            <FaGithub className="w-5 h-5" aria-hidden="true" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
