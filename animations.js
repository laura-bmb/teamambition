const checkpoint = 500;

window.addEventListener("scroll", () => {


    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".text").style.opacity = opacity;
    document.querySelector(".arrow").style.opacity = opacity;
    document.querySelector(".logoclan").style.opacity = opacity;
});