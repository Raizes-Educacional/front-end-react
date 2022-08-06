import { React, useState } from "react";
//Components
import { Link } from "react-router-dom";
import Button from "../../components/button/index.jsx";
// Styles
import {
  Container,
  ContainerFlex,
  InputFormLogin,
  Logotipo,
} from "./styles.js";
// IMGS
import { Form } from "react-bootstrap";
import logotipo from "../../assets/logotipo.png";

export default function Login() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <ContainerFlex>
        <Logotipo src={logotipo} alt="Raizes"></Logotipo>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group  md="4" controlId="validationCustom01">
            <Form.Control
              required
              type="email"
              placeholder="Email"
              className ="form-control-input"
            />
            <Form.Control.Feedback type="invalid">
              Email invalid.
            </Form.Control.Feedback>
          </Form.Group>
           <Form.Group  md="4" controlId="validationCustom01">
            <Form.Control
              required
              type="password"
              placeholder="password"
              className="form-control-input"
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </Form.Group>
          
          <p className="text-center">
            {" "}
            Esqueceu a senha? <Link to=""> Clique aqui</Link>
          </p>
          <Button conteudo="LOGIN" type="submit" id={10} link="/login" />
        </Form>
      </ContainerFlex>
    </Container>
  );
}
