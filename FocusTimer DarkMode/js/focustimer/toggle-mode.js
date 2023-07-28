let lightmode = true
const buttonToggleMode = document.querySelector('.toggle-mode')


buttonToggleMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
  // const mode = lightmode ? 'dark' : 'light'
  // lightmode = !lightmode
})

const buttonToggleMusic = document.querySelector('.toggle-music')
import { bgAudio } from "./sounds.js"

function togglePlay (myAudio) {
  return myAudio.paused ? myAudio.play() : myAudio.pause()
}

buttonToggleMusic.addEventListener('click', () => {
  togglePlay(bgAudio)
  document.documentElement.classList.toggle('music-on')
})
