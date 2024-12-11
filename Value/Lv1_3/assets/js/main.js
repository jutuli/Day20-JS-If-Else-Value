function calculateAgeDifference() {
  let age1 = document.getElementById("age1").valueAsNumber;
  let age2 = document.getElementById("age2").valueAsNumber;
  const ageDifference = document.querySelector(".age-difference");
  const result = age1 - age2;
  ageDifference.innerHTML = `Die Differenz ist: ${result}`;
}
