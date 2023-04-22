const { withTamagui: createWithTamagui } = require("@tamagui/next-plugin");

process.env.TAMAGUI_TARGET = "web";

const withTamagui = createWithTamagui({
  config: "./tamagui.config.ts",
  components: ["tamagui"],
  useReactNativeWebLite: true,
  disableExtraction: process.env.NODE_ENV === "development",
  excludeReactNativeWebExports: ["Switch", "ProgressBar", "Picker"],
});

const nextConfig = {
  redirects: async () => {
    return [
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
        source: "/join-nugas-bareng",
        destination: "https://chat.whatsapp.com/BZJ8yfA9hTQDdTVkk1D8aS",
        permanent: false,
      },
      {
        source: "/form-nugas-bareng",
        destination: "https://forms.gle/7Df8igJt7RdszbMe9",
        permanent: false,
      },
      {
        source: "/form-private-mentoring",
        destination: "https://forms.gle/Z11WnHmvzcE53RyX7",
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
    ];
  },
};

module.exports = withTamagui(nextConfig);
