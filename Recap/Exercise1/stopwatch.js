class Stopwatch 
{
    constructor() 
    {        
        this.display = document.querySelector('#time');
        this.results = document.querySelector('.results');        
        this.trigger = false;    
        this.timer = 0;  
    }
    
    clockTicking()
    {        
        this.trigger = setInterval(() => {        
                this.displayTime();                        
        }, 1000);   
    }

    reset() {        
        this.timer = 0;
        this.display.innerHTML = "00:00:00";    
        this.clockTicking();
    }
    
    start() 
    {
        this.clockTicking();
    }
    
    lap() 
    {                
        let li = document.createElement('li');
        li.innerText = this.displayTime();
        this.results.appendChild(li);
    }
    
    stop() 
    {        
        clearInterval(this.trigger);    
    }    
    
    displayTime() {
        this.timer += 1000;           
        let seconds = (this.timer / 1000) % 60;
        let minutes = Math.floor(this.timer / 1000 / 60) % 60;
        let hours = Math.floor(this.timer / 1000 / 60 / 60);
    
        seconds = ('0' + seconds).slice(-2);
        minutes = ('0' + minutes).slice(-2);
        hours = ('0' + hours).slice(-2);
    
        let value = `${hours}:${minutes}:${seconds}`
        this.display.innerHTML = value;
    
        return value;
    }        
}

let stopwatch = new Stopwatch();