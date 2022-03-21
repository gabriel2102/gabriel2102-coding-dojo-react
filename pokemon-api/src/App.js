import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const getAPIPokemon = async () => {
    try {
      const apiResponse = await fetch('https://pokeapi.co/api/v2/pokemon')
      .then(response=>response.json());
      return apiResponse;  
    } catch (error) {
      console.log('Error: '+error);
    }
  }
  const getPokemones = async () =>{
    const resPokemones = await getAPIPokemon();
    setPokemones(resPokemones.results);
  }
  return (
    <div className="App">
      <button onClick={getPokemones}>Fetch pokemon</button>
      <ul>
        {
          pokemones && pokemones.map((pokemon, i)=> <li key={i}>{pokemon.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
