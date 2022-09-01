module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    loader: "akamai",
    path: "",
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|png|css|mp3)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=9999999999, must-revalidate",
          },
        ],
      },
    ];
  },
};
