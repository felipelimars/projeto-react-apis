import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/index";
import PokemonCard from "../../Components/PokemonCard";
import GlobalContext from "../../contexts/GlobalContext";
import {
  ContainerPokedex,
  TextHome,
  TextContainer,
  Cards,
  PikachuMessage,
  PikachuImage,
  ContainerPokedexEmpty,
} from "./styled";
import SadPikachu from "../../assets/sadpikachu.png";

const PokedexPage = () => {
  const { pokedex } = useContext(GlobalContext);
  const [pokedexState, setPokedexState] = useState([]); 

  useEffect(() => {
    setPokedexState(pokedex);
  }, [pokedex]);
  return (
    <>
      <Header />
      <ContainerPokedex>
        {pokedexState.length > 0 && (
          <TextContainer>
            <TextHome>Meus Pokémons</TextHome>
          </TextContainer>
        )}
        {pokedexState.length === 0 ? (
          <ContainerPokedexEmpty>
            <PikachuImage src={SadPikachu} alt="Pikachu triste" />
            <PikachuMessage>Sua Pokédex está vazia! :(</PikachuMessage>
          </ContainerPokedexEmpty>
        ) : (
          <Cards>
            {pokedexState.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                isInPokedex={true}
              />
            ))}
          </Cards>
        )}
      </ContainerPokedex>
    </>
  );
};

export default PokedexPage;
