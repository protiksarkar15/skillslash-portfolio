let timerRef = document.getElementById('timer');
timerRef.style.border = '1px solid red';


let minRef = document.getElementsByClassName('min-count');
let secRef = document.getElementsByClassName('sec-count');

function getTime(seconds) {
    let min = Math.floor(seconds/60);
    let sec = seconds%60;
    return {min, sec};
}

function getTimeInSeconds(timeInSeconds) {
    console.log(getTime(timeInSeconds));
}


timeIntervalRef = setInterval(() => {
    updateTime();
    
},1000);

//getTimeInSeconds(1350);

let timeInSeconds = 30;
function updateTime() {
    const time = getTime(timeInSeconds);
    
    if (timeInSeconds < 0) {
      clearInterval(timeIntervalRef);
      return;
    }
    minRef[0].innerHTML = time.min;
    secRef[0].innerHTML = time.sec;
    timeInSeconds--;
    
      
}