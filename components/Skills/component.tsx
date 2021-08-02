/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC, useEffect } from "react";
import { FaReact } from "react-icons/fa";
import { SiMysql, SiNodeDotJs } from "react-icons/si";
import { useInView } from "react-intersection-observer";

import {
  ActionsIcon,
  GCloudIcon,
  GoIcon,
  MongoDBIcon,
  TsIcon,
} from "./libs/Icons";
import { Skill } from "./libs/Skill";

const skills = [
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org",
    icon: <TsIcon />,
    main: true,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: <SiNodeDotJs color="#539E43" />,
    main: true,
  },
  {
    name: "React",
    href: "https://reactjs.org",
    icon: <FaReact color="#00D8FF" />,
    main: true,
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com",
    icon: <SiMysql />,
    main: true,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com",
    icon: <MongoDBIcon />,
    main: true,
  },
  {
    name: "Google Cloud",
    href: "https://cloud.google.com",
    icon: <GCloudIcon />,
    main: true,
  },
  {
    name: "Github Actions",
    href: "https://github.com/features/actions",
    icon: <ActionsIcon />,
    main: false,
  },
  {
    name: "Golang",
    href: "https://golang.org",
    icon: <GoIcon />,
    main: true,
  },
  // {
  //   name: "Git",
  //   href: "https://git-scm.com",
  //   icon: <GitIcon />,
  //   main: false,
  // },
  // {
  //   name: "Linux",
  //   href: "https://www.linuxfoundation.org",
  //   icon: <FaLinux />,
  //   main: false,
  // },
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
          className="max-w-md mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6"
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
