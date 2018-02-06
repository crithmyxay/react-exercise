import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeftPane from './left-pane'
import RightPane from './right-pane'

const movies = [
  {
    title: 'The Fast and the Furious',
    description: 'Fast Cars',
  },
  {
    title: '2 Fast 2 Furious',
    description: 'Fast Cars in Miami',
  },
  {
    title: 'The Fast and The Furious: Tokyo Drift',
    description: 'Fast cars go sideways',
  },
  {
    title: 'Fast & Furious',
    description: 'Back to fast cars',
  },
  {
    title: 'Fast Five',
    description: 'Fast cars driving away',
  },
  {
    title: 'Fast & Furious 6',
    description: 'Fast cars helping save world',
  },
  {
    title: 'Furious 7',
    description: 'Fast cars jumps out of buildings',
  },
  {
    title: 'The Fate of the Furious',
    description: 'Boss of fast cars becomes bad guy',
  }
];

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="main">
          <LeftPane movies={movies} handleClick={this._setIndex}/>
          <RightPane movie={movies[this.state.index]} />
        </div>
      </div>
    );
  }

  _setIndex = (num) => {
    this.setState({
      index: num
    })
  }
}

export default App;
