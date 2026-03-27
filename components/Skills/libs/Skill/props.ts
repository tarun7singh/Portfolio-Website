import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLAnchorElement> & {
  name: string;
  icon: React.ReactElement;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controls: any;
  custom: number;
};
