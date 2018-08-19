// Selects the input elements and the image element and assigns to variables.
const inputElements = document.querySelectorAll('input');
const imageElement = document.querySelector('img');
 
// If the inputs are changed, this function updates the image element styles.
function handleEvent() {
  const suffix = this.getAttribute('data-sizing') ? this.dataset.sizing : "";
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Listens for change in any of the input elements values.
inputElements.forEach(elem => elem.addEventListener('change', handleEvent));
inputElements.forEach(elem => elem.addEventListener('mousemove', handleEvent));