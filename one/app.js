const weeksElements= document.getElementById("weeks");
const daysElements= document.getElementById("days");
const hoursElements= document.getElementById("hours");
const minElements= document.getElementById("min");
const secElements= document.getElementById("sec");
const endElements= document.getElementById("end");


const holiday = "3 Mar 2023";

function countdown() {
  const newHolidayDate = new Date(holiday);
  const currentDate = new Date();

  const totalSeconds = (newHolidayDate - currentDate) / 1000;

  const weeks = Math.floor(totalSeconds / 3600 / 24 / 7) ;
  const days = Math.floor(totalSeconds / 3600 /24) % 7;
  const hours = Math.floor(totalSeconds/ 3600) % 24;
  const min = Math.floor(totalSeconds / 60) % 60;
  const sec = Math.floor(totalSeconds) % 60;
  

  // console.log(days, hours, min, sec);

 

  weeksElements.innerHTML = formatTime(weeks) +"<span><br>weeks</span>";
  daysElements.innerHTML = formatTime(days)+"<span><br>days</span>";
  hoursElements.innerHTML = formatTime(hours)+"<span><br>hours</span>";
  minElements.innerHTML = formatTime(min)+"<span><br>min</span>";
  secElements.innerHTML = formatTime(sec)+"<span><br>sec</span>";

  // Display the message when countdown is over
  if (totalSeconds < 0) {
    clearInterval(countdown);
    document.getElementById("weeks").innerHTML = ""
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("min").innerHTML = ""
    document.getElementById("sec").innerHTML = ""
    document.getElementById("end").innerHTML = " &#x1F389; TIME UP!!! &#x1F389;";
  }
    
  

}


// craete 0
function formatTime(time) {
  // if we have less then ten then show 0 , otherwise show time(0 front)
  return time < 10 ? (`0${time}`) : time;  
}



// initial call
countdown();

setInterval(countdown,1000);