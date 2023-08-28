import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage";
import PokemonsListPage from "../Pages/PokemonsListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage";
import Error from "../Pages/Error/";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsListPage/>} />
        <Route path="/pokedex" element={<PokedexPage/>} /> 
        <Route path="/pokemonDetailPage/:name" element={<PokemonDetailPage />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;