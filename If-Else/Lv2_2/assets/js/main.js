function checkAirQuality() {
  let aqiNumber = document.getElementById("aqi").valueAsNumber;
  const healthConcernLevelHTML = document.querySelector(
    ".health-concern-level"
  );
  const healthEffectLevelHTML = document.querySelector(".health-effect-level");
  const aqiNumberHTML = document.querySelector(".air-quality-number");
  const background = document.querySelector("body");

  if (aqiNumber <= 50) {
    healthConcernLevelHTML.innerText = " Level of health concern: Good";
    healthEffectLevelHTML.innerText =
      "Level of health effect: Little or no risk";
    aqiNumberHTML.innerText = `Luftqualität: ${aqiNumber}`;
    background.style.backgroundColor = "green";
  } else if (aqiNumber > 50 && aqiNumber <= 100) {
    healthConcernLevelHTML.innerText = " Level of health concern: Moderate";
    healthEffectLevelHTML.innerText =
      "Level of health effect: Accepatable Quality";
    aqiNumberHTML.innerText = `Luftqualität: ${aqiNumber}`;
    background.style.backgroundColor = "yellow";
  } else if (aqiNumber > 100 && aqiNumber <= 150) {
    healthConcernLevelHTML.innerText =
      " Level of health concern: Unhealthy for sensitive groups";
    healthEffectLevelHTML.innerText =
      "Level of health effect: Generable publics not likely affected";
    aqiNumberHTML.innerText = `Luftqualität: ${aqiNumber}`;
    background.style.backgroundColor = "orange";
  } else {
    healthConcernLevelHTML.innerText =
      "Something went wrong with the range. Please reload the page";
  }
}
