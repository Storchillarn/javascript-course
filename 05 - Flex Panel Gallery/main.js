const panel = document.querySelectorAll('.panel');

function handleClick() {
  this.classList.toggle('open');
}

function handleOpen(e) {
  e.propertyName.includes('flex') ? this.classList.toggle('open-active') : false;
}

panel.forEach(elem => elem.addEventListener('transitionend', handleOpen));
panel.forEach(elem => elem.addEventListener('click', handleClick));