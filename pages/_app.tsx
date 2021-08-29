import { AppProps } from "next/app";
import Head from "next/head";
import styled from "@emotion/styled";
import { Header } from "../src/components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Permzwitter</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/drum_1f941.png"
        />
      </Head>
      <Container>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MyApp;
