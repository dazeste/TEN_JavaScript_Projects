
const daysElements= document.getElementById("days");
const hoursElements= document.getElementById("hours");
const minElements= document.getElementById("min");
const secElements= document.getElementById("sec");


const holiday = "8 Mar 2023";

function countdown() {
  const newHolidayDate = new Date(holiday);
  const currentDate = new Date();

  const totalSeconds = (newHolidayDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 /24);
  const hours = Math.floor(totalSeconds/ 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;
  

  // console.log(days, hours, min, sec);

 
  daysElements.innerHTML = formatTime(days);
  hoursElements.innerHTML = formatTime(hours);
  minElements.innerHTML = formatTime(min);
  secElements.innerHTML = formatTime(sec);

}

// craete 0
function formatTime(time) {
  // if we have less then ten then show 0 , otherwise show time(0 front)
  return time < 10 ? (`0${time}`) : time;
  
}

// initial call
countdown();

setInterval(countdown,1000);