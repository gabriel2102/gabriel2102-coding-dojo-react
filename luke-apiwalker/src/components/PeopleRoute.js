import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSinglePeople,getResponse } from '../actions/simpleGet';

const PeopleRoute = () => {
    const {id} = useParams();
    const [people, setPeople] = useState();
    const [planet, setPlanet] = useState();
    const getSingle = async () =>{
        const singleResponse = await getSinglePeople(id);
        setPeople(singleResponse);
        loadAPIResource(singleResponse.homeworld)
      }
    const loadAPIResource = async (url) =>{
        const response = await getResponse(url);
        
        setPlanet(response.name);
    }
      useEffect(() => {
        id&&getSingle(id);
        
      }, [id])
  return (
    <div className='people'>
         <h1>{people?.name}</h1>
        <h3>Height: {people?.height}</h3>
        <h3>Hair Color: {people?.hair_color}</h3>
        <h3>Birth Year: {people?.birth_year}</h3>
        <h3>Homeworld: {planet}</h3>       
    
    </div>
  )
}

export default PeopleRoute