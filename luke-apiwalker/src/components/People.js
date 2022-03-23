import React, { useState, useEffect, Fragment } from 'react'
import { getResponse, getSinglePeople } from '../actions/simpleGet';

import { Link } from 'react-router-dom';

const People = (props) => {
    const {name, height, hairColor, birthyear, homeworld} = props;
    const [planet, setPlanet] = useState();
    
    const loadAPIResource = async (url) =>{
        const response = await getResponse(url);
        setPlanet(response.name);
    }
    useEffect(() => {
      loadAPIResource(homeworld);
      
    }, [])
    
  return (
    <div className='people'>
        <h1>{name}</h1>
        <h3>Height: {height}</h3>
        <h3>Hair Color: {hairColor}</h3>
        <h3>Birth Year: {birthyear}</h3>
        <h3>Homeworld: {planet}</h3>      
    </div>
  )
}

export default People