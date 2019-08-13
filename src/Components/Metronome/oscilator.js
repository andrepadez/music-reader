const AudioContext = window.AudioContext || window.webkitAudioContext

let context

const getOscilator = (frequency) => {
  context = context || new AudioContext()
  const o = context.createOscillator()
  o.type = 'sine'
  o.frequency.value = frequency
  o.connect(context.destination)
  return o  
}

export default getOscilator