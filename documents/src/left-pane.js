import React, { Component } from 'react';


const LeftPane = (props) => {

  const movieButtons = props.movies.map( (movie, i)=>{
    return (
      <button type="button" onClick={(event) => props.handleClick(i)}>{movie.title}</button>
    )
  })

    return (
      <div className="left">
        {movieButtons}
      </div>
  )
}

export default LeftPane;