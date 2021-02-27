// JavaScript source code

let hambutton;
let mainnav;

function startPage() {
    getModifiedDate();

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


//////////////////////////
// used for form handling

function setAutoFocus(ID) {
    console.log(document.getElementById(ID).focus());
}

function adjustSeverity(rating, targetID) {
    document.getElementById(targetID).innerHTML = rating;
    document.getElementById(targetID).style.fontSize = String(1.2 + parseInt(rating) * 0.1) + "rem";
}



function insertName(ID) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const fullName = urlParams.get('full-name');
    document.getElementById(ID).innerHTML = ", " + fullName;
}

function formReport(ID) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let output = "<strong>Name: </strong>" + urlParams.get('full-name') + "<br />";
    output += "<strong>Email: </strong>" + urlParams.get('email') + "<br />";
    output += "<strong>Phone: </strong>" + urlParams.get('phone') + "<br />";
    output += "<strong>Zip Code: </strong>" + urlParams.get('zipcode') + "<br />";
    output += "<strong>Storm Date: </strong>" + urlParams.get('stormdate') + "<br />";
    output += "<strong>Storm Type: </strong>" + urlParams.get('stormtype') + "<br />";
    output += "<strong>Severity: </strong>" + urlParams.get('severity') + "<br />";
    output += "<strong>Region: </strong>" + urlParams.get('stormregion') + "<br />";
    output += "<strong>Danger: </strong>" + urlParams.get('danger') + "<br />";
    output += "<strong>Comment: </strong>" + urlParams.get('comment') + "<br />";

    document.getElementById(ID).innerHTML = output;
}
