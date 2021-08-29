import { GetStaticProps } from "next";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <Container>
      <H2>Home</H2>
      <img
        src="https://permz-next-blog.s3.ap-northeast-1.amazonaws.com/super_cat.jpeg"
        alt="ねこ"
      />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async ({ props }: any) => {
  console.log(`building ${props}`);
  return {
    props: {},
  };
};

const Container = styled.div`
  max-width: 60rem;
`;

const H2 = styled.h2`
  text-decoration: underline;
  text-align: center;
`;
