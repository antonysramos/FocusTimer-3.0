import * as soundsCards from './soundCard.js'
let card1 = document.querySelector('.C1')
let card2 = document.querySelector('.C2')
let card3 = document.querySelector('.C3')
let card4 = document.querySelector('.C4')

function togglePlay (myAudio) {
  return myAudio.paused ? myAudio.play() : myAudio.pause()
}

card1.addEventListener('click', () => {
  card1.classList.toggle('activate')
  togglePlay(soundsCards.florestAudioCard)
})

card2.addEventListener('click', () => {
  card2.classList.toggle('activate')
  togglePlay(soundsCards.ChuvaAudioCard)
})

card3.addEventListener('click', ()=> {
  card3.classList.toggle('activate')
  togglePlay(soundsCards.CafeteriaAudioCard)
})

card4.addEventListener('click', ()=> {
  card4.classList.toggle('activate')
  togglePlay(soundsCards.LareiraAudioCard)
})