import { HTMLAttributes } from "react";

export interface IContributions {
  [key: string]: Array<IRepoContributions>;
}

export interface IRepoContributions {
  repository_url: string;
  repository_name: string;
  title: string;
  url: string;
  merged_at: Date;
}

export type Props = HTMLAttributes<HTMLDivElement> & {
  repositoryName: string;
  repositoryContributions: IRepoContributions[];
};
