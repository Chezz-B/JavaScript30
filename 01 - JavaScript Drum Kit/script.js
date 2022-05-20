"use strict";


function playSound(e) {
  const audio = document.querySelector(`audio[id=${e.key}]`);
  const key = document.querySelector(`[class = "key"][id=${e.key}]`);
  if(!audio) return; 
  audio.currentTime = 0; // rewind to the start
  audio.play();
  // console.log(key);
  key.classList.add("playing");
};

function removeTransition(e) {
  if(e.propertyName !== "transform") return; //skip if it's not a transform
  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key  ")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener('keydown', playSound);
