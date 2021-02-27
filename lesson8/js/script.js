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
    if (fullName != null)
        document.getElementById(ID).innerHTML = ", " + fullName;
}

function formReport(ID) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let output = "";

    if (urlParams.get('full-name') != null)
        output = "<strong>Name: </strong>" + urlParams.get('full-name') + "<br />";
    if (urlParams.get('email') != null)
        output += "<strong>Email: </strong>" + urlParams.get('email') + "<br />";
    if (urlParams.get('phone') != null)
        output += "<strong>Phone: </strong>" + urlParams.get('phone') + "<br />";
    if (urlParams.get('zipcode') != null)
        output += "<strong>Zip Code: </strong>" + urlParams.get('zipcode') + "<br />";
    if (urlParams.get('stormdate') != null)
        output += "<strong>Storm Date: </strong>" + urlParams.get('stormdate') + "<br />";
    if (urlParams.get('stormtype') != null)
        output += "<strong>Storm Type: </strong>" + urlParams.get('stormtype') + "<br />";
    if (urlParams.get('severity') != null)
        output += "<strong>Severity: </strong>" + urlParams.get('severity') + "<br />";
    if (urlParams.get('stormregion') != null)
        output += "<strong>Region: </strong>" + urlParams.get('stormregion') + "<br />";
    if (urlParams.get('danger') != null)
        output += "<strong>Danger: </strong>" + urlParams.get('danger') + "<br />";
    if (urlParams.get('comment') != null)
        output += "<strong>Comment: </strong>" + urlParams.get('comment') + "<br />";

    document.getElementById(ID).innerHTML = output;
}
