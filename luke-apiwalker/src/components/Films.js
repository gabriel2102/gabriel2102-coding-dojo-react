import React from 'react'

const Films = (props) => {
    const {episodeId, title, opening, director} = props;
  return (
    <div className='films'>
        <h1>{title}</h1>
        <h3>Id: {episodeId}</h3>
        <h3>Opening: {opening}</h3>
        <h3>Director: {director} </h3>
    </div>
  )
}

export default Films