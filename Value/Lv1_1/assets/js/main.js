function doubleNumber() {
  let number = document.getElementById("double").valueAsNumber;
  const outputDiv = document.querySelector(".result");
  let output = number * 2;
  outputDiv.innerText = output;
}
