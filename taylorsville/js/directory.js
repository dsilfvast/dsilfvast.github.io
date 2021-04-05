// JavaScript source code
const requestURL = 'https://dsilfvast.github.io/taylorsville/json/directory.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        // console.table(jsonObject);  // temporary checking for valid response and data parsing
        const businesses = jsonObject['directory'];
        for (let i = 0; i < businesses.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let image = document.createElement('img');
            let address = document.createElement('div');
            let phone = document.createElement('div');
            let website = document.createElement('div');
            let lcode = document.createElement('div');
            

            h2.textContent = businesses[i].name;
            image.setAttribute('src', 'images/logos/' + businesses[i].logo);
            image.setAttribute('alt', businesses[i].name + ' Logo');
            address.innerHTML = "Location:<br />" + businesses[i].address;
            phone.textContent = "Phone: " + businesses[i].phone;
            website.innerHTML = `<a href="${businesses[i].website}" target="_blank" rel="noopener" title="${businesses[i].name}" >Website</a>`;
            lcode.innerHTML = `<a href="${businesses[i].map}" target="_blank" rel="noopener" title="Map: ${businesses[i].name}" >Map Code: ${businesses[i].lcode}</a>`;

            card.appendChild(image);
            card.appendChild(h2);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);
            card.appendChild(lcode);
            document.getElementById('directory').appendChild(card);
        }
    });