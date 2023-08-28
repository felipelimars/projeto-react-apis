export const goToHome = (navigate) => {
    navigate('/')
}

export const goToPokedex = (navigate) => {
    navigate(`/pokedex`)
}

export const goToPokemonDetail = (navigate, pokemonName) => {
    navigate(`/pokemonDetailPage/${pokemonName}`)
}
