"use client";

import {
  Contact,
  Experience,
  Footer,
  Header,
  Hero,
  OpenSource,
  Projects,
  Skills,
} from "components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [main, setMain] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMain(true), 500);
    return () => clearTimeout(id);
  }, []);

  return (
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          display: "none",
        },
        visible: {
          opacity: 1,
          display: "block",
        },
      }}
      initial="initial"
      animate={main ? "visible" : "initial"}
      transition={{
        duration: 1.0,
      }}
    >
      <Header />
      <Hero />
      <Skills />
      <OpenSource />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}
