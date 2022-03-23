import React from 'react'

const Species = (props) => {
    const {name, clasif, designation, aHeight} = props
  return (
    <div className='specie'>
        <h1>{name}</h1>
        <h3>Clasificación: {clasif}</h3>
        <h3>Designación: {designation}</h3>
        <h3>Altura: {aHeight}</h3>
    </div>
  )
}

export default Species