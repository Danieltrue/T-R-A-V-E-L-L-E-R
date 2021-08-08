function animateHeader(): void {
    //animte teh head text
    const ease: string = "easeInOutExpo";
    anime({
        targets: ".head-text h1 ul li",
        translateY: [-60, 0],
        opacity: [0, 1],
        delay: anime.stagger(250),
        duration: 1500,
        easing: "easeInOutExpo",
    });

    anime({
        targets: ".country",
        translateY: [60, 0],
        opacity: [0, 1],
        delay: 3000,
        duration: 500,
        easing: "easeInSine",
    });
    anime({
        targets: ".head-text button",
        translateY: [-60, 0],
        opacity: [0, 1],
        delay: 3000,
        duration: 500,
        easing: "easeInSine",
    });
    anime({
        targets: ".hamburger div",
        translateX: [-40, 0],
        opacity: [0, 1],
        easing: "easeInOutExpo",
        delay: 3500,
    });
    anime({
        targets: ".series h3",
        translateY: [-40, 0],
        opacity: [0, 1],
        easing: "easeInOutExpo",
        delay: 4000,
    });
    anime({
        targets: ".menu-bar > div",
        translateX: [40, 0],
        opacity: [0, 1],
        easing: "easeInOutExpo",
        delay: 4500,
    });
    anime({
        targets: ".hole",
        translateY: [-60, 0],
        opacity: [0, 1],
        easing: "easeInExpo",
        delay: 5000,
    });
}

window.addEventListener("load", animateHeader);
