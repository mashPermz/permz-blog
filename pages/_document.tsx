import Documents, { Html, Head, Main, NextScript } from "next/document";

export default class extends Documents {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
