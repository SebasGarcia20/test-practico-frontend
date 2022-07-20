import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

export const Buscador = ({ setPokemon, setActivarAgregarPokemon, activarAgregarPokemon, pokemon, open, setOpen }) => {

  return (
    <div className='container-buscador'>
      <h4>
        Listado de Pokemon
      </h4>
      <div className='container-buscador-input-button'>
        <div className='input-icon'>
          <SearchIcon className='icon' />
          <input
            placeholder='Buscar por Nombre'
            value={pokemon}
            type="text"
            onChange={e => setPokemon(e.target.value)}
          />
        </div>
        <button onClick={() => {
          setActivarAgregarPokemon(!activarAgregarPokemon);
          setOpen(!open);
        }}>
          <AddIcon /> Nuevo
        </button>
      </div>
    </div>
  )
}
