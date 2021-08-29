import { IoMdSunny } from "react-icons/io";
import styled from "@emotion/styled";

export function Header({ props }: any) {
  return (
    <Container>
      <header>Permzwitter</header>
      <IoMdSunny size={28} />
    </Container>
  );
}

const Container = styled.div`
  align-items: center;
  display: flex;
  align-self: stretch;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
