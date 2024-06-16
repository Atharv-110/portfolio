"use client";
import Image from "next/image";
import { ProjectModal } from "./Export";

import { useDisclosure } from "@nextui-org/react";

const ProjectCard = (props) => {
  const {
    name,
    description,
    duration,
    banner,
    icon,
    features,
    techStack,
    deployment,
    repository,
  } = props.item;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <ProjectModal
        name={name}
        description={description}
        icon={icon}
        techStack={techStack}
        banner={banner}
        isOpen={isOpen}
        repository={repository}
        deployment={deployment}
        features={features}
        onOpenChange={onOpenChange}
      />
      <div
        onClick={onOpen}
        className="w-full flex justify-between mb-4 items-center px-2 py-4 gap-x-2 rounded-xl cursor-pointer hover:scale-105 ease-in-out duration-300 project-card"
      >
        <div className="w-[50px] md:w-[70px] bg-theme-white p-2 flex justify-center items-center rounded-full">
          <Image
            src={icon}
            width={70}
            height={70}
            alt="project icon"
            className="w-full"
            unoptimized
          />
        </div>
        <div className="w-[calc(100%-50px)] md:w-[calc(100%-70px)]">
          <div className="flex md:gap-2 items-baseline mb-1">
            <h3 className="text-lg md:text-xl font-semibold">{name}</h3>
            <p className="hidden md:block text-sm">[{duration}]</p>
          </div>
          <p className="text-xs md:text-sm tracking-normal line-clamp-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
