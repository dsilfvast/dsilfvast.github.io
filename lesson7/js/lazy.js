// JavaScript source code

const images = document.querySelectorAll("[data-src]")

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) return;
    img.src = src;
    img.removeAttribute("data-src");
    img.classList.add("blur");
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 100px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {

        if (entry.intersectionRatio == 1) {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }        
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});