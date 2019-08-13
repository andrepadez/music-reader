const AudioContext = window.AudioContext || window.webkitAudioContext

let context = new AudioContext()
const getOscilator = (frequency) => {
  const o = context.createOscillator()
  o.type = 'sine'
  o.frequency.value = frequency
  o.connect(context.destination)
  return o  
}

export default getOscilator