import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* <meta
        httpEquiv="Content-Security-Policy"
        content="script-src 'self' https://js.stripe.com/v3 'unsafe-inline' 'unsafe-eval'"
      /> */}
      <body className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-rounded-2xl scrollbar-thumb-dark-gray hover:scrollbar-thumb-light-gray">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
