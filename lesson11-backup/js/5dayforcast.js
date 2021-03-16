// JavaScript source code
function loadFiveDayForcast() {
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayType = ["sunny", "cloudy", "partcloudy", "rainy", "windy", "snowy"];

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
        tempType = dayType[Math.floor(Math.random() * 6)];
        // get a low temp
        tempLow = Math.floor(Math.random() * 60) + 20;
        // get high temp
        tempHigh = Math.floor(Math.random() * 16) + tempLow;

        output += `<div>
    <p>${tempDay}</p>
    <img src="images/${tempType}.jpg" alt="${tempType}" />
    <p>High&nbsp;${String(tempHigh)}&#176;F</p>
    <p>Low&nbsp;${String(tempLow)}&#176;F</p>
</div>`;

        document.getElementById("five-day").innerHTML = output;
    }
}