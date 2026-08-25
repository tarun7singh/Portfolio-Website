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

const siteUrl = "https://tarunsingh.dev";

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
          {"Tarun Singh | Senior Software Engineer | AI and Full Stack"}
        </title>
        <meta
          name="description"
          content="Tarun Singh is a Senior Software Engineer building production AI systems and full-stack products with TypeScript, React, Node.js, Laravel, and AWS Bedrock."
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="author" content="Tarun Singh" />
        <meta name="robots" content="index,follow" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="Tarun Singh" />
        <meta
          property="og:title"
          content="Tarun Singh | Senior Software Engineer"
        />
        <meta
          property="og:description"
          content="Production AI systems and full-stack products built with TypeScript, React, Node.js, Laravel, and AWS Bedrock."
        />
        <meta property="og:image" content={`${siteUrl}/og.png`} />
        <meta
          property="og:image:alt"
          content="Tarun Singh, Senior Software Engineer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tarun7singh" />
        <meta name="twitter:creator" content="@tarun7singh" />
        <meta
          name="twitter:title"
          content="Tarun Singh | Senior Software Engineer"
        />
        <meta
          name="twitter:description"
          content="Production AI systems and full-stack products built with TypeScript, React, Node.js, Laravel, and AWS Bedrock."
        />
        <meta name="twitter:image" content={`${siteUrl}/og.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              name: "Tarun Singh | Senior Software Engineer",
              url: siteUrl,
              mainEntity: {
                "@type": "Person",
                name: "Tarun Singh",
                url: siteUrl,
                image: `${siteUrl}/images/me.webp`,
                jobTitle: "Senior Software Engineer",
                description:
                  "Senior Software Engineer building production AI systems and full-stack products.",
                sameAs: [
                  "https://github.com/tarun7singh",
                  "https://www.linkedin.com/in/tarun7singh/",
                  "https://twitter.com/tarun7singh",
                ],
                knowsAbout: [
                  "Artificial intelligence",
                  "Agentic AI",
                  "AWS Bedrock",
                  "LangChain",
                  "Model Context Protocol",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "PHP",
                  "Laravel",
                ],
              },
            }),
          }}
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
