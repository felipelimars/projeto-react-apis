import { useEffect } from "react";
import Header from "../../Components/Header/Header";
import { goToPokemonDetail } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/constants"

const PokemonsListPage = () => {

  useEffect(() => {
  getAllPokemons()
  });

  const getAllPokemons = () => {

    axios
      .get(BASE_URL)
      .then((response) => {
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const navigate = useNavigate();

  return (
    <>
      <Header />
      <p>Todos Pokemons (home)</p>
      <button onClick={() => goToPokemonDetail(navigate)}>
        Detalhes
      </button>
    </>
  );
};

export default PokemonsListPage;
