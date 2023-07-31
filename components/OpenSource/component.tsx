import { Container, Section } from "components";
import { useAnimation } from "framer-motion";
import React, { FC, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import { Repo } from "./libs/Repo";
import { IContributions } from "./libs/Repo/props";

export const OpenSource: FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [contributions, setContributions] = useState<IContributions>({});

  // fetch contributions from link and store json in contributions
  useEffect(() => {
    fetch(
      "https://data.tarunsingh.dev/portfolio-assets/tarun-pull-requests.json"
    )
      .then((response) => response.json())
      .then((data) => setContributions(data));
  }, []);

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
      title={"Open Source Contributions"}
      description={
        "Here are some of my open source contributions that auto update."
      }
    >
      <Container className="mt-8">
        <div className="flex-column" ref={ref}>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(contributions).map((repoName, i) => {
              const repositoryContributions = contributions[repoName];
              return (
                <Repo
                  key={i}
                  repositoryName={repoName}
                  repositoryContributions={repositoryContributions}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
