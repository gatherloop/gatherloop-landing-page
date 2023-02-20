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
        source: "/location",
        destination: "https://goo.gl/maps/8cR4VM6ZS7XWDPXZ8",
        permanent: false,
      },
    ];
  },
};

module.exports = withTamagui(nextConfig);
