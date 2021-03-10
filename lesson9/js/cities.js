// JavaScript source code
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

function loadCity(cities, cityName) {
    for (let i = 0; i < cities.length; i++) {
        if (cityName == cities[i].name) {
            let city = document.createElement('section');
            let h3 = document.createElement('h3');
            let mottoP = document.createElement('p');            
            let foundedDiv = document.createElement('div');
            let populationDiv = document.createElement('div');
            let rainDiv = document.createElement('div');
            let statsDiv = document.createElement('div');
            let image = document.createElement('img');

            h3.textContent = cities[i].name;
            mottoP.textContent = cities[i].motto;
            foundedDiv.textContent = "Year Founded: " + cities[i].yearFounded;
            populationDiv.textContent = "Population: " + cities[i].currentPopulation;
            rainDiv.textContent = "Annual Rain Fall: " + cities[i].averageRainfall;
            image.setAttribute('src', "images/" + cities[i].photo);
            image.setAttribute('alt', cities[i].name);

            statsDiv.appendChild(foundedDiv);
            statsDiv.appendChild(populationDiv);
            statsDiv.appendChild(rainDiv);

            city.appendChild(h3);
            city.appendChild(mottoP);
            city.appendChild(statsDiv);
            city.appendChild(image);
            document.querySelector('div.cities-div').appendChild(city);

            return;
        }
    }
}

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const cities = jsonObject['towns'];
      
        loadCity(cities, "Preston");
        loadCity(cities, "Soda Springs");
        loadCity(cities, "Fish Haven");

    });