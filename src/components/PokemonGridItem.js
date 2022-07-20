import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const PokemonGridItem = ({ name, attack, defense, img, id, eliminarPokemon, setOpen, setIdUpdate }) => {
  return (
    <tr key={id}>
      <td className='item-letra-color' >{name}</td>
      <td className='align-center'>
        <img src={img} alt={name} />
      </td>
      <td className='item-letra-color'>{attack}</td>
      <td className='item-letra-color'>{defense}</td>
      <td>
        <div className='td-color-purple'>
          <div>
            <button className='button-delete-edit' onClick={() => {
              setIdUpdate(id);
              setOpen(true);
            }}>
              <BorderColorIcon fontSize='small' />
            </button>
          </div>
          <div>
            <button className='button-delete-edit' onClick={() => eliminarPokemon(id)}>
              <DeleteOutlineIcon fontSize='small' />
            </button>
          </div>
        </div>
      </td>
    </tr>
  )
}
