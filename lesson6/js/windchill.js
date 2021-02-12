// JavaScript source code

let temp = parseFloat(document.getElementById("weather-high").innerHTML);
let windSpeed = parseFloat(document.getElementById("weather-wind-speed").innerHTML);

document.getElementById("weather-wind-chill").innerHTML =
    (35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16).toFixed(1);

