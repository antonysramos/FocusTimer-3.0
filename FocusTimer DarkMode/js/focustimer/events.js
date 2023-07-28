import * as el from './elements.js'
import * as actions from './actions.js'

el.play.addEventListener('click', function() {
  actions.toggleRunning()
  // countdown
})

el.pause.addEventListener('click', () => {
  actions.toggleRunning()
})

el.stop.addEventListener('click', () => {
  actions.reset()
})

el.plus.addEventListener('click', ()=> {
  actions.plus(el.minutes.textContent)
})

el.minus.addEventListener('click', () => {
  actions.minus(el.minutes.textContent)
})