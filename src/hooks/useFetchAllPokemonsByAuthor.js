import { useEffect, useState } from "react"
import { getAllPokemonsByAuthor } from "../helpers/getAllPokemonsByAuthor"

export const useFetchAllPokemonsByAuthor = (pokemon, reRender) => {

    const [state, setState] = useState({
        data: [],
    })

    useEffect(() => {
        getAllPokemonsByAuthor()
            .then(pokemons => {
                setState({
                    data: pokemons,
                })
            })
    }, [reRender, pokemon])


    return { state, setState };

}