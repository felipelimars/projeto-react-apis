import { useLocation, useNavigate } from "react-router-dom";
import { goToPokedex, goToHome } from "../../Router/coordinator";
import LogoPokemon from "../../assets/logoPokemon.png";
import {
  ButtonHeader,
  ButtonPokedex,
  HeaderContainer,
  Logo,
  UnderlinedText,
} from "./style";

const Header = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const isDetailPage = location.pathname.startsWith("/pokemonDetailPage/");
  const isListPage = location.pathname === "/";
  const isPokedexPage = location.pathname === "/pokedex";
  

  return (
    <HeaderContainer>
      {isDetailPage ? (
        <>
          <ButtonPokedex onClick={() => goToHome(navigate)}>
          ❮ &nbsp;
            <UnderlinedText>Todos os Pokemons</UnderlinedText>
          </ButtonPokedex>
          <Logo src={LogoPokemon} alt="Logo Pokemon" />
          <ButtonHeader onClick={() => goToPokedex(navigate)}>
            Pokédex
          </ButtonHeader>
        </>
      ) : isListPage ? (
        <>
          <Logo src={LogoPokemon} alt="Logo Pokemon" />
          <ButtonHeader onClick={() => goToPokedex(navigate)}>
            Pokédex
          </ButtonHeader>
        </>
      ) : isPokedexPage ? (
        <>
          <ButtonPokedex onClick={() => goToHome(navigate)}>
          ❮ &nbsp;
            <UnderlinedText>Todos os Pokemons</UnderlinedText>
          </ButtonPokedex>
          <Logo src={LogoPokemon} alt="Logo Pokemon" />
        </>
      ) : (
        <>
          <ButtonPokedex onClick={() => goToHome(navigate)}>
          ❮ &nbsp;
            <UnderlinedText>Todos os Pokemons</UnderlinedText>
          </ButtonPokedex>
          <Logo src={LogoPokemon} alt="Logo Pokemon" />
          <ButtonHeader onClick={() => goToPokedex(navigate)}>
            Pokédex
          </ButtonHeader>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
