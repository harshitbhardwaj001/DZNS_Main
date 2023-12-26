import React, { useRef, useState } from 'react'

const Sound = () => {
const [isPlaying, setIsPlaying] = useState(false);  
const [isPaused, setIsPaused] = useState(true);  
const audioPlayer = useRef()

const pause = () => {
  setIsPaused(true);
  audioPlayer.current.pause();
  audioPlayer.current.currentTime = 0
}

const play = () => {
  setIsPlaying(true);
  setIsPaused(false);
  audioPlayer.current.play();
}

const onPlaying = () => {
  if(audioPlayer.current.paused) setIsPlaying(false);
}

if(typeof window !== 'undefined') {
  const soundButton = document.querySelector('.soundbutton')

  window.onfocus = function () {
    soundButton.classList.contains('paused')?audioPlayer.current.pause():audioPlayer.current.play();
  }

  window.onblur = function () {
    audioPlayer.current.pause();
  }

}

  return (
    <>
      <button className={`soundbutton ${isPaused? 'paused' : null}`} onClick={!isPlaying?play:pause}>
        <img src="./sound.gif" alt="Sound Button" />
      </button>
      <audio src='./ambient.mp3' loop ref={audioPlayer} onTimeUpdate={onPlaying}/>
    </>
  )
}

export default Sound