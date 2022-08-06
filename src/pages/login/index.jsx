import React from "react";

import Button from "../../components/button/index.jsx";
import { Container, ContainerFlex, Form, InputFormLogin } from "./styles.js";

export default function Login() {
  return (
    <Container>
      <ContainerFlex>
        <Form>
          <InputFormLogin />
          <InputFormLogin />
        </Form>
        <Button conteudo="LOGIN" type="submit" id={10} link="/login" />
      </ContainerFlex>
    </Container>
  );
}
