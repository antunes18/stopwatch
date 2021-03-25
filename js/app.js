// Stopwatch app using Vanilla JavaScript
window.onload = function () {
  let seconds = 00;
  let tens = 00;
  let startButton = document.getElementById("start-button");
  let stopButton = document.getElementById("stop-button");
  let resetButton = document.getElementById("reset-button");
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  let Interval;

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }

  startButton.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  });

  stopButton.addEventListener("click", function () {
    clearInterval(Interval);
  });

  resetButton.addEventListener("click", function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  });
};
