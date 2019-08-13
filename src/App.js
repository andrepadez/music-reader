import React, { Component } from 'react';
import Metronome, { Controls, getOscilator } from 'Components/Metronome'
import './App.css';

class App extends Component {
  state = {
    run: false,
    bpm: 120,
    notes: 4,
    measurement: 4,
    visual: true
  }

  toggleMetronome = ev => {
    //this is a hack for initializing AudioContext
    if(!this.initialized){
      this.initialized = true
      getOscilator(100)
    }
    
    const { run } = this.state
    this.setState({ run: !run })
  }

  onMetronomeChange = ev => {
    const { name, value } = ev.target
    this.setState({ ...this.state, [name]: +value })
  }

  render() {
    return (
      <div className="App">
        <Metronome {...this.state} />

        <Controls {...this.state}
          onChange={this.onMetronomeChange} />

        <button onClick={this.toggleMetronome}>Start / Stop</button>
      </div>
    )
  }
}

export default App;
