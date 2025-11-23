let countElement = document.getElementById("Counter");
let addButton = document.getElementById("Add");
let minusButton = document.getElementById("Minus");
let resetButton = document.getElementById("Reset");
let count = 0;

function Increment() {
  count++;
  countElement.innerHTML = count;
}
function Decrement() {
  if (count > 0) {
    count--;
    countElement.innerHTML = count;
  }
}
function Reset() {
  count = 0;
  countElement.innerHTML = count;
}

