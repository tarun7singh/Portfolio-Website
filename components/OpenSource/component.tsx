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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // fetch contributions from link and store json in contributions
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://data.tarunsingh.dev/portfolio-assets/tarun-pull-requests.json"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setContributions(data);
        setHasError(false);
      })
      .catch((error) => {
        console.warn("Failed to load contributions data:", error);
        // Set empty contributions to prevent UI errors
        setContributions({});
        setHasError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
          {isLoading ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">Loading contributions...</p>
            </div>
          ) : hasError ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">
                Contributions data temporarily unavailable. Please check back later.
              </p>
            </div>
          ) : Object.keys(contributions).length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 dark:text-gray-400">No contributions data available.</p>
            </div>
          ) : (
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
          )}
        </div>
      </Container>
    </Section>
  );
};
