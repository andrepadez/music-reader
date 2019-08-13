import React, { Component } from 'react'

class Controls extends Component {
  render() {
    const { notes, measurement, bpm, onChange } = this.props
    
    return (
      <div>
        <div>
          <label>Time Signature: </label>
          <select name="notes" value={notes} onChange={onChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
          /
          <select name="measurement" value={measurement} onChange={onChange}>
            {[1, 2, 4, 8].map(n => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label>bpm</label>
          <input 
            type="number" 
            name="bpm" 
            min="20" 
            max="200" 
            defaultValue={bpm} 
            onKeyPress={ev => ev.preventDefault()}
            onBlur={onChange} />
        </div>
      </div>
    )
  }
}

export default Controls