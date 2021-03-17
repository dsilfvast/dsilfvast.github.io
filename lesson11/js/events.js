// JavaScript source code
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

let cityEvents = document.getElementById("events-js").getAttribute("title");

switch (cityEvents) {
    case 'preston':
        cityEvents = "Preston";
        break;
    case 'sodasprings':
        cityEvents = "Soda Springs";
        break;
    case 'fishhaven':
        cityEvents = "Fish Haven";
        break;
}


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const cities = jsonObject['towns'];
        let eventsDiv = document.getElementsByClassName("events-div")[0];

        for (let i in cities) {
            if (cities[i].name == cityEvents) {
                for (let e in cities[i].events) {
                    let event = document.createElement('div');
                    event.textContent = cities[i].events[e];
                    eventsDiv.appendChild(event);
                }
            }
        }

    });