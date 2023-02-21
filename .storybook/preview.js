import { TamaguiProvider, YStack } from "tamagui";
import { appConfig } from "../tamagui.config";
import { useDarkMode } from "storybook-dark-mode";
import { setConfig } from "next/config";

setConfig({ publicRuntimeConfig: {} });

export const decorators = [
  (Story) => {
    const theme = useDarkMode() ? "dark" : "light";
    return (
      <TamaguiProvider config={appConfig} defaultTheme={theme}>
        <YStack height="100vh" backgroundColor={"$background"}>
          {Story()}
        </YStack>
      </TamaguiProvider>
    );
  },
];

export const parameters = {
  layout: "fullscreen",
};
