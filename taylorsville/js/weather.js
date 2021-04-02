// JavaScript source code
// api key: 120a7a010c6068ccbed968846f77e225
// api key name: wdd230

// one call API
// https://api.openweathermap.org/data/2.5/onecall?lat=40.6964&lon=-111.9873&units=imperial&exclude=minutely,hourly&appid=120a7a010c6068ccbed968846f77e225

weatherURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.6964&lon=-111.9873&units=imperial&exclude=minutely,hourly&appid=120a7a010c6068ccbed968846f77e225';

fetch(weatherURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // get today's weather info
        let forecast = document.getElementById('weather-forecast');

        let output =
`<div class="weather-large">
<div class="weather-current-div">
<div class="weather-info">
    <div>
        Today's Weather: ${jsonObject.current.weather[0].description}
    </div>
    <div>
        Temp: ${Math.round(jsonObject.current.temp)}&deg;F
    </div>
    <div>
        Humidity: ${jsonObject.current.humidity}%
    </div>
    <img src="https://openweathermap.org/img/wn/${jsonObject.current.weather[0].icon}@2x.png" alt="${jsonObject.current.weather[0].description}" />
</div>
</div>`;

        output += '<div class="weather-card-bar">';

        // get the next 3 days
        for (let a = 1; a <= 3; a++) {
            let date = new Date(jsonObject.daily[a].dt * 1000);

            output +=
`
<div class="weather-card">
    <div>
    </div>
    <div>
        ${dayName[date.getDay()]}
    </div>
    <img src="https://openweathermap.org/img/wn/${jsonObject.daily[a].weather[0].icon}@2x.png" alt="${jsonObject.daily[a].weather[0].description}" />
    <div>
        High: ${Math.round(jsonObject.daily[a].temp.max)}&deg;F
    </div>
    <div>
        Low: ${Math.round(jsonObject.daily[a].temp.min)}&deg;F
    </div>
</div>
`;
        }
        output += '</div></div>';
        forecast.innerHTML += output;
    });

