import NextDocument, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Children } from "react";
import { AppRegistry } from "react-native";

import { appConfig as Tamagui } from "../tamagui.config";

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: DocumentContext) {
    AppRegistry.registerComponent("Main", () => Main);
    const page = await renderPage();
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication("Main");
    const styles = [
      getStyleElement(),
      <style
        key="tamagui-css"
        dangerouslySetInnerHTML={{ __html: Tamagui.getCSS() }}
      />,
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Lato:400,500,600,700,800&display=optional"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
