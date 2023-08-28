import React from "react";
import Header from "../../Components/Header/index";
import ErrorAsh from "../../assets/asherror.png";
import { ErrorImg, ErrorMessage, Container } from "./styled";

const Error = () => {
  return (
    <>
      <Header />
      <Container>
        <ErrorImg src={ErrorAsh} alt="Imagem de erro" />
        <ErrorMessage>Página inexistente :(</ErrorMessage>
      </Container>
    </>
  );
};

export default Error;
