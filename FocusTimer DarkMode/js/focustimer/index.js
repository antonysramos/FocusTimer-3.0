import state from './state.js'
import * as timer from './timer.js'
import './events.js'

export function start (minutes, seconds) {
  state.minutes = minutes
  state.seconds = seconds

  timer.updateDisplay()
}