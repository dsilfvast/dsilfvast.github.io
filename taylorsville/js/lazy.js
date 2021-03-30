// JavaScript source code

var images;

// dissable lazy loading until the placeholder image is loaded and executes  onload="enableLazyLoading()"
var isPlaceholderLoaded = false;

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) return;
    img.src = src;
    img.removeAttribute("data-src");
    img.classList.add("blur");
}

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
       // if (entry.intersectionRatio == 1 && entry.isIntersecting) {
        // if (entry.isIntersecting) {
        if (entry.intersectionRatio == 1 && isPlaceholderLoaded) {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }        
    })
}, imgOptions);

function enableLazyLoading() {
    isPlaceholderLoaded = true;

    // Get all the elements with a 'data-src' attribute
    images = document.querySelectorAll("[data-src]");

    images.forEach(image => {
        imgObserver.observe(image);
    });
}
