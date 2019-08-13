import React, { Component } from 'react';
import Metronome from 'Components/Metronome'
import './App.css';

class App extends Component {
  state = {
    run: false
  }

  toggleMetronome = ev => {
    const { run } = this.state
    this.setState({ run: !run })
  }

  render() {
    const { run } = this.state
    return (
      <div className="App">
        <Metronome 
          visual={false}
          bpm={120}
          notes={4}
          maeasurement={4}
          run={run} />

        <button onClick={this.toggleMetronome}>Start / Stop</button>
      </div>
    )
  }
}

export default App;
