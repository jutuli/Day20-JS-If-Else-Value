function ageCheck() {
  let age = document.getElementById("age").valueAsNumber;
  const resultOutput = document.querySelector(".age-result");
  if (age >= 18) {
    resultOutput.innerText = "Over 18";
  } else {
    resultOutput.innerText = "Under 18";
  }
}
