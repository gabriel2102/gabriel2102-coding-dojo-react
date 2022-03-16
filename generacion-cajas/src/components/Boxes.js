import React, {setState} from 'react'

export const Boxes = (props) => {
  const {boxes} = props

    return (
    <div className='boxes'>
      {boxes.map((caja,i)=><div className='box' key={i} style={{backgroundColor:caja.color, width:parseInt(caja.ancho), height:parseInt(caja.alto)}}></div>)}
    </div>

  )
}

