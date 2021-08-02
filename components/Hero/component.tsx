import { Container, MediaIcon } from "components";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";
import { FaFilePdf, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import { HandWave } from "./libs/HandWave";
import { HeroLink } from "./libs/HeroLink";

export const Hero: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Container className="pt-24 md:pt-32">
      <motion.img
        src="/images/me.png"
        alt="me"
        className="w-40 h-40 border border-gray-700 rounded-full mt-28 md:w-34 md:h-34"
        variants={{
          hidden: {
            scale: 0,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
          },
        }}
        transition={{
          damping: 5,
          mass: 1,
          delay: 0.2,
        }}
        initial="hidden"
        animate="visible"
      />
      <div className="flex">
        <h1 className="flex-grow mt-6 mb-6 text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900">
          {t("hero.title")}
          <HandWave className="text-4xl md:text-5xl wave" />
        </h1>
        <h1 className="text-2xl font-bold md:mt-8 md:mb-8 md:text-2xl text-black-900 dark:text-white-900 align-right">
          {t("hero.location")}
        </h1>
      </div>
      <p className="text-xl font-bold tracking-normal md:text-3xl text-black-700 dark:text-white-700">
        {t("hero.p0")}
        <br />
        {t("hero.p1")}{" "}
        <HeroLink title="Kisan Network" href="https://kisannetwork.com" />
        <br />
        {t("hero.p2")}{" "}
        <HeroLink title="Dockendale" href="https://www.dockendale.com" />
      </p>
      <div className="flex mt-8">
        <MediaIcon
          icon={<FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://www.linkedin.com/in/tarun7singh/"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaGithub className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://github.com/tarun7singh"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaTwitter className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://twitter.com/tarun7singh"
          className="mr-4"
        />
        <MediaIcon
          icon={<FaFilePdf className="w-6 h-6 md:w-7 md:h-7" />}
          href="https://tarunsingh.dev/resume/Resume.pdf"
        />
      </div>
      <div className="mt-10">
        <p className="mb-2 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des0")}
        </p>
        <p className="mb-2 text-base md:text-xl dark:text-white-700 text-black-700">
          {t("hero.des1")}
        </p>
      </div>
    </Container>
  );
};
