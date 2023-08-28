import { useState } from "react";
import GlobalContext from "./GlobalContext";

export const GlobalState = ({ children }) => {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const addToPokedex = (pokemonToAdd) => {
    const isAddOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );

    if (!isAddOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };


  const data = {
    removeFromPokedex,
    addToPokedex,
    pokedex,
    setPokedex,
    pokelist,
    setPokelist,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};
