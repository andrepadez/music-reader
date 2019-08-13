import React, { Component } from 'react'
import getOscilator from './oscilator'
import Controls from './Controls'

class Metronome extends Component {
  state = {}

  componentDidMount(){
    this.setState(this.props, this.beat)
  }

  onMetronomeChange = ev => {
    const { name, value } = ev.target
    this.setState({ ...this.state, [name]: +value })
    this.metronomeChanging = false
  }

  beat = () => {
    const { run } = this.props
    const { bpm , notes } = this.state
    let { currentBeat = 0 } = this.state
    const timer = 60 / bpm * 1000
    if(run){
      currentBeat = currentBeat === notes ? 1 : currentBeat + 1
      this.setState({ currentBeat })
      const oscilator = getOscilator(currentBeat === 1 ? 660 : 440)
      oscilator.start()
      setTimeout(() => oscilator.stop(), 100)
    } else if(currentBeat !== 0) {
      this.setState({ currentBeat: 0})
    }
    setTimeout(this.beat, timer)
  }

  render() {
    const { notes, measurement, visual } = this.state
    const { currentBeat = 0 } = this.state
    return (
      <div>
        {visual && <div>
          <div>Metronome {notes}/{measurement}</div>
          <h3>{currentBeat}</h3>
          <Controls {...this.state}
            start={this.start}
            stop={this.stop} 
            onChange={this.onMetronomeChange} />
        </div>}
      </div>
    )
  }
}


export default Metronome

export { Controls }