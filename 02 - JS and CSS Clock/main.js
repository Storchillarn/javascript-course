// Selects the divs for each hand of the clock.
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Defines function for manipulating the clock hands' rotation based on actual time.
timeCounter = function() {
  const time = new Date();
  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();
  const secondDegree = ((second / 60) * 360) + 90;
  const minuteDegree = ((minute / 60) * 360) + 90;
  const hourDegree = ((hour / 12) * 360) + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

// Runs the timeCounter function to get the clock hands set immediately upon page load.
timeCounter();

// Sets an interval for updating the rotation of the clock hands each second.
setInterval(timeCounter, 1000);