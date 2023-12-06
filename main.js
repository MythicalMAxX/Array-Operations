let arr = [1, 2, 3, 4, 5];
document.getElementById("array").innerText = arr.toString();

function updateArray() {
  document.getElementById("array").innerText = arr.toString();
}

function push() {
  let inputValue = document.getElementById("inputValue").value;
  if (inputValue !== "") {
    arr.push(inputValue);
    updateArray();
  }
}

function pop() {
  arr.pop();
  updateArray();
}

function shift() {
  arr.shift();
  updateArray();
}

function unshift() {
  let inputValue = document.getElementById("inputValue").value;
  if (inputValue !== "") {
    arr.unshift(inputValue);
    updateArray();
  }
}

function concat() {
  let inputValue = document.getElementById("inputValue").value;
  if (inputValue !== "") {
    arr = arr.concat([inputValue]);
    updateArray();
  }
}

function join() {
  document.getElementById("output").innerText = arr.join(", ");
}

function sort() {
  arr.sort((a, b) => a - b);
  updateArray();
}

function length() {
  document.getElementById("output").innerText = arr.length;
}

function clearInput() {
  document.getElementById("inputValue").value = "";
}
function reverse() {
  arr.reverse();
  updateArray();
}
