window.addEventListener('load', init)
let time =5;
let score = 0;
let isPlaying;

let wordInput = documnet.querySelector('#word-input')

let currentWord = documnet.querySelector('#current-word')
let scoreDisplay = documnet.querySelector('#score')
let timeDisplay = documnet.querySelector('#time')
let message = documnet.querySelector('#message')
let seconds = documnet.querySelector('#seconds')


const words = [
  'hat',
  'river',
  'lucky',
  'stubborn',
  'statue',
  'joke',
  'hero',
  'echo'
]

function init () {
  console.log('init')
}