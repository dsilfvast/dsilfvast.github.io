// JavaScript source code


let hambutton;
let mainnav;

function startPage() {
    hambutton = document.querySelector('.ham');
    mainnav = document.querySelector('.navigation')

    hambutton.addEventListener('click', () => { mainnav.classList.toggle('responsive') }, false);
    // To solve the mid resizing issue with responsive class on
    window.onresize = () => { if (window.innerWidth > 760) mainnav.classList.remove('responsive'); };

}




function closeAlert(ID, delay = 0) {
    let elem = document.getElementById(ID);
    distance = Number(elem.clientWidth);


    //elem.style.left = String(distance);
    elem.style.left = `-${distance}px`;

    setTimeout(function () {
        elem.parentNode.removeChild(elem);
    }, delay);
}

function goTo(page) {
    location.href = page;
}

function topMargin(ID, spacing = '0px') {
    document.getElementById(ID).style.marginTop = spacing;

}