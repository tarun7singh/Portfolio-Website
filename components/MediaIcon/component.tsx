import clsx from "clsx";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { Props } from "./props";

export const MediaIcon: FC<Props> = ({
  icon,
  href,
  className,
  ariaLabel,
}: Props) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover="hover"
      initial="initial"
      className={clsx("relative", className)}
      aria-label={ariaLabel}
    >
      <motion.div
        variants={{
          initial: {
            rotate: 0,
            scale: 1,
          },
          hover: {
            rotate: 0,
            scale: 1.4,
          },
        }}
        className="text-black-900 dark:text-white-900"
      >
        {icon}
      </motion.div>
    </motion.a>
  );
};
