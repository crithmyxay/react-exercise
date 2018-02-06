import React, { Component } from 'react';

const RightPane = (props) => {
  
  return (
    <div className="right">
      <form action="">
        <input type="text" value={props.movie.title}/><br/>
        <input type="text" value={props.movie.description} />
      </form>
    </div>
  )
}

export default RightPane;