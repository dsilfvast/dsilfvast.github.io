// JavaScript source code

let temp = parseFloat(document.getElementById("weather-high").innerHTML);
let windSpeed = parseFloat(document.getElementById("weather-wind-speed").innerHTML);

let output = "N/A"
if (temp <= 50 && windSpeed > 3) {
    output = (35.74 + 0.6215 * temp - 35.75 * windSpeed ** 0.16 + 0.4275 * temp * windSpeed ** 0.16).toFixed(1);
    output += " \xB0F";
}
document.getElementById("weather-wind-chill").innerHTML = output;

