// JavaScript source code
function showAnnouncement() {
    let today = new Date();
    if (today.getDay() == 5) {
        document.getElementsByClassName("announcement-div")[0].innerHTML =
            'Saturday&nbsp;=&nbsp;Preston&nbsp;Pancakes&nbsp;in&nbsp;the&nbsp;Park! ' +
            '&nbsp;&nbsp;&nbsp;9:00&nbsp;a.m.&nbsp;Saturday&nbsp;at&nbsp;the&nbsp;city&nbsp;park&nbsp;pavilion.&nbsp;&nbsp;&nbsp;';
        document.getElementsByClassName("announcement-div")[0].style.display = "block";
    }
}