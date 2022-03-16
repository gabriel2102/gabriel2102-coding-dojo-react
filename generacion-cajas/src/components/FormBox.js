import React, { useState, useEffect } from 'react'

const FormBox = (props) => {
    const {boxes, setBoxes} = props;
    const [box, setBox] = useState({
        color:"",
        ancho:"",
        alto:""
    })
    const handlerValues = (e) => {
        console.log(e.target.name)
        setBox({
            ...box,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        console.log(box)
    },[box]) 
    const onSubmit = (e) => {
        e.preventDefault();
        setBoxes([...boxes,box]);
    }
    
  return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor='color'>Color:</label>
            <input type='color' name="color" onChange={handlerValues}></input>
            <label htmlFor='ancho'>Ancho:</label>
            <input type='text' name="ancho" onChange={handlerValues}></input>
            <label htmlFor='altura'>Altura:</label>
            <input type='text' name="alto" onChange={handlerValues}></input>
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default FormBox