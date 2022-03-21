import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemones, setPokemones] = useState([]);
  const getAPIPokemon = async () => {
    try {
      const apiResponse = await axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(response=>setPokemones(response.data.results));
      return apiResponse;  
    } catch (error) {
      console.log('Error: '+error);
    }
  }
  return (
    <div className="App">
      <button onClick={getAPIPokemon}>Fetch pokemon</button>
      <ul>
        {
          pokemones && pokemones.map((pokemon, i)=> <li key={i}>{pokemon.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
