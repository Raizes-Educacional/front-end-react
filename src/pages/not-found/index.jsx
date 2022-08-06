import { React } from "react";

// Imgs
import RaizesLogo from "../../assets/logotipo.png";
// css
import { Container, LogoRaizes, FlexContainer } from "./styled.js";

export default function notFound() {
  return (
    <Container>
      <FlexContainer>
        <LogoRaizes src={RaizesLogo} alt="Raizes" />
        <h1>404</h1>
        <h3>PAGE NOT FOUND</h3>
      </FlexContainer>
    </Container>
  );
}
