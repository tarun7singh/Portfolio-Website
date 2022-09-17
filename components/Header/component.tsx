import clsx from "clsx";
import { Container } from "components";
import Link from "next/link";
import { useTheme } from "next-themes";
import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import useSound from "use-sound";

import { useHeaderVisible } from "./libs/useHeaderVisible";

enum Themes {
  light = "light",
  dark = "dark",
}

export const Header: FC = () => {
  const [playOnDark] = useSound("/sounds/dark-on.mp3");
  const [playOnLight] = useSound("/sounds/light-on.mp3");
  const visible = useHeaderVisible();
  const ref = useRef<HTMLDivElement>(null);

  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    if (theme === Themes.light) {
      playOnLight();
    } else {
      playOnDark();
    }

    setTheme(theme === Themes.light ? Themes.dark : Themes.light);
  }, [setTheme, theme, playOnDark, playOnLight]);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={clsx(
        "fixed z-10 w-full opacity-90 bg-lightTheme dark:bg-darkTheme transition-top duration-300",
        visible ? "top-0" : "-top-28"
      )}
    >
      <Container className="flex items-center justify-between w-auto py-2 md:py-4 text-black-900 dark:text-white-900">
        <Link href="/" passHref>
          <h1
            style={{ fontFamily: "tangerine" }}
            className="text-4xl font-bold md:mt-8 md:mb-8 md:text-5xl text-black-900 dark:text-white-900"
          >
            Tarun Singh -
          </h1>
        </Link>
        <div className="flex items-center">
          <button
            className="items-center justify-center w-12 h-12 rounded-md dark:bg-gray-900 bg-pink focus:outline-none focus:ring-2 ring-blue-700 d-flex"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === Themes.light ? (
                <HiMoon className="inline w-6 h-6 ml-1" />
              ) : (
                <HiSun className="inline w-6 h-6" />
              )
            ) : null}
          </button>
          <div className="relative ml-2 md:ml-4" ref={ref}>
            <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center pointer-events-none"></span>
          </div>
        </div>
      </Container>
    </div>
  );
};
