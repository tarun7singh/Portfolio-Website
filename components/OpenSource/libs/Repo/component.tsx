import clsx from "clsx";
import React, { FC, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoGitMerge } from "react-icons/go";

import { Props } from "./props";
const SHOW_MINIMUM_CONTRIBUTIONS = 2;
export const Repo: FC<Props> = ({
  repositoryName,
  repositoryContributions,
  className,
}: Props) => {
  const [visibleContributions, setVisibleContributions] = useState(
    repositoryContributions.slice(0, SHOW_MINIMUM_CONTRIBUTIONS)
  );

  const toggleAllContributions = () => {
    if (visibleContributions.length > SHOW_MINIMUM_CONTRIBUTIONS) {
      setVisibleContributions(
        repositoryContributions.slice(0, SHOW_MINIMUM_CONTRIBUTIONS)
      );
    } else {
      setVisibleContributions(repositoryContributions);
    }
  };

  return (
    <div className={clsx(className && className, "flex mt-4 mb-4")}>
      <FaGithub className="md:w-7 md:h-7" />
      <div className="ml-4">
        <a href={repositoryContributions[0].repository_url} target="__blank__">
          <span className="text-lg font-medium text-blue-700 capitalize">
            {repositoryName}
          </span>
        </a>
        <div>
          {visibleContributions.map((contribution, i) => {
            return (
              <div className="flex mt-2 align-center" key={i}>
                <GoGitMerge
                  className="mr-2 md:w-4 md:h-6"
                  style={{ color: "#9054F5" }}
                />
                <a href={contribution.url} target="__blank__" className="">
                  <span className="text-base capitalize border-b-2 border-dotted">
                    {contribution.title}
                  </span>
                </a>
              </div>
            );
          })}
        </div>
        {/* if repositorycontribution is more than 3 show more button and make it clickable */}
        {repositoryContributions.length > SHOW_MINIMUM_CONTRIBUTIONS && (
          <div className="flex mt-2 align-center">
            <button
              className="text-xs capitalize border-b-2 border-dotted"
              onClick={toggleAllContributions}
            >
              {visibleContributions.length > SHOW_MINIMUM_CONTRIBUTIONS
                ? "Show Less"
                : "Show More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
