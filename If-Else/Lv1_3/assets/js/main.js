function ageCheck() {
  event.preventDefault();
  let age = document.getElementById("age").valueAsNumber;
  const resultOutput = document.querySelector(".age-result");
  if (age >= 18) {
    resultOutput.innerText = "Ja, Du kannst Shisha rauchen";
  } else {
    resultOutput.innerText = "Du darfst noch nicht Shisha rauchen";
  }
}
