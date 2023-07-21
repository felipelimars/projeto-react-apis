import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import Error from "../Pages/Error/Error";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonsListPage/>} />
        <Route path="/pokedex" element={<PokedexPage/>} /> 
        <Route path="/pokemonDetailPage" element={<PokemonDetailPage/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;