import React, { Component } from 'react';

const RightPane = (props) => {

  
  return (
    <div className="right">
      <form action=''>
        <textarea value ={props.movie.title} /><br/>
        <textarea value ={props.movie.description} /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default RightPane;