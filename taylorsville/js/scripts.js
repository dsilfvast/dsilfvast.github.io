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

function topMargin(ID, spacing = '0px') {
    document.getElementById(ID).style.marginTop = spacing;

}

function closeAlert(ID, bodyID, delay = 0) {
    let elem = document.getElementById(ID);
    elem.style.right = "100%";
    topMargin(bodyID);

    setTimeout(function () {
        elem.parentNode.removeChild(elem);    
    }, delay);
}

function closeJoin(ID, delay = 0) {
    let elem = document.getElementById(ID);
    elem.style.right = "100%";

    setTimeout(function () {
        elem.parentNode.removeChild(elem);
    }, delay);
}

function gridview(ID, setClass, removeClass) {
    document.getElementById(ID).classList.remove(removeClass);
    document.getElementById(ID).classList.add(setClass);
}