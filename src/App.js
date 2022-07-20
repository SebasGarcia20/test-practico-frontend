import { useState } from 'react';
import './App.css';
import { AgregarPokemon } from './components/AgregarPokemon';
import { Buscador } from './components/Buscador';
import { PokemonGrid } from './components/PokemonGrid';

function App() {

  const [pokemon, setPokemon] = useState('')
  const [reRender, setReRender] = useState(false) //Para realizar nuevamente el Get al eliminar o editar
  const [activarAgregarPokemon, setActivarAgregarPokemon] = useState(false)
  const [open, setOpen] = useState(false) //abrir modal de agregar o actualizar
  const [idUpdate, setIdUpdate] = useState(); //conocer el id a actualizar


  return (
    <>
      <div className='header'></div>
      <div className="container">
        <Buscador setPokemon={setPokemon} activarAgregarPokemon={activarAgregarPokemon} setActivarAgregarPokemon={setActivarAgregarPokemon} pokemon={pokemon} open={open} setOpen={setOpen} />
        <PokemonGrid pokemon={pokemon} reRender={reRender} setReRender={setReRender} setOpen={setOpen} setIdUpdate={setIdUpdate} />
      </div>
      <AgregarPokemon setReRender={setReRender} reRender={reRender} open={open} setOpen={setOpen} idUpdate={idUpdate} setIdUpdate={setIdUpdate} />
    </>
  );
}

export default App;
