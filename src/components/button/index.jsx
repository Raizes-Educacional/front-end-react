import React from "react";
import { Link } from "react-router-dom";

import { ButtonS } from "./styled";


function Button({ conteudo, type, id, link }) {
  return (
    <ButtonS type={type} id={id}>
      <Link className="white" to={link}>
        {conteudo}
      </Link>
    </ButtonS>
  );
}
export default Button;
