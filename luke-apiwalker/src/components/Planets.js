import React from 'react'

const Planets = (props) => {
    const {name, diameter, rotation, orbital} = props;
  return (
    <div className='planet'>
        <h1>{name}</h1>
        <h3>Diámetro: {diameter}</h3>
        <h3>Rotación: {rotation}</h3>
        <h3>Orbita: {orbital}</h3>
    </div>
  )
}

export default Planets