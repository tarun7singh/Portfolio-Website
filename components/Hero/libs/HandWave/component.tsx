"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import React, { FC, useEffect, useState } from "react";

import { Props } from "./props";

export const HandWave: FC<Props> = ({ className }: Props) => {
  const [toRotated, setToRotated] = useState(false);

  useEffect(() => {
    const baseDelay = 200;

    const timers = new Array(4)
      .fill(0)
      .map((_, i) =>
        setTimeout(() => setToRotated(i % 2 === 0), baseDelay + i * 200),
      );

    return () => timers.forEach((id) => clearTimeout(id));
  }, []);

  const handleClick = () => {
    setToRotated((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <motion.button
      type="button"
      className={clsx("block ml-3", className)}
      aria-label="Wave emoji animation"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      variants={{
        initial: {
          rotate: 0,
        },
        rotated: {
          rotate: 40,
        },
      }}
      transition={{
        type: "spring",
        damping: 4,
        mass: 0.3,
      }}
      initial="initial"
      animate={toRotated ? "rotated" : "initial"}
    >
      👋
    </motion.button>
  );
};
