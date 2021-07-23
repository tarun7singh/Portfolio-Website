import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiGraphql, SiNodeDotJs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

import { GoIcon, TsIcon } from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: <SiNodeDotJs color="#539E43" />,
  },
  {
    name: "TypeScript",
    href: "https://typescriptlang.org",
    icon: <TsIcon />,
  },
  {
    name: "React",
    href: "https://reactjs.org",
    icon: <FaReact color="#00D8FF" />,
  },
  {
    name: "Golang",
    href: "https://golang.org",
    icon: <GoIcon />,
  },
  {
    name: "GraphQL",
    href: "https://graphql.org",
    icon: <SiGraphql color="#E535AB" />,
  },
];

export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { t } = useTranslation("common");

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        transition: { delay: (i + 2) * 0.2 },
      }));
    }
  }, [controls, inView]);

  return (
    <Section
      className="mt-20 mb-16 md:mt-28"
      title={t("skills.title")}
      description={t("skills.description")}
    >
      <Container>
        <div
          className="max-w-md mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6"
          ref={ref}
        >
          {skills.map((skill, i) => (
            <Skill {...skill} key={i} custom={i} controls={controls} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
