let timerRef = document.getElementById('timer');
timerRef.style.border = '1px solid red';


let minRef = document.getElementsByClassName('min-count');
let secRef = document.getElementsByClassName('sec-count');

function getTime(seconds) {
    let min = Math.floor(seconds/60);
    let sec = seconds%60;
    return {min, sec};
}

timeIntervalRef = setInterval(() => {
    updateTime();
    
},1000);

let timeInSeconds = 62;
let counter = 0;
function updateTime() {
   
    if (counter > timeInSeconds) {
      clearInterval(timeIntervalRef);
      return;
    }

    const time = getTime(counter);
    minRef[0].innerHTML = time.min;
    secRef[0].innerHTML = time.sec;    
    ++counter;
}