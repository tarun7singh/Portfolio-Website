import { Section } from "components";
import projectsData from "data/projects.json";
import React, { FC } from "react";

import { ProjectCard } from "../ProjectCard";

export const Projects: FC = () => {
  return (
    <Section
      className="md:mt-20 mt-14"
      title="Projects"
      description="Here are some of my personal projects that I've built to solve real problems and explore new technologies."
    >
      <div className="mt-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};
