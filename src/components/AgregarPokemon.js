import React, { useState, useEffect } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const AgregarPokemon = ({ setReRender, reRender, open, setOpen, idUpdate, setIdUpdate }) => {

  const [nombre, setNombre] = useState('')
  const [img, setImg] = useState('')
  const [ataque, setAtaque] = useState(0)
  const [defensa, setDefensa] = useState(0)
  const [camposRequeridos, setCamposRequeridos] = useState(false)

  const limpiarVariables = () => {
    setOpen(!open);
    setAtaque(0);
    setDefensa(0);
    setNombre('');
    setImg('');
    setIdUpdate(0)
  }

  const agregarPokemon = () => {
    if ((nombre && img) !== '') {
      const url = `https://bp-pokemons.herokuapp.com/?idAuthor=5`
      const pokemonInfo = {
        name: nombre,
        attack: ataque,
        defense: defensa,
        image: img,
        type: 'Normal',
        hp: 100,
        idAuthor: 5,
      }
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(pokemonInfo)
      }).then((resp) => {
        setReRender(!reRender)
        setCamposRequeridos(false);
        setOpen(false);
        setAtaque(0);
        setDefensa(0);
        setNombre('');
        setImg('')
      });
    } else {
      setCamposRequeridos(true);
    }
  }

  const actualizarPokemon = () => {
    if ((nombre && img) !== '') {
      const url = `https://bp-pokemons.herokuapp.com/${idUpdate}`
      const pokemonInfo = {
        name: nombre,
        attack: ataque,
        defense: defensa,
        image: img,
        type: 'Normal',
        hp: 100,
        idAuthor: 5,
      }
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify(pokemonInfo)
      }).then((resp) => {
        setReRender(!reRender)
        setCamposRequeridos(false);
        setOpen(false);
        setAtaque(0);
        setDefensa(0);
        setNombre('');
        setImg('')
        setIdUpdate(0)
      });
    } else {
      setCamposRequeridos(true);
    }
  }

  //consultar pokemon cuando es para editar
  useEffect(() => {
    const getPokemonById = async () => {
      if (idUpdate) {
        let urlGetByID = `https://bp-pokemons.herokuapp.com/${idUpdate}`
        const respuesta = await fetch(urlGetByID)
        const json = await respuesta.json()
        setAtaque(json.attack);
        setDefensa(json.defense);
        setNombre(json.name);
        setImg(json.image);
      }
    }
    getPokemonById().catch(console.error)
  }, [idUpdate])



  return (
    <div className='container-agregar' style={{ display: open ? 'block' : 'none' }}>
      <div className='container-content'>
        <div >
          <button onClick={() => limpiarVariables()}>
            Cerrar
          </button>
        </div>
        <h4>
          {idUpdate !== 0 ? 'Editar Pokemon' : 'Nuevo Pokemon'}
        </h4>
        <div className='body-agregar'>
          <div className='item-agregar'>
            <div className='item-separador'>
              <div>
                <span className='item-letra-color'> Nombre:</span>
              </div>
              <div>
                <input
                  className='input-agregar'
                  placeholder='Nombre'
                  required
                  value={nombre}
                  onChange={e => setNombre(e.target.value)}
                />
              </div>
            </div>
            <div className='item-separador'>
              <div>
                <span className='item-letra-color'> Ataque:</span>
              </div>
              <div className='slider-numbers'>
                <span>0</span>
                <input
                  type="range"
                  className='slider-color'
                  min="0"
                  max="100"
                  value={ataque}
                  onChange={e => setAtaque(e.target.value)}
                />
                <span>100</span>
              </div>
            </div>
          </div>
          <div className='item-agregar'>
            <div className='item-separador'>
              <div>
                <span className='item-letra-color'> Imagen:</span>
              </div>
              <div>
                <input
                  className='input-agregar'
                  placeholder='url'
                  value={img}
                  required
                  onChange={e => setImg(e.target.value)}
                />
              </div>
            </div>
            <div className='item-separador'>
              <div>
                <span className='item-letra-color'> Defensa:</span>
              </div>
              <div className='slider-numbers'>
                <span>0</span>
                <input
                  type="range"
                  className='slider-color'
                  min="0"
                  max="100"
                  value={defensa}
                  onChange={e => setDefensa(e.target.value)}
                />
                <span>100</span>
              </div>
            </div>
          </div>
        </div>
        {camposRequeridos && <p className='p-error'>Es necesario diligenciar todos los campos</p>}
        <div className='footer-agregar'>
          <div className='div-button'>
            {idUpdate !== 0 ? <button className='float-right' onClick={actualizarPokemon}>
              <BorderColorIcon /> Actualizar
            </button> : <button className='float-right' onClick={agregarPokemon}>
              <SaveIcon /> Guardar
            </button>}
          </div>
          <div className='div-button'>
            <button className='float-left' onClick={() => limpiarVariables()}>
              <ClearIcon /> Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
