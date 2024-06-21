const milliseconds = document.querySelector(".milliseconds")
const seconds = document.querySelector(".seconds")
const minutes = document.querySelector(".minutes")
const hour = document.querySelector(".hour")


let cronMilliseconds =0
let cronSeconds = 0
let cronMinutes = 0
let cronHour = 0
let interval

const start = ()=> {
    interval = setInterval(() => {
        cronMilliseconds+= 10

        if(cronMilliseconds === 1000) {
            cronSeconds++
            cronMilliseconds = 0
        }

        if(cronSeconds === 60){
            cronMinutes++
            cronSeconds = 0
        }

        if(cronMinutes === 60){
            cronHour++
            cronMinutes = 0
        }

        milliseconds.innerHTML = formatMilliseconds(cronMilliseconds)
        seconds.innerHTML = formatTime(cronSeconds)
        minutes.innerHTML = formatTime(cronMinutes)
        hour.innerHTML = formatTime(cronHour)

         
    }, 10);
}


const stopBtn = ()=> {
    clearInterval(interval)
    
}


const clearBtn = ()=> {
    cronMilliseconds =0
    cronSeconds = 0
    cronMinutes = 0
    cronHour = 0
    milliseconds.innerHTML = "0"+0
    seconds.innerHTML = "0"+0
    minutes.innerHTML = "0"+0
    hour.innerHTML = "0"+0
}

const formatTime = (time)=> {
    return time < 10 ? `0${time}` : time;
}   

const formatMilliseconds = (time)=> {
    return time < 100 ? `${time}`.padStart(3, "0") : time;
}   