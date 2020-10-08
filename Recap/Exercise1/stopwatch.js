let timer = 0;
let trigger = 0;
const stopwatchDisplay = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const lapDisplay = document.getElementById('history');
const history = [];

function clockTicking()
{
    trigger = setInterval(() => {        
            displayTime();        
    }, 1000);   
}

start.addEventListener('click', () => {    
    clockTicking();
});

stop.addEventListener('click', () => {
    history.push(displayTime());
    clearInterval(trigger);    
});

reset.addEventListener('click', () => {    
    timer = 0;
    stopwatchDisplay.innerHTML = "00:00:00";    
    clockTicking();
});

lap.addEventListener('click', () => {        
    lapDisplay.innerHTML = history;
});

function displayTime() {   
    timer += 1000;
    let seconds = (timer / 1000) % 60;
    let minutes = Math.floor(timer / 1000 / 60) % 60;
    let hours = Math.floor(timer / 1000 / 60 / 60);

    seconds = ('0' + seconds).slice(-2);
    minutes = ('0' + minutes).slice(-2);
    hours = ('0' + hours).slice(-2);

    let value = `${hours}:${minutes}:${seconds}`
    stopwatchDisplay.innerHTML = value;

    return value;
}