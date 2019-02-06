import React, { Component } from 'react';
import Game from './components/Game'


class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 style={{textAlign: 'center'}}>The winner is: <span>...</span></h1>
        <Game/>
      </div>
    );
  }
}

export default App;
