const counterEl = document.getElementById("counter-el")
const saveEl = document.getElementById("save-el")

let count = 0




function increment(){
  count += 1
  counterEl.innerText = count
}

function save(){
  let total = count + " - "
  saveEl.textContent += total
  counterEl.textContent = 0
  count = 0 
}


