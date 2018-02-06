import React, { Component } from 'react';

const RightPane = (props) => {

  
  return (
    <div className="right">
        <textarea value ={props.movie.title} /><br/>
        <textarea value ={props.movie.description} onChange={(event)=>props.handleChange(event.target.value)}/><br />
    </div>
  )
}

export default RightPane;