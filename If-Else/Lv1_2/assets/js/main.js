function weather() {
  let weatherQuality = document.getElementById("weatherQuality").valueAsNumber;
  const weatherQualityRating = document.querySelector(
    ".weather-quality-rating"
  );
  if (weatherQuality <= 2) {
    weatherQualityRating.innerText = "schlecht";
  } else if (weatherQuality <= 5) {
    weatherQualityRating.innerText = "okay";
  } else if (weatherQuality <= 7) {
    weatherQualityRating.innerText = "gut";
  } else {
    weatherQualityRating.innerText = "super";
  }
}
