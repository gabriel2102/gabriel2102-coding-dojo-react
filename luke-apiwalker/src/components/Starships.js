import React from 'react'

const Starships = (props) => {
    const {name, model, starshipsClass, manufacturer} = props;
  return (
    <div className='starship'>
        <h1>{name}</h1>
        <h3>Modelo: {model}</h3>
        <h3>Clase: {starshipsClass}</h3>
        <h3>Fabricante: {manufacturer}</h3>

    </div>
  )
}

export default Starships