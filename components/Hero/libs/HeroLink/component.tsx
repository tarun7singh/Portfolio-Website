import { FC } from "react";

import { Props } from "./props";

export const HeroLink: FC<Props> = ({ title, href }: Props) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-blue-700 underline decoration-blue-700/60 underline-offset-4 hover:decoration-blue-700 transition-colors"
    >
      @{title}
    </a>
  );
};
