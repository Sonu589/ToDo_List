import React from 'react'

export default function Movie(props) {
  return (
    <div className="movie">
       <img src={props.img} alt="img"/>
       <p>{props.title}</p>
       <p>{props.year}</p>
    </div>
  )
}