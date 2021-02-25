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





