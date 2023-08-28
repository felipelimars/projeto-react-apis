import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import PokeballImg from "../../assets/pngwing.png";
import { getColors } from "../../utils/ReturnCardColor";
import LoadingSpinner from "../LoadingSpinner";
import {
  ButtonDetails,
  CatchButton,
  Container,
  Pokeball,
  Pokemon,
  PokemonName,
  PokemonNumber,
  TypesContainer,
  TypeBadge,
  RemoveButton,
} from "./styled";

const PokemonCard = ({ pokemon, isInPokedex }) => {
  const { addToPokedex, removeFromPokedex } = useContext(GlobalContext);
  const [pokemonData, setPokemonData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dataPokemons();
  }, []);

  const dataPokemons = () => {
    axios
      .get(pokemon.url)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCaptureClick = () => {
    if (!isInPokedex) {
      addToPokedex(pokemon);
    } else {
      removeFromPokedex(pokemon);
    }
  };

  if (pokemonData === null) {
    return <LoadingSpinner />;
  }

  const handleDetailsClick = (name) => {
    navigate(`/pokemonDetailPage/${pokemon.name}`, {state: {pokemonData}});
  };

  return (
    <Container color={getColors(pokemonData.types[0].type.name)}>
      <div>
        <PokemonNumber>#0{pokemonData.id}</PokemonNumber>
        <PokemonName>
          {pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}
        </PokemonName>{" "}
        <TypesContainer>
          {pokemonData.types.map((typeInfo) => (
            <TypeBadge
              key={typeInfo.slot}
              type={typeInfo.type.name.toLowerCase()}
            />
          ))}
        </TypesContainer>
        <ButtonDetails
          onClick={() => handleDetailsClick(navigate, pokemonData.name)}
        >
          Detalhes
        </ButtonDetails>
        {location.pathname === "/" && !isInPokedex ? (
          <CatchButton onClick={handleCaptureClick}>
            {isInPokedex ? "Remover" : "Capturar"}
          </CatchButton>
        ) : (
          isInPokedex && (
            <RemoveButton onClick={handleCaptureClick}>Excluir</RemoveButton>
          )
        )}
        <Pokemon
          src={pokemonData.sprites.other["official-artwork"].front_default}
          style={{ width: 193, height: 193 }}
          alt="Imagem de um personagem Pokemon"
        />{" "}
        <Pokeball src={PokeballImg} alt="pokeball" />
      </div>
    </Container>
  );
};

export default PokemonCard;
