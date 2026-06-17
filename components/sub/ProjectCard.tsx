import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link?: string;
  tech?: string;
}

const ProjectCard = ({ src, title, description, link, tech }: Props) => {
  const card = (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-colors duration-300">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        {tech && (
          <p className="mt-1 text-sm text-purple-400 font-medium">{tech}</p>
        )}
        <p className="mt-2 text-gray-300">{description}</p>
        {link && (
          <span className="inline-block mt-3 text-sm text-cyan-400 hover:text-cyan-300 underline">
            View Source →
          </span>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {card}
      </a>
    );
  }

  return card;
};

export default ProjectCard;
