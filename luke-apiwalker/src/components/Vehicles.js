import React from 'react'

const Vehicles = (props) => {
    const {name, model, vClass, manufacturer} = props;
  return (
    <div className='vehicle'>
        <h1>{name}</h1>
        <h3>Modelo: {model}</h3>
        <h3>Clase: {vClass}</h3>
        <h3>Fabricante: {manufacturer}</h3>
    </div>
  )
}

export default Vehicles