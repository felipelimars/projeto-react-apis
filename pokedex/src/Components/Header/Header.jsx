import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToPokedex } from '../../Router/coordinator'
import logoPokemon from '../../utils/logo/logoPokemon.png'

const Header = () => {
    const navigate = useNavigate()
  return (
    <div>
        <img src={logoPokemon} alt='Logo Pokemon'/>
        <h3>Todos Pokémons</h3>
      <button onClick={() => goToPokedex(navigate)}>
        Pokedex
      </button>
      <hr/>
    </div>
  )
}

export default Header