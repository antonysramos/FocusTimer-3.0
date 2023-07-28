import state from './state.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'
import * as el from './elements.js'

export function toggleRunning () {
  state.isRunning = document.documentElement.classList.toggle('running')
  sounds.buttonPress.play()
  timer.coutdown()
}

export function reset () {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
  sounds.buttonPress.play()
}

// incremento dos 5minutos
export function plus (minutes) {
  minutes = Number(minutes) + 5
  console.log('add')
  timer.updateDisplay(minutes, 0)
}

// decremento dos 5 minutos
export function minus (minutes) {
  if( minutes < 0) {
    return
  }
  
  minutes = Number(minutes) - 5
  console.log('minus')
  timer.updateDisplay(minutes, 0)
}

export function toggleMusic (){
  state.isMute = document.documentElement.classList.toggle('music-on')

  if(state.isMute) {
    sounds.bgAudio.play()
    return
  }

  sounds.bgAudio.pause()
}