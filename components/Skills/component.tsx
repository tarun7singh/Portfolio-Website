/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import React, { FC, useEffect } from "react";
import { FaAws, FaDocker, FaPhp, FaReact } from "react-icons/fa";
import {
  SiLangchain,
  SiReactquery,
  SiRedis,
  SiVite,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";

import {
  MySQLIcon,
  McpIcon,
  NodeJSIcon,
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
    name: "React",
    href: "https://react.dev",
    icon: <FaReact color="#00D8FF" />,
    main: true,
  },
  {
    name: "Node.js",
    href: "https://nodejs.org",
    icon: <NodeJSIcon />,
    main: true,
  },
  {
    name: "AWS Bedrock",
    href: "https://aws.amazon.com/bedrock/",
    icon: <FaAws color="#FF9900" />,
    main: true,
  },
  {
    name: "PHP / Laravel",
    href: "https://laravel.com",
    icon: <FaPhp color="#777BB4" />,
    main: true,
  },
  {
    name: "MCP / Agentic AI",
    href: "https://modelcontextprotocol.io",
    icon: <McpIcon />,
    main: true,
  },
  {
    name: "MySQL",
    href: "https://www.mysql.com",
    icon: <MySQLIcon />,
    main: true,
  },
  {
    name: "Docker",
    href: "https://www.docker.com",
    icon: <FaDocker color="#2496ED" />,
    main: true,
  },
  {
    name: "LangChain",
    href: "https://www.langchain.com",
    icon: <SiLangchain color="#1C3C3C" />,
    main: true,
  },
  {
    name: "TanStack Query",
    href: "https://tanstack.com/query",
    icon: <SiReactquery color="#FF4154" />,
    main: true,
  },
  {
    name: "Redis",
    href: "https://redis.io",
    icon: <SiRedis color="#DC382D" />,
    main: true,
  },
  {
    name: "Vite",
    href: "https://vite.dev",
    icon: <SiVite color="#646CFF" />,
    main: true,
  },
];
export const Skills: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

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
      title={"Skills"}
      description={
        "I am passionate about using cutting-edge technologies. These are the tools I am most familiar with and build things every day."
      }
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
