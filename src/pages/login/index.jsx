import { React, useState, useContext } from "react";
import { Form  } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

//Componentes
import Button from "../../components/button/index";
import ToastMy from "../../components/Toast";

// STYLES
import { Container, ContainerFlex, Logotipo } from "./styles";

// IMGS
import logotipo from "../../assets/logotipo.png";


// Authetication 
import { AuthContext } from "../../store/provider/AuthContext";


export default function Login() {
  const { user, setUser } = useContext(AuthContext)
  const [validated, setValidated] = useState(false);
  const [userok, setUserOk] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [validPassword, setValidPassword] = useState(false);

  //===================================================================
  //     Makes connection with api,
  //     and stores the user token
  //     redirecting the page
  //===================================================================
  const handleSubmit = (event) => {
    setValidated(true);
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        email,
        password
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3000/voluntario/login", requestOptions)
        .then((response) => response.json())
        .then( async (result) => {
          if(result.statusCode === 200){
            // set result to context and localhost
            await window.localStorage.setItem('acess-token', result);
            await setUser(result);
            return setUserOk(true);
          }
          setValidPassword(true)
          return console.log("Erro "+ result.mensage)
        })
        .catch((error) => {
          setValidPassword(true);
          console.log("error", error)
        });
    }

  };
  // Chech if user login
  if(userok === true){
    return (
      <Navigate to="/admin" />
    )
  }else{
    return (
      <Container>
        {validPassword === true && 
          (
            <ToastMy ></ToastMy>
          )

          }
      
        <ContainerFlex>
          <Logotipo src={logotipo} alt="Raizes" />
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group md="4" controlId="validationCustom01">
              {
                //===================================================================
                //                  INPUT EMAIL
                //===================================================================
              }
              <Form.Control
                required
                type="email"
                placeholder="Email"
                className="form-control-input"
                onChange={(event) => setEmail(event.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Email invalid.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group md="4" controlId="validationCustom02">
              {
                //===================================================================
                //                  INPUT PASSWORD
                //===================================================================
              }
              <Form.Control
                required
                type="password"
                placeholder="password"
                className="form-control-input"
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="on"
                
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
  
            <p className="text-center">
              {" "}
              Esqueceu a senha? <Link to="/"> Clique aqui</Link>
            </p>
            <Button conteudo="LOGIN" type="submit" id={10} link="/login" />
          </Form>
        </ContainerFlex>
      </Container>
    );
  }
}
