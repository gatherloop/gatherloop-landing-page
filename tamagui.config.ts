import { createTamagui } from "tamagui";
import { config } from "@tamagui/config-base";
import { createInterFont } from "@tamagui/font-inter";

const interFont = createInterFont();

export const appConfig = createTamagui({
  ...config,
  fonts: { ...config.fonts, body: interFont, heading: interFont },
  themes: {
    ...config.themes,
    light: {
      ...config.themes.light,
      accent: config.tokens.color.gray1Light,
      background: config.tokens.color.gray3Light,
      skeleton: config.tokens.color.gray8Light,
    },
    dark: {
      ...config.themes.dark,
      accent: config.tokens.color.gray7Dark,
      background: config.tokens.color.gray8Dark,
      skeleton: config.tokens.color.gray10Light,
    },
  },
});

export type AppConfig = typeof appConfig;

export default appConfig;
