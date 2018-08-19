function activeAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const div = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  div.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

function keyPressed() {
  window.addEventListener('keydown', activeAudio);
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));  
}

keyPressed();