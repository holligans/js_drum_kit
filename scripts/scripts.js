playSound = event => {
  // get the key code number
  const key = event.keyCode;
  const sound = document.querySelector(`audio[data-key="${key}"]`);
  if (!sound) return;
  // play the audio with the same code number
  sound.currentTime = 0;
  sound.play();
  // add effect when click with the css class "playing" to the div with the same key number
  const instrument = document.querySelector(`div[data-key="${key}"]`);
  instrument.classList.add("playing");
};

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

// detect keydown event
window.addEventListener("keydown", playSound);

// Add eventListeners to remove transition
const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
