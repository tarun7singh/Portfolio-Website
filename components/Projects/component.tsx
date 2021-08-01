import { Section } from "components";
import { useTranslation } from "next-i18next";
import React, { FC } from "react";

export const Projects: FC = () => {
  const { t } = useTranslation("common");

  return (
    <Section
      className="md:mt-20 mt-14"
      title={t("projects.title")}
      description={t("projects.description")}
    ></Section>
  );
};
