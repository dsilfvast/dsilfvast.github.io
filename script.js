// JavaScript source code
var rotation = 180;
var step = 2;
var lockSetTime = false;
var lockSpinColors = false;

function startPage() {
    setTime();
    setInterval(setTime, 1000);
    setInterval(spinColors, 100);
}

function setTime() {

    let myTime = new Date();
    let output = "Last Update: " +
        myTime.toLocaleString("en-US", {
            month: "2-digit", day: "2-digit",
            year: "numeric", hour: "2-digit",
            minute: "2-digit", second: "2-digit"
        });

    document.getElementById("dateTime").innerHTML = output;
}

function spinColors() {
    if (rotation >= 185) step = -2;
    if (rotation <= 175) step = 2;
    rotation += step;

    let degrees = rotation.toString() + "deg, ";

    document.getElementsByTagName("header").item(0).style.backgroundImage = "linear-gradient(" + degrees + "#00A0FF, #00FFA0)";
    document.getElementsByTagName("footer").item(0).style.backgroundImage = "linear-gradient(-" + degrees + "#00FFA0, #00A0FF)";
}


