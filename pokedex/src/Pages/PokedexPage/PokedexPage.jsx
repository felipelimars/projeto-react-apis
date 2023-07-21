import React from "react";
import Header from "../../Components/Header/Header";
import {  goToHome } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const PokedexPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <p>Pokédex</p>
      <button onClick={() => goToHome(navigate)}>
        Todos Pokémons
      </button>
    </>
  );
};

export default PokedexPage;
