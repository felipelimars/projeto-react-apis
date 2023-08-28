import React, { useEffect, useState, useContext } from "react";
import Header from "../../Components/Header/index";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import PokemonCard from "../../Components/PokemonCard";
import GlobalContext from "../../contexts/GlobalContext";
import {
  AshImage,
  AshMessage,
  ButtonPagination,
  Cards,
  ContainerButton,
  ContainerMessageCaptured,
  SectionHome,
  TextContainer,
  TextHome,
} from "./styled";
import Ash from "../../assets/ash.png";

const PokemonsListPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50;
  const { addToPokedex, removeFromPokedex, pokedex } =
    useContext(GlobalContext);

  useEffect(() => {
    getAllPokemons();
  }, [currentPage]);



  const getAllPokemons = () => {
    const offset = (currentPage - 1) * itemsPerPage;
    axios
      .get(`${BASE_URL}?limit=${itemsPerPage}&offset=${offset}`)
      .then((response) => {
        setPokemons(response.data.results);
        console.log(response.data.results);
        scrollToTop()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 }); 
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleAddToPokedex = (pokemon) => {
    addToPokedex(pokemon);
  };
  const handleRemoveToPokedex = (pokemon) => {
    removeFromPokedex(pokemon);
  };

  const pokemonsNotInPokedex = pokemons.filter(
    (pokemon) => !pokedex.some((p) => p.name === pokemon.name)
  );
  
  const allPokemonsCaptured = pokemonsNotInPokedex.length === 0;

  return (
    <>
      <Header />
      <SectionHome>
        <Cards>
          <TextContainer>
            <TextHome>
              {allPokemonsCaptured ? (
                <ContainerMessageCaptured>
                  <AshImage src={Ash} alt="Ash image with pokeball" />
                  <AshMessage>Você capturou todos os Pokemons!</AshMessage>
                </ContainerMessageCaptured>
              ) : (
                "Todos Pokemons"
              )}
            </TextHome>
          </TextContainer>

          {pokemonsNotInPokedex.map((pokemon) => (
            <PokemonCard
              key={pokemon.url}
              pokemon={pokemon}
              pokemonName={pokemon.name}
              isInPokedex={pokedex.some((p) => p.name === pokemon.name)}
              addToPokedex={handleAddToPokedex}
              removeFromPokedex={handleRemoveToPokedex}
            />
          ))}
        </Cards>
        <ContainerButton>
          <ButtonPagination onClick={handlePreviousPage} disabled={currentPage === 1}>
            Página Anterior
          </ButtonPagination>
          <ButtonPagination
            onClick={handleNextPage}
            disabled={pokemons.length < itemsPerPage}
          >
            Próxima Página
          </ButtonPagination>
        </ContainerButton>
      </SectionHome>
    </>
  );
};

export default PokemonsListPage;
