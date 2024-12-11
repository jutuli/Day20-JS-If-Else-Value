function calculateAge() {
  const birthYear = document.getElementById("birthYear").valueAsNumber;
  const age = document.querySelector(".your-age");
  let result = 2024 - birthYear;
  age.innerText = `Du bist ${result} Jahre alt.`;
}
