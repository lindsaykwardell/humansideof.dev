interface Language {
  label: string;
  episodes: {
    name: string;
    url: string;
  }[];
}

const favorites: { [key: string]: Language } = {
  lua: {
    label: "Lua",
    episodes: [
      {
        name: "Luiz Oliveira",
        url: "https://humansideof.dev/episode/1---supporting-junior-devs-and-social-media-with-luiz-oliveira",
      },
    ],
  },
  css: {
    label: "CSS",
    episodes: [
      {
        name: "Alex Anderson",
        url: "https://humansideof.dev/episode/2---technical-evaluation-and-space-simulators-with-alex-anderson",
      },
    ],
  },
  ts: {
    label: "TypeScript",
    episodes: [
      {
        name: "Star Richardson",
        url: "https://humansideof.dev/episode/3---learning-to-learn-and-code-with-star-richardson",
      },
      {
        name: "Daniel Roe",
        url: "https://humansideof.dev/episode/4---exploring-open-source-with-daniel-roe",
      },
    ],
  },
  js: {
    label: "JavaScript",
    episodes: [
      {
        name: "Rho Oof",
        url: "https://humansideof.dev/episode/6---exploring-edge-cases-with-rho-oof",
      },
    ],
  },
  html: {
    label: "HTML",
    episodes: [
      {
        name: "Ben Myers",
        url: "https://humansideof.dev/episode/5---documentation-and-accessibility-with-ben-myers",
      },
    ],
  },
  swift: {
    label: "Swift",
    episodes: [
      {
        name: "Eddie Freeman",
        url: "https://humansideof.dev/episode/7---learning-by-teaching-with-eddie-freeman",
      },
    ],
  },
};

export default favorites;
