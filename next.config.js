// @ts-check

const { withTamagui: createWithTamagui } = require("@tamagui/next-plugin");

process.env.TAMAGUI_TARGET = "web";

const withTamagui = createWithTamagui({
  config: "./tamagui.config.ts",
  components: ["tamagui"],
  useReactNativeWebLite: true,
  disableExtraction: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "react-native-svg": "react-native-svg-web",
        "react-native": "react-native-web",
      },
    };
    return config;
  },
  redirects: async () => {
    return [
      {
        source: "/schedule",
        destination:
          "https://calendar.google.com/calendar/embed?src=3a6c47cd8bd16c15796054cbcf8b90a9c46c4cf2bc4ebe03d17009c44faf5ba7%40group.calendar.google.com&ctz=Asia%2FJakarta",
        permanent: false,
      },
      {
        source: "/join",
        destination: "https://chat.whatsapp.com/Fhd16OBC7HtEMSdPUmJR9k",
        permanent: false,
      },
      {
        source: "/join-frontend",
        destination: "https://chat.whatsapp.com/CagRjk8iOAqB8xDyeWtWEd",
        permanent: false,
      },
      {
        source: "/join-backend",
        destination: "https://chat.whatsapp.com/IUogZB2obKS7FeaWJhT5br",
        permanent: false,
      },
      {
        source: "/join-android",
        destination: "https://chat.whatsapp.com/J5roSLbzKQj7uGTLXizKTi",
        permanent: false,
      },
      {
        source: "/join-board-game",
        destination: "https://chat.whatsapp.com/GEDOIx9zFxKKWfzQ42PV1d",
        permanent: false,
      },
      {
        source: "/join-sport",
        destination: "https://chat.whatsapp.com/IhYSnjwwpmwEfZLWn2pEO3",
        permanent: false,
      },
      {
        source: "/join-book",
        destination: "https://chat.whatsapp.com/FmuPjeuWGPp0qjjHxwV3fa",
        permanent: false,
      },
      {
        source: "/join-business",
        destination: "https://chat.whatsapp.com/JE4rcgQFqMd08f9ztLVVYr",
        permanent: false,
      },
      {
        source: "/join-basic-programming",
        destination: "https://chat.whatsapp.com/KGUb7sFokxuLVHl1ndNKiW",
        permanent: false,
      },
      {
        source: "/join-english",
        destination: "https://chat.whatsapp.com/I77oI5Jo6qb5RSdEVO5u2c",
        permanent: false,
      },
      {
        source: "/location",
        destination: "https://goo.gl/maps/8cR4VM6ZS7XWDPXZ8",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/gatherloop",
        permanent: false,
      },
      {
        source: "/linktree",
        destination: "https://linktr.ee/gatherloop",
        permanent: false,
      },
      {
        source: "/menu",
        destination:
          "https://drive.google.com/drive/folders/1NwmPmpQ3mFnoadcOFqgqRzLfDXPgrajZ",
        permanent: false,
      },
    ];
  },
};

module.exports = withTamagui(nextConfig);
