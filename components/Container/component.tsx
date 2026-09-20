import clsx from "clsx";
import { FC } from "react";

import { Props } from "./props";

export const Container: FC<Props> = ({ className, children }: Props) => {
  return (
    <div className={clsx("px-6 sm:px-8 mx-auto max-w-screen-md", className)}>
      {children}
    </div>
  );
};
