// JavaScript source code
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