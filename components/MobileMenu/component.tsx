"use client";

import clsx from "clsx";
import { Container } from "components";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Open Source", href: "/#open-source" },
  { label: "Contact", href: "/#contact" },
];

export const MobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="md:hidden flex items-center justify-center w-12 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
        aria-expanded={isOpen}
      >
        <FaBars className="w-6 h-6 text-black-900 dark:text-white-900" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-64 bg-lightTheme dark:bg-darkTheme z-50 shadow-xl md:hidden"
            >
              <Container className="flex flex-col h-full pt-4">
                <div className="flex justify-end">
                  <button
                    className="flex items-center justify-center w-12 h-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-700"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <FaTimes className="w-6 h-6 text-black-900 dark:text-white-900" />
                  </button>
                </div>
                <nav className="flex-1 mt-8">
                  <ul className="space-y-4">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={handleLinkClick}
                          className={clsx(
                            "block py-2 px-4 text-lg rounded-md transition-colors",
                            "text-black-900 dark:text-white-900",
                            "hover:bg-pink dark:hover:bg-gray-900",
                            "focus:outline-none focus:ring-2 focus:ring-blue-700",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Container>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
