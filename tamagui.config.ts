import { createTamagui } from "tamagui";
import { config } from "@tamagui/config/v3";

export const appConfig = createTamagui({
  ...config,
  fonts: {
    ...config.fonts,
    heading: {
      ...config.fonts.heading,
      family: "Lato, Helvetica, Arial, sans-serif",
    },
    body: {
      ...config.fonts.body,
      family: "Lato, Helvetica, Arial, sans-serif",
    },
  },
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      accent: config.tokens.color.gray1Light,
      background: config.tokens.color.gray3Light,
    },
    dark: {
      ...config.themes.dark,
      accent: config.tokens.color.gray3Dark,
      background: config.tokens.color.gray1Dark,
    },
  },
});

export type AppConfig = typeof appConfig;

export default appConfig;
