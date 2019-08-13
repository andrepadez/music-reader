const AudioContext = window.AudioContext || window.webkitAudioContext

let audioContext

const getOscilator = (frequency) => {
  audioContext = audioContext || new AudioContext()
  const o = audioContext.createOscillator()
  o.type = 'sine'
  o.frequency.value = frequency
  o.connect(audioContext.destination)
  return o  
}

export default getOscilator