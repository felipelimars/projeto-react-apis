import { goToPokemonDetail } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({pokemon}) => {

 const navigate = useNavigate()

  return (
    <>
    <br/>
    <div>{pokemon.name}</div>
    <br/>
    <button onClick={() => goToPokemonDetail(navigate)}>Detalhes</button>
    <button>Capturar</button>
    </>
  )
}

export default PokemonCard