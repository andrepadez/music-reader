import React, { Component } from 'react'
import getOscilator from './oscilator'
import Controls from './Controls'
import './metronome.scss'

class Metronome extends Component {
  state = {}

  componentDidMount() {
    this.beat()
  }

  beat = () => {
    const { run, bpm , measurement } = this.props
    let { currentBeat = 0 } = this.state
    const timer = 60 / bpm * 1000
    if(run){
      currentBeat = currentBeat >= measurement ? 1 : currentBeat + 1
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
    const { notes, measurement, visual } = this.props
    const { currentBeat = 0 } = this.state
    return (
      <div>
        {visual && <div className="metronome">
          <div>Metronome {notes}/{measurement}</div>
          <h3>{currentBeat}</h3>
          <div className="beat-map">
            {new Array(measurement).fill(null).map((_, idx) => (
              <div key={idx} className={`circle ${idx + 1 === currentBeat && 'current'}`}>{idx + 1}</div>
            ))}
          </div>
        </div>}
      </div>
    )
  }
}


export default Metronome

export { Controls }