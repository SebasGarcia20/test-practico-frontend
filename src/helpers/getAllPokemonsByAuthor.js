
export const getAllPokemonsByAuthor = async () => {
    const url = `https://bp-pokemons.herokuapp.com/?idAuthor=5`
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}

