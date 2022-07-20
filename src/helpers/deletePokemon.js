
export const deletePokemon = async (id, reRender, setReRender) => {
    const url = `https://bp-pokemons.herokuapp.com/${id}`
    fetch(url, {
        method: 'DELETE',
    }).then(res => setReRender(!reRender));
}

