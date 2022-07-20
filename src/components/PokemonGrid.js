import React from 'react'
import { deletePokemon } from '../helpers/deletePokemon';
import { useFetchAllPokemonsByAuthor } from '../hooks/useFetchAllPokemonsByAuthor';
import { PokemonGridItem } from './PokemonGridItem';

export const PokemonGrid = ({ pokemon, reRender, setReRender, setOpen, setIdUpdate }) => {

  const { state } = useFetchAllPokemonsByAuthor(pokemon, reRender)

  const eliminarPokemon = (id) => {
    deletePokemon(id, reRender, setReRender);
  }

  return (
    <div>
      <table className='styled-table'>
        <thead>
          <tr>
            <td>
              <h4 className='h4-header'>
                Nombre
              </h4>
            </td>
            <td>
              <h4 className='h4-header'>
                Imagen
              </h4>
            </td>
            <td>
              <h4 className='h4-header'>
                Ataque
              </h4>
            </td>
            <td>
              <h4 className='h4-header'>
                Defensa
              </h4>
            </td>
            <td>
              <h4 className='h4-header'>
                Acciones
              </h4>
            </td>
          </tr>
        </thead>
        <tbody>
          {state.data && state.data.filter((item) =>
            item.name.toLowerCase().startsWith(pokemon.toLowerCase()))
            .map((pokemon) => {
              return <PokemonGridItem
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                attack={pokemon.attack}
                defense={pokemon.defense}
                img={pokemon.image}
                eliminarPokemon={eliminarPokemon}
                setOpen={setOpen}
                setIdUpdate={setIdUpdate}
              />
            })}
        </tbody>
      </table >
    </div >
  )
}
