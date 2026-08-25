import { Container, Section } from "components";
import { motion } from "framer-motion";
import React, { FC } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const supportingProjects = [
  {
    title: "Monitoring and Scraping API",
    subtitle: "Personal monitoring and scraping service",
    description:
      "A backend service for monitoring websites and running scheduled scraping jobs with a focus on dependable, repeatable automation.",
    technologies: "Node.js · TypeScript · REST API",
    href: "https://github.com/tarun7singh/website-api",
    icon: <FaGithub aria-hidden="true" />,
  },
  {
    title: "Visa Appointment Checker",
    subtitle: "Appointment availability tracker",
    description:
      "An automation tool that checks appointment availability and helps reduce the manual effort involved in finding an open slot.",
    technologies: "JavaScript · Automation",
    href: "https://github.com/tarun7singh/visa-appointment-checker",
    icon: <FaGithub aria-hidden="true" />,
  },
];

const cardClassName =
  "group rounded-xl border border-gray-700 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-900 dark:border-white-300 dark:bg-gray-900";

export const Projects: FC = () => {
  return (
    <Section
      className="md:mt-20 mt-14"
      title={"Projects"}
      description={"Selected products and experiments I have built or helped ship."}
    >
      <Container className="mt-8">
        <div className="grid gap-5 md:grid-cols-2">
          <motion.div
            className="relative overflow-hidden rounded-xl border border-blue-900 bg-blue-900 p-6 text-white-900 md:col-span-2 md:p-8"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute -right-16 -top-20 h-48 w-48 rounded-full border border-white-900 opacity-10" />
            <div className="absolute -bottom-24 right-20 h-56 w-56 rounded-full border border-white-900 opacity-10" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white-700">
                  Featured project · 01
                </p>
                <h3 className="text-3xl font-bold md:text-4xl">Coach Bo</h3>
                <p className="mt-2 text-lg font-medium text-white-700">
                  Production agentic AI coaching assistant
                </p>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white-700 md:text-lg">
                  A multi-turn AI system combining AWS Bedrock, LangChain, and
                  MCP tools to deliver grounded coaching conversations with
                  identity and hallucination safeguards.
                </p>
              </div>
              <div className="md:min-w-52">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.15em] text-white-500">
                  Built with
                </p>
                <div className="flex flex-wrap gap-2">
                  {["AWS Bedrock", "LangChain", "MCP", "TypeScript"].map(
                    (technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white-700 px-3 py-1 text-sm text-white-700"
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>
                <a
                  href="https://www.criteriacorp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white-900 underline decoration-white-500 underline-offset-4 transition-opacity hover:opacity-70"
                >
                  About Criteria Corp <FaArrowUpRightFromSquare aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>

          {supportingProjects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className={cardClassName}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-black-700 dark:text-white-500">
                  {`0${index + 2}`} / Personal project
                </p>
                <span className="text-black-700 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white-700">
                  {project.icon}
                </span>
              </div>
              <h3 className="mt-8 text-xl font-bold text-black-900 dark:text-white-900">
                {project.title}
              </h3>
              <p className="mt-2 text-base font-medium text-black-700 dark:text-white-700">
                {project.subtitle}
              </p>
              <p className="mt-4 text-base leading-7 text-black-700 dark:text-white-700">
                {project.description}
              </p>
              <p className="mt-6 text-sm font-medium text-black-700 dark:text-white-500">
                {project.technologies}
              </p>
            </motion.a>
          ))}
        </div>
      </Container>
    </Section>
  );
};
