const counterEl = document.getElementById("counter-el")
let count = 0

function increment(){
 count = count + 1
  counterEl.innerHTML = count
}