const siteUrl = "https://tarunsingh.dev";

const seo = {
  title: "Tarun Singh | Senior Software Engineer | AI and Full Stack",
  description:
    "Tarun Singh is a Senior Software Engineer building production AI systems and full-stack products with TypeScript, React, Node.js, Laravel, and AWS Bedrock.",
  canonical: siteUrl,
  additionalMetaTags: [
    {
      name: "author",
      content: "Tarun Singh",
    },
    {
      name: "robots",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
    {
      name: "googlebot",
      content:
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "me",
      href: "https://www.linkedin.com/in/tarun7singh/",
    },
    {
      rel: "me",
      href: "https://github.com/tarun7singh",
    },
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Tarun Singh | Senior Software Engineer",
    description:
      "Production AI systems and full-stack products built with TypeScript, React, Node.js, Laravel, and AWS Bedrock.",
    locale: "en",
    images: [
      {
        url: `${siteUrl}/og.png`,
        width: 800,
        height: 600,
        alt: "Tarun Singh, Senior Software Engineer",
      },
    ],
    site_name: "Tarun Singh",
  },
  twitter: {
    handle: "@tarun7singh",
    site: "@tarun7singh",
    cardType: "summary_large_image",
  },
};

export default seo;
