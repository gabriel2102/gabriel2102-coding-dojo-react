import './App.css';
import { useState, useEffect } from 'react';
import { getResponse } from './actions/simpleGet';
import People from './components/People';
import Films from './components/Films';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import Planets from './components/Planets';
import obi from './obi-wan.png';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import PeopleRoute from './components/PeopleRoute';

function App() {
  const [element, setElement] = useState();
  const [id, setId] = useState();
  const [swapi, setSwapi] = useState();
  const [comp, setComp] = useState();
  const baseUrl = 'https://swapi.dev/api/';

  const loadAPIResource = async (url) =>{
    const response = await getResponse(url);
    console.log(response);
    if(response.detail){
       setComp(<div><p>Estos no son los droides que está buscando</p><img src={obi}></img></div>);
    }else{
      setSwapi(response);
    }
  }
  const changeElement=(e)=>{
    setElement(e.target.value);
  }
  const changeId=(e)=>{
    setId(e.target.value);
  }
  const requestApi=(e)=>{
    e.preventDefault()
    loadAPIResource(baseUrl+element+id);
  }

  useEffect(() => {
    switch (element){
      case 'people/':
        console.log("pasa por aca");
        setComp(<People name={swapi.name} height={swapi.height} hairColor={swapi.hair_color} birthyear={swapi.birth_year} homeworld={swapi.homeworld}></People>);
        break;
      case 'films/':
        setComp(<Films episodeId={swapi.episode_id} title={swapi.title} opening={swapi.opening_crawl} director={swapi.director} />);
        break;
      case 'starships/':
        setComp(<Starships name={swapi.name} model={swapi.model} starshipsClass={swapi.starship_class} manufacturer={swapi.manufacturer}/>)
        break;
      case 'vehicles/':
        setComp(<Vehicles name={swapi.name} model={swapi.model} vClass={swapi.vehicle_class} manufacturer={swapi.manufacturer}  />)
        break;
      case 'species/':
        setComp(<Species name={swapi.name} clasif={swapi.classification} designation={swapi.designation} aHeight={swapi.average_height}/>)
        break;
      case 'planets/':
        setComp(<Planets name={swapi.name} diameter={swapi.diameter} rotation={swapi.rotation_period} orbital={swapi.orbital_period} />)
        break;
    }
  }, [swapi])
  
  return (
    <div className="App">
      <form onSubmit={requestApi}>
        <div className='search-categories'>
          <label>Search for:</label>
          <select name='categories' onChange={changeElement}>
            <option value=''>Selecciona</option>
            <option value='people/'>People</option>
            <option value='films/'>Films</option>
            <option value='starships/'>Starships</option>
            <option value='vehicles/'>Vehicles</option>
            <option value='species/'>Species</option>
            <option value='planets/'>Planets</option>
          </select>
        </div>
        <div className='search-id'>
            <label>Id:</label>
            <input type='number' onChange={changeId}></input>
            <button type='submit'>Search</button>
        </div>
      </form>
      <div className='results'>
       
        <ul>
          {
            
            <Router>
              <Switch>
                <Route exact path='/'>
                  {comp}
                </Route>
                <Route exact path='/:id'>  
                  
                  <li><PeopleRoute/></li>
              </Route>
            </Switch>
          </Router>
             
                    
          }
        </ul> 
        
        
      
      </div>
    </div>
  );
}

export default App;
