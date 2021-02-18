// JavaScript source code

let hambutton;
let mainnav;

function showAnnouncement() {
    let today = new Date();
    if (today.getDay() == 5) {
        let pageBuffer = '<div class="announcement">' +
            'Saturday&nbsp;=&nbsp;Preston&nbsp;Pancakes&nbsp;in&nbsp;the&nbsp;Park! ' +
            '&nbsp;&nbsp;&nbsp;9:00&nbsp;a.m.&nbsp;Saturday&nbsp;at&nbsp;the&nbsp;city&nbsp;park&nbsp;pavilion.&nbsp;&nbsp;&nbsp;' +
            '</div >';

        pageBuffer += document.getElementsByTagName("body")[0].innerHTML;
        document.getElementsByTagName("body")[0].innerHTML = pageBuffer;
    }
}

function startPage() {
    getModifiedDate();
    showAnnouncement();
    loadFiveDayForcast();


    hambutton = document.querySelector('.ham');
    mainnav = document.querySelector('.navigation')

    hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive')}, false);
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive');};

}

function getModifiedDate() {

    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let today = new Date();
    let modifiedDate = new Date(Date.parse(document.lastModified));

    let output = weekDays[today.getDay()];
    output += ", ";
    output += String(today.getDate());
    output += " " + months[today.getMonth()];
    output += " " + today.getFullYear();

    document.getElementById("year").innerHTML = modifiedDate.getFullYear();
    document.getElementById("dateTime").innerHTML = output;
}

function loadFiveDayForcast() {
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayType = ["sunny", "cloudy", "partcloudy", "rainy", "windy", "snowy" ];

    let today = new Date();
    let output = "";

    let tempDay = "";
    let tempType = "";
    let tempHigh = 0;
    let tempLow = 0;

    // process the next five days
    for (let a = 0; a < 5; a++) {
        // get the next day
        let tempNum = today.getDay() + a;
        if (tempNum > 6) tempNum -= 7;
        tempDay = dayName[tempNum];

        // for now, use a random weather type
        tempType= dayType[Math.floor(Math.random() * 6)];
        // get a low temp
        tempLow = Math.floor(Math.random() * 60) + 20;
        // get high temp
        tempHigh = Math.floor(Math.random() * 16) + tempLow;

        output += `<div>
    <p>${tempDay}</p>
    <img src="images/${tempType}.jpg" />
    <p>High&nbsp;${String(tempHigh)}&#176;F</p>
    <p>Low&nbsp;${String(tempLow)}&#176;F</p>
</div>`;

        document.getElementById("five-day").innerHTML = output;
    }
}



