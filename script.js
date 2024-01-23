let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            clearInterval(timer);
            alert("Pomodoro Timer Completed!");
            return;
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    updateTimerDisplay();
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}