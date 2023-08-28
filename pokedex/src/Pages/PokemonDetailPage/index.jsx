import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner/index";
import Header from "../../Components/Header/index";
import { BASE_URL } from "../../constants/constants";
import {
  ContainerDetails,
  PokemonDetailContainer,
  PokeImg,
  TextContainer,
  TextHome,
  BoxImageOne,
  BoxImageTwo,
  BaseStats,
  DivStats,
  ContainerDetailCard,
  PokeballCardDetail,
  FrontDefault,
  BackDefault,
  MovesText,
  Moves,
  BaseStatsText,
  Number,
  Range,
  NumberTotal,
  ProgressBar,
  FilledBar,
  Stat,
  BaseStatsContainer,
  Name,
} from "./styled";
import ImgPokeball from "../../assets/pngwing.png";
import {
  PokemonName,
  PokemonNumber,
  TypeBadge,
  TypesContainer,
} from "../../Components/PokemonCard/styled";
import { Pokemon } from "./styled";
import { getColors } from "../../utils/ReturnCardColor";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const PokemonDetailsPage = () => {
  
  const { pokedex } = useContext(GlobalContext);
  const { name } = useParams();
  const [pokemonData, setPokemonData] = useState(null);  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`${BASE_URL}${name}`)
      .then((response) => {
        setPokemonData(response.data);
        console.log(BASE_URL,"aaa");

      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (pokemonData === null) {
    return <LoadingSpinner />;
  }


  function calculateTotalStats(stats) {
    let total = 0;
    stats.forEach((stat) => {
      total += stat.base_stat;
    });
    return total;
  }

  const totalStats = calculateTotalStats(pokemonData.stats);

  const spritePathFront =
    pokemonData.sprites.versions["generation-v"]["black-white"].animated
      .front_default || pokemonData.sprites.front_default;

  const spritePathBack =
    pokemonData.sprites.versions["generation-v"]["black-white"].animated
      .back_default || pokemonData.sprites.back_default;

  return (
    <>
      <Header/>
      <ContainerDetails>
        <TextContainer>
          <TextHome>Detalhes</TextHome>
        </TextContainer>
        <PokeImg src={ImgPokeball} alt="Imagem Pokebola transparente" />
        <PokemonDetailContainer
          color={getColors(pokemonData.types[0].type.name)}
        >
          <BoxImageOne>
            <FrontDefault
              src={spritePathFront}
              alt="Pokemon pequeno de frente"
            />
          </BoxImageOne>
          <BoxImageTwo>
            <BackDefault src={spritePathBack} alt="Pokemon pequeno de costas" />
          </BoxImageTwo>
          <BaseStats>
            <BaseStatsText>Base stats</BaseStatsText>
            <BaseStatsContainer>
              {pokemonData.stats.map((stat, index) => (
                <Stat key={index}>
                  <Name>{stat.stat.name}</Name>
                  <Number>{stat.base_stat}</Number>
                  <Range>
                    <ProgressBar>
                      <FilledBar percent={stat.base_stat / 100} />
                    </ProgressBar>
                  </Range>
                </Stat>
              ))}
              <Stat>
                <Name>Total</Name>
                <NumberTotal>{totalStats}</NumberTotal>
              </Stat>
            </BaseStatsContainer>
          </BaseStats>

          <DivStats>
            <Moves>Moves:</Moves>
            <MovesText>{pokemonData.moves[0].move.name}</MovesText>
            <MovesText>{pokemonData.moves[1].move.name}</MovesText>
            <MovesText>{pokemonData.moves[2].move.name}</MovesText>
            <MovesText>{pokemonData.moves[3].move.name}</MovesText>
          </DivStats>
          <ContainerDetailCard>
            <div>
              <PokemonNumber>#0{pokemonData.id}</PokemonNumber>
              <PokemonName>
                {pokemonData.name.charAt(0).toUpperCase() +
                  pokemonData.name.slice(1)}
              </PokemonName>{" "}
              <TypesContainer>
                {pokemonData.types.map((typeInfo) => (
                  <TypeBadge
                    key={typeInfo.slot}
                    type={typeInfo.type.name.toLowerCase()}
                  />
                ))}
              </TypesContainer>
            </div>
            <PokeballCardDetail
              src={ImgPokeball}
              alt="Imagem transparente pokebolla"
            />
          </ContainerDetailCard>
        </PokemonDetailContainer>
        <Pokemon
          src={pokemonData.sprites.other["official-artwork"].front_default}
          alt="Imagem Pokemon"
        />
      </ContainerDetails>
    </>
  );
};

export default PokemonDetailsPage;
