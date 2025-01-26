// Optional: add the reset to get more consistent styles across browsers
import "@tamagui/core/reset.css";

import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { useMemo } from "react";
import { TamaguiProvider, YStack } from "tamagui";

// import the config you just exported from the tamagui.config.ts file
import { appConfig } from "../tamagui.config";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();

  return (
    <>
      <Head>
        <title>Gatherloop Cafe & Community</title>
        <meta name="description" content="Your page description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme as any} forcedTheme="dark">
        <TamaguiProvider
          config={appConfig}
          disableInjectCSS
          disableRootThemeClass
          defaultTheme={theme}
        >
          <YStack theme="blue">
            <Component {...pageProps} />
          </YStack>
        </TamaguiProvider>
      </NextThemeProvider>
    </>
  );
}
