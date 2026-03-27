import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLDivElement> & {
  title: string;
  place: string;
  date: string;
  custom: number;
  last?: boolean;
  first?: boolean;
  cancelled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls?: any;
};
