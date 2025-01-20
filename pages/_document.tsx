import NextDocument, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

// import the config you just exported from the tamagui.config.ts file
import { appConfig } from "../tamagui.config";

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }: DocumentContext) {
    const page = await renderPage();

    return {
      ...page,
      styles: (
        <>
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
