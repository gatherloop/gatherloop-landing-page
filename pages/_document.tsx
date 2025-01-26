import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { appConfig } from "../tamagui.config";
import { AppRegistry } from "react-native";

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: DocumentContext) {
    AppRegistry.registerComponent("Main", () => Main);

    const page = await renderPage();

    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication("Main");

    return {
      ...page,
      styles: (
        <>
          {getStyleElement()}
          <style
            dangerouslySetInnerHTML={{
              __html: appConfig.getCSS(),
            }}
          />
        </>
      ),
    };
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta id="theme-color" name="theme-color" />
          <meta name="color-scheme" content="light dark" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
