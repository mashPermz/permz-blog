import { IconButton } from "theme-ui";
import { IoMdSunny } from "react-icons/io";
import { useToggleColorMode } from "../logic/styles";
import styled from "@emotion/styled";

export function Header() {
  const toggleColorMode = useToggleColorMode();

  return (
    <Container>
      <header>Permzwitter</header>
      <IconButton aria-label="Dark Mode" onClick={toggleColorMode}>
        <IoMdSunny size={28} />
      </IconButton>
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
