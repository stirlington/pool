const timer = document.querySelector('.timer');
const startBtn = document.querySelector('.start-button');
const resetBtn = document.querySelector('.reset-button');
const beepSound = document.getElementById('beep');
const beep10Sound = document.getElementById('beep10');

let countdown;
let timeRemaining;

function startTimer() {
  clearInterval(countdown);
  timeRemaining = 45;
  displayTime(timeRemaining);
  countdown = setInterval(() => {
    timeRemaining--;
    displayTime(timeRemaining);
    if (timeRemaining === 10) {
      beep10Sound.play();
    }
    if (timeRemaining <= 5 && timeRemaining >= 1) {
      beepSound.play();
    }
    if (timeRemaining === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}

function displayTime(time) {
  timer.textContent = time;
}

startBtn.addEventListener('click', startTimer);

resetBtn.addEventListener('click', () => {
  clearInterval(countdown);
  displayTime(45);
});
