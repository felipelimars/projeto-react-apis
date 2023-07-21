import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokemonsListPage = () => {
  
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = () => {
    axios
      .get(BASE_URL)
      .then((response) => {
        setPokemons(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <p>Todos Pokemons (home)</p>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.name} pokemon={pokemon} />;
      })}
    </>
  );
};

export default PokemonsListPage;
