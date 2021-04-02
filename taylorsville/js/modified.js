// JavaScript source code
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let today = new Date();
let modifiedDate = new Date(Date.parse(document.lastModified));

let output = "Last modified: ";
output += weekDays[today.getDay()];
output += ", ";
output += String(today.getDate());
output += " " + months[today.getMonth()];
output += " " + today.getFullYear();

document.getElementById("year").innerHTML = modifiedDate.getFullYear();
document.getElementById("last-modified").innerHTML = output;
