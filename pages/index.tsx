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
import Head from "next/head";
import React, { useEffect, useState } from "react";

const IndexPage = () => {
  const [main, setMain] = useState(false);

  useEffect(() => {
    const ids = [setTimeout(() => setMain(true), 500)];

    return () => ids.forEach((id) => clearTimeout(id));
  }, []);

  return (
    <>
      <Head>
        <title>
          {"Tarun Singh | Full Stack Developer | Typescript, NodeJS, ReactJS"}
        </title>
        <meta
          name="keywords"
          content="Tarun, Singh, Web developer, Full Stack web developer, Portfolio, Javascript, Typescript, NodeJS, ReactJS, MySQL, MongoDB, Golang, freelancer, toronto"
        />
      </Head>
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
    </>
  );
};

export default IndexPage;
