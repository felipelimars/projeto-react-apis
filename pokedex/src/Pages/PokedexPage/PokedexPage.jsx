import React from "react";
import Header from "../../Components/Header/Header";
import { goToPokemonDetail } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const PokedexPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <p>Pokékex</p>
      <button onClick={() => goToPokemonDetail(navigate)}>
        Detalhes
      </button>
    </>
  );
};

export default PokedexPage;
