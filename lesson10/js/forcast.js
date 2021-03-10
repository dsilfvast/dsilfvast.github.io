// JavaScript source code
// api key: 120a7a010c6068ccbed968846f77e225
// api key name: wdd230

// Current weather
// https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=120a7a010c6068ccbed968846f77e225

// 5 day forcast
// https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=120a7a010c6068ccbed968846f77e225

// one call API
// https://api.openweathermap.org/data/2.5/onecall?lat=42.0963&lon=-111.8766&units=imperial&exclude=current,minutely,daily,alerts&appid=120a7a010c6068ccbed968846f77e225


const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=120a7a010c6068ccbed968846f77e225';
const forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=120a7a010c6068ccbed968846f77e225';

fetch(weatherURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing

        let temp = jsonObject.main.temp;
        let tempHigh = jsonObject.main.temp_max;
        let wind = jsonObject.wind.speed;

        document.getElementById('weather-current').textContent = jsonObject.weather[0].description;
        document.getElementById('weather-temp').textContent = Number(temp).toFixed(0);
        document.getElementById('weather-high').textContent = Number(tempHigh).toFixed(0);
        document.getElementById('weather-humidity').textContent = jsonObject.main.humidity;
        document.getElementById('weather-wind-speed').textContent = Number(wind).toFixed(1);

        let output = "N/A"
        if (temp <= 50 && wind > 3) {
            output = (35.74 + 0.6215 * temp - 35.75 * wind ** 0.16 + 0.4275 * temp * wind ** 0.16).toFixed(1);
            output += " \xB0F";
        };

        document.getElementById("weather-wind-chill").textContent = output;

    });

fetch(forcastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let counter = 0;
        let output = "";
        let temp = "";
        let weatherType = "";
        let weatherTypeName = "";
        let day = "";

        for (let a = 0; a < jsonObject.list.length; a++) {
            if (jsonObject.list[a].dt_txt.includes("18:00")) {
                counter++;

                // get the day of the week
                let date = new Date(Number(jsonObject.list[a].dt)*1000);
                day = dayName[date.getDay()];

                // get the temperature
                temp = jsonObject.list[a].main.temp.toFixed(0);
                // get the weather type
                weatherType = jsonObject.list[a].weather[0].icon;
                weatherTypeName = jsonObject.list[a].weather[0].description;
/* this code will use my own weather icons
output += `<div>
    <p>${day}</p>
    <img src="images/${weatherType}.jpg" alt="${weatherTypeName}" />
    <p>&nbsp;${temp}&#176;F</p>
</div>`;
*/

output += `<div>
    <p>${day}</p>
    <img src="http://openweathermap.org/img/wn/${weatherType}@2x.png" alt="${weatherTypeName}" />
    <p>&nbsp;${temp}&#176;F</p>
</div>`;
            }
            if (counter >= 5) break;
        }

        document.getElementById("five-day").innerHTML = output;
    });
