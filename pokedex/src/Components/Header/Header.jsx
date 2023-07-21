import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToPokedex } from '../../Router/coordinator'

const Header = () => {

    const navigate = useNavigate()
  return (
    <div>
        <p>HEADER</p>
         <button onClick={() => goToHome(navigate)}>
        Todos Pokémons
      </button>
      <button onClick={() => goToPokedex(navigate)}>
        Pokedex
      </button>
      <hr/>
    </div>
  )
}

export default Header