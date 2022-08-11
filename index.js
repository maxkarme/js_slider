let slider = document.getElementsByClassName("slider")[0];
let content = document.getElementById("slider-content");

let test = document.getElementsByClassName("test")[0];



setTimeout(() => {
    test.classList.remove("test");
}, 2000)

content.onmousewheel = (e) => {
    let active = document.getElementsByClassName("active")[0];

    if (e.deltaY < 0) scrollTop(active);
    else scrollBottom(active);
}

let scrollBottom = (active) => {
    if (active.classList.contains("active-bottom")) {
        active.classList.remove("active-bottom");
        active.classList.add("active-top");
        return;
    }

    let nextActive = active.nextElementSibling;
    if (nextActive == null) return;

    nextActive.classList.add("active");
    nextActive.classList.add("active-bottom");
    nextActive.classList.remove("card-top");

    active.classList.remove("active");
    active.classList.remove("active-top");
    active.classList.remove("active-bottom");
    active.classList.add("card-top");

    let selectedNavItem = document.getElementsByClassName("slider__nav-item_selected")[0];
    selectedNavItem.nextElementSibling.classList.add("slider__nav-item_selected");
    selectedNavItem.classList.remove("slider__nav-item_selected");
}

let scrollTop = (active) => {
    if (active.classList.contains("active-top")) {
        active.classList.remove("active-top");
        active.classList.add("active-bottom");
        return;
    }

    let nextActive = active.previousElementSibling;
    if (nextActive == null) return;

    nextActive.classList.add("active");
    nextActive.classList.add("active-top");
    nextActive.classList.remove("card-top");

    active.classList.remove("active");
    active.classList.remove("active-top");
    active.classList.remove("active-bottom");

    let selectedNavItem = document.getElementsByClassName("slider__nav-item_selected")[0];
    selectedNavItem.previousElementSibling.classList.add("slider__nav-item_selected");
    selectedNavItem.classList.remove("slider__nav-item_selected");
}